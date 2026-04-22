import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Item } from './types/item';
import { calcularEstoque } from './utils/estoque';

import InputField from './components/InputField';
import BotaoAcao from './components/BotaoAcao';
import ItemLista from './components/ItemLista';

import {
  initDB,
  inserirItem,
  listarItens,
  removerItem,
} from './services/database';

export default function App() {
  const [material, setMaterial] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [lista, setLista] = useState<Item[]>([]);

  useEffect(() => {
  initDB();
  carregarItens();
}, []);

  function carregarItens() {
  const dados = listarItens() as Item[];
  console.log('DADOS:', dados);
  setLista(dados);
}

  function adicionar(tipo: 'Entrada' | 'Saída') {
    if (!material || !quantidade) return;

    inserirItem(material, Number(quantidade), tipo);
    carregarItens();
    limparCampos();
  }

  function limparCampos() {
    setMaterial('');
    setQuantidade('');
  }

  function remover(id: number) {
    removerItem(id);
    carregarItens();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Controle de Materiais</Text>

      <Text style={styles.estoque}>
        Estoque Total: {calcularEstoque(lista)}
      </Text>

      <InputField
        placeholder="Nome do material"
        value={material}
        onChangeText={setMaterial}
      />

      <InputField
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        numeric
      />

      <BotaoAcao titulo="Entrada" onPress={() => adicionar('Entrada')} />
      <BotaoAcao titulo="Saída" onPress={() => adicionar('Saída')} />

      <FlatList
        data={lista}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ItemLista
            item={item}
            onPress={() => remover(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f2f2f2',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  estoque: {
    fontSize: 18,
    marginBottom: 10,
  },
});