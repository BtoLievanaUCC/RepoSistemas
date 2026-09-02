import React, { useState } from "react";
import { SafeAreaView, View, Text, TextInput, Button, StyleSheet } from "react-native";

import CustomModal from "./componentes/CustomModal";

export default function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [imc, setImc] = useState("");

  const calcularIMC = () => {
    const pesoNumero = parseFloat(peso);
    const alturaNumero = parseFloat(altura);

    if (pesoNumero > 0 && alturaNumero > 0) {
      const resultado = pesoNumero / (alturaNumero * alturaNumero);

      setImc(resultado.toFixed(2));
      setModalVisible(true);
    } else {
      setImc("¡Ingresa un peso y una altura válidos!");
      setModalVisible(true);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.titulo}>Calculadora de IMC</Text>

        <Text style={styles.label}>Peso (Kg)</Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />

        <Text style={styles.label}>Altura (M)</Text>

        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />

        <View style={styles.boton}>
          <Button
            title="Calcular IMC"
            onPress={calcularIMC}
          />
        </View>

        <CustomModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          imc={imc}
        />

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#580ce6",
  },

  content: {
    flex: 1,
    justifyContent: "justify",
    padding: 25,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 100,
  },

  label: {
    fontSize: 18,
    color: "white",
    marginBottom: 8,
  },

  input: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 12,
    fontSize: 18,
    marginBottom: 20,
  },

  boton: {
    marginTop: 200,
  },
});