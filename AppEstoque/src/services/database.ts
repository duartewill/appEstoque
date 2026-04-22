import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('estoque.db');

import { Item } from '../types/item';

// Criar tabela
export function initDB() {
  db.execSync(`
    CREATE TABLE IF NOT EXISTS materiais (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      material TEXT,
      quantidade INTEGER,
      tipo TEXT
    );
  `);
}

export function inserirItem(material: string, quantidade: number, tipo: string) {
  db.runSync(
    'INSERT INTO materiais (material, quantidade, tipo) VALUES (?, ?, ?)',
    [material, quantidade, tipo]
  );
}


export function listarItens(): Item[] {
  return db.getAllSync('SELECT * FROM materiais') as Item[];
}

export function removerItem(id: number) {
  db.runSync('DELETE FROM materiais WHERE id = ?', [id]);
}