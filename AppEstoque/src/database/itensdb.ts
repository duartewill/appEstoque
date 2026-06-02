// CRUD para materiais na aba configurações
import { db } from './database';


export async function getMaterials() {

  return await db.getAllAsync(
    'SELECT * FROM materials ORDER BY name'
  );
}

export async function createMaterial(
  name: string
) {

  return await db.runAsync(
    'INSERT INTO materials (name) VALUES (?)',
    [name]
  );
}

export async function deleteMaterial(
  id: number
) {

  return await db.runAsync(
    'DELETE FROM materials WHERE id = ?',
    [id]
  );
}