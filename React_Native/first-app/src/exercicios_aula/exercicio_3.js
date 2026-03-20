import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView03() {
    return <View style={styles.container}>
        
        
            <View style={{ flexDirection: "row",  justifyContent:"space-between" , alignItems: "center" }}>
                <View style={styles.redBox}><Text style={styles.textStyle}>vermelho</Text></View>
                <View style={styles.greenBox}><Text style={styles.textStyle}>verde</Text>verde</View>
                <View style={styles.blueBox}><Text style={styles.textStyle}>azul</Text></View>
                


            </View>
        
    </View>
}

const styles = StyleSheet.create({
    container: {
        justifyContent:"center",
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
        height: 80,
        width: 80,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    blueBox: {
        height: 80,
        width: 80,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
    },
});