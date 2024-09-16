import { View, Text, Alert } from "react-native";
import React, { useContext, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { CitasContext } from "../context/CitasContext";
import CuadroAlerta from "../components/CuadroAlerta";

const FormularioCita = ({ navigation }) => {
  const [namePacient, setnamePacient] = useState("");
  const [nameProperty, setnameProperty] = useState("");
  const [email, setemail] = useState("");
  const [phoneNumber, setphoneNumber] = useState(0);
  const [dischargeDate, setdischargeDate] = useState("");
  const [symptoms, setsymptoms] = useState("");
  const [errorInput1, seterrorInput1] = useState(false);
  const [errorInput2, seterrorInput2] = useState(false);
  const [errorInput3, seterrorInput3] = useState(false);
  const [errorInput4, seterrorInput4] = useState(false);
  const [errorInput5, seterrorInput5] = useState(false);

  const { listadoPacientes, setlistadoPacientes, setmostrarAlerta } =
    useContext(CitasContext);

  const agregarPaciente = () => {
    if (
      [namePacient, nameProperty, phoneNumber, email, symptoms].includes("")
    ) {
      setmostrarAlerta(true);
    } else {
      const newPacient = {
        id: Date.now(),
        namePacient,
        nameProperty,
        email,
        phoneNumber,
        symptoms,
      };
      const nuevosPacientes = [...listadoPacientes, newPacient];
      setlistadoPacientes(nuevosPacientes);

      console.log(listadoPacientes);
      navigation.navigate('Inicio')
      
    }
  };

  const editarPaciente = () => {
    console.log("Editando paciente");
  };

  return (
    <View>
      <Text>Nueva Cita</Text>
      <Button icon="close" mode="contained" onPress={() => navigation.goBack()}>
        Cancelar
      </Button>
      <CuadroAlerta />
      <TextInput
        mode="outlined"
        label={"Nombre del Paciente"}
        value={namePacient}
        onChangeText={(text) => setnamePacient(text)}
        onBlur={() =>
          namePacient.length > 0 ? seterrorInput1(false) : seterrorInput1(true)
        }
        error={errorInput1}
      />
      <TextInput
        mode="outlined"
        label={"Nombre del Propietario"}
        value={nameProperty}
        onChangeText={(text) => setnameProperty(text)}
        onBlur={() =>
          nameProperty.length > 0 ? seterrorInput2(false) : seterrorInput2(true)
        }
        error={errorInput2}
      />
      <TextInput
        mode="outlined"
        inputMode="email"
        label={"Correo electrónico del Propietario"}
        value={email}
        onChangeText={(text) => setemail(text)}
        onBlur={() =>
          email.length > 0 ? seterrorInput3(false) : seterrorInput3(true)
        }
        error={errorInput3}
      />
      <TextInput
        inputMode="tel"
        mode="outlined"
        label={"Número de Teléfono"}
        value={phoneNumber}
        onChangeText={(text) => setphoneNumber(text)}
        onBlur={() =>
          phoneNumber.length > 0 ? seterrorInput4(false) : seterrorInput4(true)
        }
        error={errorInput4}
      />
      <TextInput
        multiline={true}
        mode="outlined"
        label={"Síntomas"}
        value={symptoms}
        onChangeText={(text) => setsymptoms(text)}
        onBlur={() =>
          symptoms.length > 0 ? seterrorInput5(false) : seterrorInput5(true)
        }
        error={errorInput5}
      />
      <Button icon="plus" onPress={agregarPaciente} mode="contained">
        Agregar Paciente
      </Button>
      <Button icon="pencil" onPress={editarPaciente} mode="contained">
        Editar Paciente
      </Button>
    </View>
  );
};

export default FormularioCita;
