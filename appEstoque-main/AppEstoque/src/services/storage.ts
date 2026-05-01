import AsyncStorage from '@react-native-async-storage/async-storage';
import { Item } from '../types/item';

const KEY = 'materiais';

export async function carregarDados(): Promise<Item[]> {
  const dados = await AsyncStorage.getItem(KEY);
  return dados ? JSON.parse(dados) : [];
}

export async function salvarLista(lista: Item[]) {
  await AsyncStorage.setItem(KEY, JSON.stringify(lista));
}

export async function limparDados() {
  await AsyncStorage.removeItem(KEY);
}