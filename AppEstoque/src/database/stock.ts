import { db } from './database';

export async function addMovement(
  materialId: number,
  type: 'entrada' | 'saida',
  quantity: number
) {

  return await db.runAsync(
    `
    INSERT INTO stock_movements
    (material_id, type, quantity, date)
    VALUES (?, ?, ?, ?)
    `,
    [
      materialId,
      type,
      quantity,
      new Date().toISOString()
    ]
  );
}

export async function getStockTotals() {

  return await db.getAllAsync(
    `
    SELECT
      m.id,
      m.name,

      COALESCE(
        SUM(
          CASE
            WHEN sm.type='entrada'
            THEN sm.quantity
            ELSE -sm.quantity
          END
        ),
        0
      ) as total

    FROM materials m

    LEFT JOIN stock_movements sm
    ON sm.material_id=m.id

    GROUP BY m.id
    ORDER BY m.name
    `
  );
}

export async function getMovements() {

  return await db.getAllAsync(
    `
    SELECT
      sm.*,
      m.name

    FROM stock_movements sm
    JOIN materials m
      ON m.id=sm.material_id

    ORDER BY sm.id DESC
    LIMIT 10
    `
  );
}