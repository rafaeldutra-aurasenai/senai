import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
    return <View style={styles.container}>
        
        
            <View style={{ flexDirection: "column",flex:1 }}>
                <View style={styles.greenBox}><Text style={styles.textStyle}>header</Text></View>
                <View style={styles.grayBox}><Text style={styles.textStyle}>main content</Text>verde</View>
                <View style={styles.blueBox}><Text style={styles.textStyle}>footer</Text></View>
                


            </View>
        
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 18,
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
    },
    greenBox: {
        height:60,
        
        

        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    grayBox: {
        flex:1,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
    },
    blueBox: {
        height: 50,
        backgroundColor: "blue",
        alignItems: "center",
        justifyContent: "center",
        
    },
});