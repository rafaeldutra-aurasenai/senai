import { View, Text, ScrollView, StyleSheet } from "react-native";


export default function Lista01() {
    const linguagem = "JavaScript";
    const ano = 2025;
    const valor = 49.9

    function formatarPreco(valor){
        return "R$" + (valor*2).toFixed(2)

    }
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>Lista 01 - Dutra</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 1 - </Text>
        <Text>olá </Text>
        <Text>MUNDO</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Exercício 2 - </Text>
        <Text>eu estou aprendendo {linguagem} em {ano}</Text>
      </View>
       
       <View style={styles.card}>
        <Text style={styles.label}>Exercício 3 - </Text>
        <Text>você comprou uma pizza no valor de:{valor} porem voce comprou duas então o valor subiu para:{formatarPreco(valor)}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F5F5F5", paddingTop: 60 },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#212121",
  },
  card: {
    backgroundColor: "#FFF",
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 30,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E0E0E0",
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1565C0",
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E0E0E0",
    paddingBottom: 8,
  },
  texto: { fontSize: 14, color: "#424242", lineHeight: 22 },
});