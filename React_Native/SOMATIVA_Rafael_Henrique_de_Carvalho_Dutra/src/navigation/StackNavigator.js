//Rafael Henrique de Carvalho Dutra N26
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DetalheScreen from "../screens/DetalheScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();

// TODO: registrar HomeScreen (name="Home") e DetalheScreen (name="Detalhe")
export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="home" component={HomeScreen}/>
      <Stack.Screen name="Detalhe"  component={DetalheScreen}/>
    </Stack.Navigator>
  );
}
