import { View, Text } from "react-native";
import React, { useContext } from "react";
import { CitasContext } from "../context/CitasContext";
import { Button, Dialog, Modal, Portal } from "react-native-paper";

const CuadroAlerta = () => {
  const { mostrarAlerta, setmostrarAlerta } = useContext(CitasContext);
  return (
    <Portal>
      <Dialog visible={mostrarAlerta} onDismiss={() => setmostrarAlerta(false)}>
        <Dialog.Title >Error</Dialog.Title>
        <Dialog.Content>
          <Text>Debes completar todos los campos</Text>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={() => setmostrarAlerta(false)}>Entendido</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default CuadroAlerta;
