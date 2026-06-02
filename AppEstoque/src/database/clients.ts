// CRUD para clientes na aba configurações

import { db } from './database';

export async function getClients() {

  return await db.getAllAsync(
    'SELECT * FROM clients ORDER BY name'
  );
}

export async function createClient(
  name: string,
  phone: string,
  notes: string
) {

  return await db.runAsync(
    `
      INSERT INTO clients
      (name, phone, notes)
      VALUES (?, ?, ?)
    `,
    [name, phone, notes]
  );
}

export async function deleteClient(
  id: number
) {

  return await db.runAsync(
    'DELETE FROM clients WHERE id = ?',
    [id]
  );
}