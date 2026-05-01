import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      

      <View style={styles.header}>
        <Text style={styles.title}>Controle de estoque</Text>
      </View>


      <View style={styles.main}>
        <Text style={styles.mainText}>Conteúdo principal</Text>
      </View>


      <View style={styles.nav}>

  <TouchableOpacity onPress={() => navigation.navigate('Clients')}>
    <Ionicons name="people-outline" size={28} color="black" />
  </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Home')}>
    <Ionicons name="home-outline" size={28} color="black" />  
    </TouchableOpacity>

  <TouchableOpacity onPress={() => navigation.navigate('Options')}>
    <Ionicons name="settings-outline" size={28} color="black" />
  </TouchableOpacity>

</View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 90,
    backgroundColor: '#1e1e1e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  mainText: {
    fontSize: 16,
  },

  nav: {
  height: 70,
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#eee',
},

  button: {
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 8,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});