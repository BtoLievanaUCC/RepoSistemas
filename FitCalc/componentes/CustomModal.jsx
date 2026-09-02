import React from "react";
import { StyleSheet, Text, View, Button, Modal, } from "react-native";

const CustomModal = ({ visible, onClose, imc }) => {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>

          <Text style={styles.titulo}>
            Resultado:
          </Text>

          <Text style={styles.modalText}>
            Tu IMC es:
          </Text>

          <Text style={styles.imc}>
            {imc}
          </Text>

          <Button
            title="Cerrar"
            onPress={onClose}
          />

        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  modalText: {
    fontSize: 18,
    marginBottom: 10,
  },

  imc: {
    fontSize: 20,
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
});

export default CustomModal;