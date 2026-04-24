import { useEffect, useState } from "react";
import { Alert, View, Text, Button, StyleSheet} from "react-native";

export default function TelaMoeda(){
    const[moedas,setMoedas]= useState(0);
    useEffect(()=>{
        console.log("clicou");
        if(moedas===5){
            Alert.alert("sucesso!", "voce desbloqueou o bau ");
        }
    },[moedas]);
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Moedas coletadas: {moedas}</Text>
            <Button title="pegar moeda🪙" onPress={() => setMoedas(moedas+1)}/>
            <Button title="Resetar moedas" onPress={()=> setMoedas(0)}/>
        </View>
    )

}
const styles = StyleSheet.create({
container: { flex: 1, justifyContent: "center", alignItems: "center" },
texto: { fontSize: 24, marginBottom: 20 },
});