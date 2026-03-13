import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewExample01 from './view_examples/scaffoldexe';
import ViewExample02 from './view_examples/exemeplo2';
import ExercicioView01 from './exercicios_aula/exercicio_1';
import ExercicioView02 from './exercicios_aula/exercicio_2';

export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView02/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});