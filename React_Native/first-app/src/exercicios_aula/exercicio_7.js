import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07() {
    return <View style={styles.container}>

   
            <View style={{ flexDirection: "row",flex:1, gap:10}}>

                <View style={styles.greenBox}><Text style={styles.textStyle}></Text>verde</View>
                <View style={styles.redBox}><Text style={styles.textStyle}></Text></View>
                 </View>
                 <View style={{ flexDirection: "row",flex:1, gap:10}}>

                <View style={styles.blueBox}><Text style={styles.textStyle}></Text>verde</View>
                <View style={styles.orangeBox}><Text style={styles.textStyle}></Text></View>
                 </View>
        
    </View>
}

const styles = StyleSheet.create({
    container: {
        padding:20,
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

    orangeBox: {
        flex:1,
        backgroundColor: "orange",
        alignItems: "center",
        justifyContent: "center",

    },
});