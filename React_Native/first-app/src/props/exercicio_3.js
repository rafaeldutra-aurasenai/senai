import{StyleSheet, Text,View} from "react-native"
//exercicio 3 
export default function CardSaudacao(props){
    return(
    <View style={styles.card}>
        <Text>olá, {props.nome} ! bem -vinda</Text>
        
    </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor: "#ffff",
        borderRadius: 12,
        padding:16,
        borderWidth:1,
        borderColor: "#e5e7eb"
    },
    nome:{
        fontSize:18,
        fontWeight:"bold",
        marginBottom: 4,
    },
    info:{
        fontSize:14,
        color:"#7e7f6a"
    },
    produto:{
        fontSize:18,
        fontWeight: "bold",
        marginBottom:4,


    },
    textjamilson:{
        fontSize:18,
        fontWeight:"bold",
        padding:18,

    }
})