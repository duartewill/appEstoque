import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from '../screens/Home';
import Clients from '../screens/Clients';
import Options from '../screens/Options';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
  <Stack.Screen name="Home" component={Home} />
  <Stack.Screen name="Clients" component={Clients} />
  <Stack.Screen name="Options" component={Options} />
</Stack.Navigator>
    </NavigationContainer>
  );
}