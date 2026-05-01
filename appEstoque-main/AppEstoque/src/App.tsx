import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Clients from './screens/Clients';
import Options from './screens/Options';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Início' }}
        />

        <Stack.Screen
          name="Clients"
          component={Clients}
          options={{ title: 'Clientes' }}
        />

        <Stack.Screen
          name="Options"
          component={Options}
          options={{ title: 'Configurações' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}