import { Item } from '../types/Item';

export function calcularEstoque(lista: Item[]) {
  return lista.reduce((total, item) => {
    return item.tipo === 'Entrada'
      ? total + item.quantidade
      : total - item.quantidade;
  }, 0);
}