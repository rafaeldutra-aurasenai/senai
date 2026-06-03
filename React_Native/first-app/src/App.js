

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./navigation/tab_navigation";



export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <BottomTabNavigator/>

      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});