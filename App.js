import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Inicio from "./src/views/Inicio";
import AppNav from "./src/navigation/AppNav";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <AppNav/>
    </>
  );
}


