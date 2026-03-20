import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
    return <View style={styles.container}>
        
        
            <View style={styles.sidebar}>
                <Text style={styles.textStyle}>sidebar</Text>
                </View>



            <View style={styles.content}>
                <View style={styles.redBox}>
                    <Text style ={styles.textStyle}>card 1</Text>
                    </View>
                    <View style={styles.blueBox}>
                    <Text style ={styles.textStyle}>card 1</Text>
                    </View>
                    <View style={styles.greenBox}>
                    <Text style ={styles.textStyle}>card 1</Text>
                    </View>


            </View>


                
          
        
        
        
    </View>
}

const styles = StyleSheet.create({
    container: {
        
        flexDirection:"row",
        flex: 1,
        
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    content:{
        flex:1,
        padding:10,
        gap:10,
    },
    redBox: {
        
        
        flex:1,

        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
    },
    greenBox: {
        flex:1,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    blueBox: {
        flex:1,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
    sidebar:{
        width:80,
        backgroundColor:"gray",
        alignItems:"center",
        justifyContent:"center"

    }
});