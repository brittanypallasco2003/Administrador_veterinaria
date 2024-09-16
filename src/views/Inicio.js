import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "react-native-paper";

const Inicio = ({ navigation }) => {
  const { navigate } = navigation;
  
  const crearCita = () => {
    navigate("FormularioCita");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={styles.title}>
        Administrador de Citas {""}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>
      <Button mode="contained" icon="plus" onPress={crearCita}>
        Nueva Cita
      </Button>
    </SafeAreaView>
  );
};
export default Inicio;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    color: "#374151",
    fontWeight: "bold",
  },
});
