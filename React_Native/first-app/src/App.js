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
// import ExercicioView08 from './exercicios_aula/exercicio_8';
// import ExercicioView05 from './exercicios_aula/exercicio_5';
// import ExercicioView04 from './exercicios_aula/exercicio_4';
// import ExercicioView06 from './exercicios_aula/exercicio_6';
// import ExercicioView20 from './exercicio_20_somativa';
// import ExercicioView21 from './exercicio_21_somativa';
// import ExercicioView20 from './exercicio_20_somativa';
//import ExercicioView21 from './exercicio_21_somativa';

import CardSaudacao from './props/exercicio_3';
import CartaoUsuario from'./props/exercicio_2';
import CardProduto from './props/exercicio_1';
import PerfilAlunos from './props/exercicio_4';

export default function App(){
  return(
    <View styles={styles.container}>

      //exercicio 1
      {/* <CardProduto produto="damasco" preco={5.00}/>
      <CardProduto produto="lampada" preco={20.00}/>
      <CardProduto produto="cabo 1,5mm" preco={50.00}/> */}
      
      {/* //exercicio 2
      <CartaoUsuario nome="jairmilson" email="jairmilsonsubidordecapa@gmail.com"/> */}
      
      {/* //exercicio 3
      <CardSaudacao nome="janaina"/>
      <CardSaudacao nome="marcia"/>
      <CardSaudacao nome="lidia"/>
       */}

       <PerfilAlunos tudo="nome:carlos turma:DS-2025 matricula: 00123"/>

    
    </View>
    
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:"center",
    padding:18,
    
  },
  
});