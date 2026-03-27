import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView20() {
    return <View style={styles.container}>



        <View style={styles.promocaoBox}><Text style={styles.textStyle}>promocao</Text></View>
        <View style={{ flexDirection: "row", gap: 8, padding: 3 }}>
            <View style={styles.cardA}><Text style={styles.textStyle}>Card A</Text></View>
            <View style={styles.cardB}><Text style={styles.textStyle}>Card B</Text></View>
            <View style={styles.cardC}><Text style={styles.textStyle}>Card C</Text></View>
        </View>
        <View style={styles.destaqueBox}><Text style={styles.textStyle}>destaque</Text>verde</View>
        <View style={{ flexDirection: "row", gap: 8, padding: 3 }}>
            <View style={styles.catA}><Text style={styles.textStyle}>Cat A</Text></View>
            <View style={styles.catB}><Text style={styles.textStyle}>Cat B</Text></View>
            <View style={styles.catC}><Text style={styles.textStyle}>Cat C</Text></View>
        </View>





    </View>
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        padding: 8,
        gap: 8,


    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    promocaoBox: {
        height: 80,



        backgroundColor: "#e74c3c",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },
    destaqueBox: {
        flex: 1,
        backgroundColor: "#2c3e50",
        alignItems: "center",
        justifyContent: "center",
        borderRadius:8
    },
    cardA: {
        height: 150,
        flex: 1,
        backgroundColor: "#2ecc71",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    cardB: {
        height: 150,
        flex: 1,
        backgroundColor: "#3498db",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    cardC: {
        height: 150,
        flex: 2,
        backgroundColor: "#f39c12",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    catA: {
        height: 100,
        flex: 1,
        backgroundColor: "#9b59b6",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    catB: {
        height: 100,
        flex: 1,
        backgroundColor: "#1abc9c",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    catC: {
        height: 100,
        flex: 1,
        backgroundColor: "#e67e22",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
});