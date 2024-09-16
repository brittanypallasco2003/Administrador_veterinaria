import { View, Text } from "react-native";
import React, { useState } from "react";
import { Button, TextInput } from "react-native-paper";

const FormularioCita = ({ navigation }) => {
  const [namePacient, setnamePacient] = useState("");
  const [nameProperty, setnameProperty] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState(0);
  const [dischargeDate, setdischargeDate] = useState("");
  const [symptoms, setsymptoms] = useState("");

  const agregarPaciente = () => {
    console.log("Paciente agregado");
  };

  return (
    <View>
      <Text>Nueva Cita</Text>
      <Button icon="close" mode="contained" onPress={() => navigation.goBack()}>
        Cancelar
      </Button>
      <TextInput
        mode="outlined"
        label={"Nombre del Paciente"}
        value={namePacient}
        onChangeText={(text) => setnamePacient(text)}
      />
      <TextInput
        mode="outlined"
        label={"Nombre del Propietario"}
        value={nameProperty}
        onChangeText={(text) => setnameProperty(text)}
      />
      <TextInput
        mode="outlined"
        label={"Correo electrónico del Propietario"}
        value={email}
        onChangeText={(text) => setemail(text)}
      />
      <TextInput
        mode="outlined"
        label={"Número de Teléfono"}
        value={phoneNumber}
        onChangeText={(text) => setphoneNumber(text)}
      />
      <TextInput
        mode="outlined"
        label={"Síntomas"}
        value={symptoms}
        onChangeText={(text) => setsymptoms(text)}
      />
      <Button icon="plus" onPress={agregarPaciente} mode="contained">
        Agregar Paciente
      </Button>
    </View>
  );
};

export default FormularioCita;
