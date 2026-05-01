import { Item } from '../types/item';

export function calcularEstoque(lista: Item[]) {
  return lista.reduce((total, item) => {
    return item.tipo === 'Entrada'
      ? total + item.quantidade
      : total - item.quantidade;
  }, 0);
}