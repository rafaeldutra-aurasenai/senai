import { useState } from "react";
import { TextInput, TouchableOpacity, View, StyleSheet, Text, Alert } from "react-native";

export default function FormularioExemplo() {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    const [tarefa, setTarefa] = useState("");
    const [prioridade, setPrioridade] = useState("");


    function handleEnviar() {
        console.log("Nome:", nome, "idade:", idade);
        setNome("");
        setIdade("");
    }

    function handleAdicionar() {
        if (tarefa.trim() === "") {
            Alert.alert("atencao", "O nome da tarefa nao pode estar vazio!")
            return;
        }
        console.log("Tarefa:", tarefa, "Prioridade", prioridade);
        setTarefa("");
        setPrioridade("")

    }
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Formularios</Text>
            <View style={styles.exemplo}>
                <View style={styles.subtitulo}>Formulario com envio</View>
                <TextInput
                    style={styles.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Digite seu nome" />

                <TextInput
                    style={styles.input}
                    value={idade}
                    onChangeText={setIdade}
                    placeholder="Digite sua idade" />

                <TouchableOpacity style={styles.botao} onPress={handleEnviar}>
                    <Text style={styles.textBotao}>enviar</Text>
                </TouchableOpacity>
            </View>






            <View style={styles.exemplo}>
                <View style={styles.subtitulo}>Validação</View>
                <TextInput
                    style={styles.input}
                    value={tarefa}
                    onChangeText={setTarefa}
                    placeholder="informe sua tarefa" />

                <TextInput
                    style={styles.input}
                    value={prioridade}
                    onChangeText={setPrioridade}
                    placeholder="(Alta, Media, Baixa)" />

                <TouchableOpacity style={styles.botao} onPress={handleAdicionar}>
                    <Text style={styles.textBotao}>adicionar</Text>
                </TouchableOpacity>
            </View>
        </View>

    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    subtitulo: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#4285f4",
        marginBottom: 8,
    },
    exemplo: {
        width: "80%",
        padding: 16,
        marginBottom: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        marginBottom: 8,
    },
    botao: {
        backgroundColor: "#4285f4",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
        marginTop: 4,
    },
    textoBotao: {
        color: "#fff",
        fontWeight: "bold",
    },
});

