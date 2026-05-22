import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import DrawerNavigator from "./navigation/drawer_navigation";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <DrawerNavigator />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});