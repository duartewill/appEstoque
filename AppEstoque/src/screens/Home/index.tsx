import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  FlatList,
  Modal,
  TextInput,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('stock.db');

export default function Home({ navigation }: any) {

  const [products, setProducts] = useState<any[]>([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [newProduct, setNewProduct] = useState('');

  // CRIA TABELA
  useEffect(() => {

    async function initDatabase() {

      await db.execAsync(`
        CREATE TABLE IF NOT EXISTS products (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT NOT NULL,
          quantity INTEGER
        );
      `);

      loadProducts();
    }

    initDatabase();

  }, []);

  // CARREGA PRODUTOS
  async function loadProducts() {

    const result = await db.getAllAsync(
      'SELECT * FROM products ORDER BY id DESC'
    );

    setProducts(result);
  }

  // CRIA PRODUTO
  async function createProduct() {

    if (newProduct.trim() === '') return;

    await db.runAsync(
      'INSERT INTO products (name, quantity) VALUES (?, ?)',
      [newProduct, 0]
    );

    setNewProduct('');
    setModalVisible(false);

    loadProducts();
  }

  // ADICIONA QUANTIDADE
  async function addItem(id: number, quantity: number) {

    await db.runAsync(
      'UPDATE products SET quantity = ? WHERE id = ?',
      [quantity + 1, id]
    );

    loadProducts();
  }

  // REMOVE QUANTIDADE OU PRODUTO
  async function DecreaseItem(id: number, quantity: number) {

    // SE ESTIVER ZERADO, APAGA O PRODUTO
    if (quantity === 0) {

      await db.runAsync(
        'DELETE FROM products WHERE id = ?',
        [id]
      );

      loadProducts();
      return;
    }
    

    // DIMINUI QUANTIDADE
    await db.runAsync(
      'UPDATE products SET quantity = ? WHERE id = ?',
      [quantity - 1, id]
    );

    loadProducts();
  }

  async function RemoveItem(id: number) {

    // SE ESTIVER ZERADO, APAGA O PRODUTO
      await db.runAsync(
        'DELETE FROM products WHERE id = ?',
        [id]
      );

      loadProducts();
      return;
  }

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Controle de estoque
        </Text>
      </View>

      {/* LISTA */}
      <View style={styles.main}>

        {products.length === 0 ? (

          <View style={styles.emptyContainer}>
            <Ionicons
              name="cube-outline"
              size={70}
              color="#999"
            />

            <Text style={styles.emptyText}>
              Nenhum produto cadastrado
            </Text>
          </View>

        ) : (

          <FlatList
            data={products}
            keyExtractor={(item: any) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }: any) => (

              <View style={styles.card}>

                <View>
                  <Text style={styles.productName}>
                    {item.name}
                  </Text>

                  <Text style={styles.quantity}>
                    Quantidade: {item.quantity}
                  </Text>
                </View>

                <View style={styles.actions}>

                <TouchableOpacity
                    style={styles.RemoveButton}
                    onPress={() =>
                      RemoveItem(item.id)
                    }
                  >
                    <Ionicons
                      name="trash-outline"
                      size={20}
                      color="#fff"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.DecreaseButton}
                    onPress={() =>
                      DecreaseItem(item.id, item.quantity)
                    }
                  >
                    <Ionicons
                      name="remove"
                      size={20}
                      color="#fff"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.addButton}
                    onPress={() =>
                      addItem(item.id, item.quantity)
                    }
                  >
                    <Ionicons
                      name="add"
                      size={20}
                      color="#fff"
                    />
                  </TouchableOpacity>

                </View>

              </View>

            )}
          />

        )}

      </View>

      {/* BOTÃO FLUTUANTE */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons
          name="add"
          size={30}
          color="#fff"
        />
      </TouchableOpacity>

      {/* MODAL */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
      >

        <View style={styles.modalContainer}>

          <View style={styles.modalContent}>

            <Text style={styles.modalTitle}>
              Novo Produto
            </Text>

            <TextInput
              placeholder="Nome do produto"
              style={styles.input}
              value={newProduct}
              onChangeText={setNewProduct}
            />

            {/* SALVAR */}
            <TouchableOpacity
              style={styles.saveButton}
              onPress={createProduct}
            >
              <Text style={styles.buttonText}>
                Salvar
              </Text>
            </TouchableOpacity>

            {/* CANCELAR */}
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                setModalVisible(false);
                setNewProduct('');
              }}
            >
              <Text style={styles.buttonText}>
                Cancelar
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </Modal>

      {/* MENU */}
      <View style={styles.nav}>

        <TouchableOpacity
          onPress={() => navigation.navigate('Clients')}
        >
          <Ionicons
            name="people-outline"
            size={28}
            color="black"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
        >
          <Ionicons
            name="home-outline"
            size={28}
            color="black"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Options')}
        >
          <Ionicons
            name="settings-outline"
            size={28}
            color="black"
          />
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  header: {
    height: 90,
    backgroundColor: '#1e1e1e',

    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  main: {
    flex: 1,
    padding: 15,
  },

  emptyContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyText: {
    marginTop: 10,
    fontSize: 18,
    color: '#999',
  },

  card: {
    backgroundColor: '#fff',

    padding: 15,
    marginBottom: 12,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },

  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  quantity: {
    marginTop: 5,
    color: '#666',
  },

  actions: {
    flexDirection: 'row',
  },

  addButton: {
    width: 40,
    height: 40,

    borderRadius: 8,

    backgroundColor: '#000282',

    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: 10,
  },

  DecreaseButton: {
    width: 40,
    height: 40,
    backgroundColor: '#c30000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  RemoveButton: {
    width: 40,
    height: 40,
    backgroundColor: '#606060',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fab: { /// BOTÃO (+) PARA ADICIONAR NOVO MATERIAL
    position: 'absolute',

    right: 20,
    bottom: 90,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',

    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContent: {
    width: '85%',

    backgroundColor: '#fff',

    padding: 20,

    borderRadius: 15,
  },

  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',

    marginBottom: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',

    borderRadius: 8,

    padding: 12,

    marginBottom: 15,
  },

  saveButton: {
    backgroundColor: '#495a6d',

    padding: 12,

    borderRadius: 8,

    alignItems: 'center',
  },

  cancelButton: {
    backgroundColor: '#999',

    padding: 12,

    borderRadius: 8,

    alignItems: 'center',

    marginTop: 10,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  nav: {
    height: 70,

    flexDirection: 'row',

    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: '#eee',
  },

});