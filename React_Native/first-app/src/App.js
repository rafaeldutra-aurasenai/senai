import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import ViewExample01 from './view_examples/scaffoldexe';
// import ViewExample02 from './view_examples/exemeplo2';
// import ExercicioView01 from './exercicios_aula/exercicio_1';
// import ExercicioView02 from './exercicios_aula/exercicio_2';
// import ExercicioView03 from './exercicios_aula/exercicio_3';
// import ExercicioView04 from './exercicios_aula/exercicio_4';
// import ExercicioView05 from './exercicios_aula/exercicio_5';
// import ExercicioView06 from './exercicios_aula/exercicio_6';
import ExercicioView08 from './exercicios_aula/exercicio_8';

export default function App() {
  return (
    <View style={styles.container}>
      <ExercicioView08/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  
});