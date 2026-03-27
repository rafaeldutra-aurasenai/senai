import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView21() {
    return <View style={styles.container}>



        <View style={styles.headerBox}><Text style={styles.textStyle}>header</Text></View>

        <View style={{ flexDirection: "row", gap: 8,  flex: 1 }}>
            <View style={styles.sidebar}>
                <Text style={styles.textStyle} >sidebar</Text>
            </View>
            <View style={{ flexDirection: "column", gap: 8,  flex: 1 }}>
                <View style={{ flexDirection: "row", gap: 8,  flex: 1 }}>
                    <View style={styles.cardA}><Text style={styles.textStyle}>Card A</Text></View>
                    <View style={styles.cardB}><Text style={styles.textStyle}>Card B</Text></View>
                </View>

                <View style={styles.divisorHorizontal}></View>


                <View style={{ flexDirection: "row", gap: 8,  flex: 1 }}>
                    <View style={styles.C}><Text style={styles.textStyle}>C</Text></View>
                    <View style={styles.cardD}><Text style={styles.textStyle}>Card D</Text></View>
                    <View style={styles.E}><Text style={styles.textStyle}>E</Text></View>
                </View>
            </View>




        </View>
        <View style={styles.footerBox}><Text style={styles.textStyle}>footer</Text></View>







    </View>
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        flex: 1,
        padding: 8,
        gap: 8,
        backgroundColor: "#1a1a1a"


    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    headerBox: {
        height: 60,



        backgroundColor: "#2c3e50",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },

    cardA: {

        flex: 1,
        backgroundColor: "#008839",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    cardB: {
        flex: 1,
        backgroundColor: "#0008ff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },


    sidebar: {
        width: 80,
        backgroundColor: "#95a5a6",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8,


    },
    divisorHorizontal: {
        height: 8,
        backgroundColor: "#34495e",
        borderRadius: 8,

    },
    C: {

        flex: 1,
        backgroundColor: "#ff0000",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    cardD: {
        flex: 2,
        backgroundColor: "#ffa600",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    E: {
        flex: 1,
        backgroundColor: "#7e0089",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8
    },
    footerBox: {
        height: 50,



        backgroundColor: "#2c3e50",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 8
    },

});