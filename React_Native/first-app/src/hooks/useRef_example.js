import { useRef } from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";

export default function TelaLogin(){
    const senhaRef =  useRef(null);
    return(
        <View style={StyleSheet.container}>
            <Text style={styles.titulo}>login</Text>
            <TextInput style={styles.input} 
            placeholder="digite o seu e-mail"
            keyboardType="email-adress"
            returnKeyType="next"
            onSubmitEditing={()=> senhaRef.current?.focus()}/>


            
            <TextInput style={styles.input} 
            placeholder="digite a sua senha"
            secureTextEntry={true}
            returnKeyType="send"
            ref={senhaRef}/>

            
        </View>
    );
}
const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
justifyContent: "center",
},
titulo: {
fontSize: 24,
fontWeight: "bold",
marginBottom: 20,
textAlign: "center",
},
input: {
borderWidth: 1,
borderColor: "#ccc",
borderRadius: 8,
padding: 15,
marginBottom: 15,
fontSize: 16,
},
});