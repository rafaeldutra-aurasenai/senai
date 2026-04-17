import{StyleSheet, Text,View} from "react-native"
//exercicio 1
export default function CardProduto({produto,preco}){
    return(
        <View style={styles.card}>
            <Text style={styles.produto}>Produto: {produto}</Text>
            <Text style= {styles.info}>Preço: R$ {preco}</Text>
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