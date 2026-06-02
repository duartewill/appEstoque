import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabaseSync('stock.db');

export async function initDatabase() {

  await db.execAsync(`
    PRAGMA journal_mode = WAL;
    PRAGMA foreign_keys = ON;

    CREATE TABLE IF NOT EXISTS materials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL UNIQUE
    );

    CREATE TABLE IF NOT EXISTS clients (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      phone TEXT,
      notes TEXT
    );

    CREATE TABLE IF NOT EXISTS stock_movements (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      material_id INTEGER,
      type TEXT,
      quantity INTEGER,
      date TEXT,

      FOREIGN KEY(material_id)
      REFERENCES materials(id)
    );

    CREATE TABLE IF NOT EXISTS orders (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client_id INTEGER,
      date TEXT,
      status TEXT,

      FOREIGN KEY(client_id)
      REFERENCES clients(id)
    );

    CREATE TABLE IF NOT EXISTS order_items (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      order_id INTEGER,
      material_id INTEGER,
      quantity INTEGER,

      FOREIGN KEY(order_id)
      REFERENCES orders(id),
      FOREIGN KEY(material_id)
      REFERENCES materials(id)
    );
  `);
}