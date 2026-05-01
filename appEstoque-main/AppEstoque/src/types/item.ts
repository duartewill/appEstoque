export type Item = {
  id: number;
  material: string;
  quantidade: number;
  tipo: 'Entrada' | 'Saída';
};