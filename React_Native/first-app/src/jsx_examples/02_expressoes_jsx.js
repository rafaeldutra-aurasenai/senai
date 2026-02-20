import { View, StyleSheet, Text, } from "react-native";

export function ExpressoesJSX() {
    const nome = "maria";
    const idade = 25;
    const preco = 49.9;

    const usuario ={
        nome: "pedro",
        cidade: "sao paulo",
    };
    return(
        
        <View style={styles.container}>
            <Text style={styles.titulo}>Expressoes JSX - Exemplos</Text>
            <View>
                <Text>Nome:{nome}</Text>
                <Text> idade: {idade} </Text>
            </View>
             <View>
                <Text>Maiusculas:{nome.toUpperCase()}</Text>
                <Text> Soma: {preco * 2} </Text>
            </View>
              <View>
                <Text>{usuario.nome}</Text>
                <Text>{usuario.cidade}</Text>
            </View>
        </View>
        
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItem: "center",
        backgroundColor: "#ffffff",
    },
    titulo:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    exemplo: {
        width:"80%",
        pading: 16,
        marginBottom:16,
        backgoundColor:"#fffff",
        borderRadius:8,
    }
});

