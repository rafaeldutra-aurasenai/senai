import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FlatListExemplos from './flatlist/flatlist';

// import FormularioExemplo from './text_input/formulario'




export default function App(){
  return(
    <View style={styles.container}>

      <FlatListExemplos/>

     
    </View>
    
  )
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
    
  },
});