import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView05() {
    return <View style={styles.container}>

   
            <View style={{ flexDirection: "row",flex:1, gap:2}}>

                <View style={styles.greenBox}><Text style={styles.textStyle}>verde</Text>verde</View>
                <View style={styles.blueBox}><Text style={styles.textStyle}>azul</Text></View>



            </View>
        
    </View>
}

const styles = StyleSheet.create({
    container: {
        alignItem:"center",
        justifyContent: "center",
        flex: 1,
        gap: 18,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    redBox: {
        height: 80,
        width: 80,

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
});