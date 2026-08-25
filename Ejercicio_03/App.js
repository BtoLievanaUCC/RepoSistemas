import React, { useState } from "react";
import { View, StyleSheet, Button, SafeAreaView, Text, FlatList, SectionList, } from "react-native";

import CustomModal from "./componentes/CustomModal";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const objetoContenido = {
    valor: "Juan Perez",
  };

  const datosFlatList = [
    { key: "Devin" },
    { key: "Dan" },
    { key: "Dominic" },
    { key: "Jackson" },
    { key: "James" },
    { key: "Joel" },
    { key: "John" },
    { key: "Jillian" },
    { key: "Jimmy" },
    { key: "Julie" },
  ];

  const datosSectionList = [
    {
      title: "D",
      data: ["Devin", "Dan", "Dominic"],
    },
    {
      title: "J",
      data: [
        "Jackson",
        "James",
        "Jillian",
        "Jimmy",
        "Joel",
        "John",
        "Julie",
      ],
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Button
          title="Ver mensaje"
          onPress={() => setModalVisible(true)}
        />

        <CustomModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          contenido={objetoContenido}
        />

        <Text style={styles.titulo}>FlatList</Text>

        <FlatList
          style={styles.lista}
          data={datosFlatList}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              {item.key}
            </Text>
          )}
          keyExtractor={(item) => item.key}
        />

        <Text style={styles.titulo}>SectionList</Text>

        <SectionList
          style={styles.lista}
          sections={datosSectionList}
          renderItem={({ item }) => (
            <Text style={styles.item}>
              {item}
            </Text>
          )}
          renderSectionHeader={({ section }) => (
            <Text style={styles.sectionHeader}>
              {section.title}
            </Text>
          )}
          keyExtractor={(item, index) =>
            `basicListEntry-${item}-${index}`
          }
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
    padding: 20,
  },

  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "white",
    textAlign: "center",
  },

  lista: {
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  sectionHeader: {
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 5,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: "#ddd",
  },
});