import { StatusBar } from "expo-status-bar";

import AppNav from "./src/navigation/AppNav";
import {
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme as DarkTheme,
  PaperProvider,
} from "react-native-paper";
import CitasProvider from "./src/context/CitasContext";

const ligthTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "rgb(105, 70, 195)",
    onPrimary: "rgb(255, 255, 255)",
    primaryContainer: "rgb(232, 221, 255)",
    onPrimaryContainer: "rgb(34, 0, 93)",
    secondary: "rgb(143, 78, 0)",
    onSecondary: "rgb(255, 255, 255)",
    secondaryContainer: "rgb(255, 220, 194)",
    onSecondaryContainer: "rgb(46, 21, 0)",
    tertiary: "rgb(0, 110, 30)",
    onTertiary: "rgb(255, 255, 255)",
    tertiaryContainer: "rgb(112, 255, 121)",
    onTertiaryContainer: "rgb(0, 34, 4)",
    error: "rgb(186, 26, 26)",
    onError: "rgb(255, 255, 255)",
    errorContainer: "rgb(255, 218, 214)",
    onErrorContainer: "rgb(65, 0, 2)",
    background: "rgb(255, 251, 255)",
    onBackground: "rgb(28, 27, 30)",
    surface: "rgb(255, 251, 255)",
    onSurface: "rgb(28, 27, 30)",
    surfaceVariant: "rgb(231, 224, 236)",
    onSurfaceVariant: "rgb(73, 69, 78)",
    outline: "rgb(122, 117, 127)",
    outlineVariant: "rgb(202, 196, 207)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(49, 48, 51)",
    inverseOnSurface: "rgb(244, 239, 244)",
    inversePrimary: "rgb(207, 189, 255)",
    elevation: {
      level0: "transparent",
      level1: "rgb(248, 242, 252)",
      level2: "rgb(243, 237, 250)",
      level3: "rgb(239, 231, 248)",
      level4: "rgb(237, 229, 248)",
      level5: "rgb(234, 226, 247)",
    },
    surfaceDisabled: "rgba(28, 27, 30, 0.12)",
    onSurfaceDisabled: "rgba(28, 27, 30, 0.38)",
    backdrop: "rgba(50, 47, 56, 0.4)",
  },
};

const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: "rgb(207, 189, 255)",
    onPrimary: "rgb(57, 0, 147)",
    primaryContainer: "rgb(81, 42, 170)",
    onPrimaryContainer: "rgb(232, 221, 255)",
    secondary: "rgb(255, 183, 122)",
    onSecondary: "rgb(76, 39, 0)",
    secondaryContainer: "rgb(109, 58, 0)",
    onSecondaryContainer: "rgb(255, 220, 194)",
    tertiary: "rgb(78, 226, 94)",
    onTertiary: "rgb(0, 57, 11)",
    tertiaryContainer: "rgb(0, 83, 20)",
    onTertiaryContainer: "rgb(112, 255, 121)",
    error: "rgb(255, 180, 171)",
    onError: "rgb(105, 0, 5)",
    errorContainer: "rgb(147, 0, 10)",
    onErrorContainer: "rgb(255, 180, 171)",
    background: "rgb(28, 27, 30)",
    onBackground: "rgb(230, 225, 230)",
    surface: "rgb(28, 27, 30)",
    onSurface: "rgb(230, 225, 230)",
    surfaceVariant: "rgb(73, 69, 78)",
    onSurfaceVariant: "rgb(202, 196, 207)",
    outline: "rgb(148, 143, 153)",
    outlineVariant: "rgb(73, 69, 78)",
    shadow: "rgb(0, 0, 0)",
    scrim: "rgb(0, 0, 0)",
    inverseSurface: "rgb(230, 225, 230)",
    inverseOnSurface: "rgb(49, 48, 51)",
    inversePrimary: "rgb(105, 70, 195)",
    elevation: {
      level0: "transparent",
      level1: "rgb(37, 35, 41)",
      level2: "rgb(42, 40, 48)",
      level3: "rgb(48, 45, 55)",
      level4: "rgb(50, 46, 57)",
      level5: "rgb(53, 50, 62)",
    },
    surfaceDisabled: "rgba(230, 225, 230, 0.12)",
    onSurfaceDisabled: "rgba(230, 225, 230, 0.38)",
    backdrop: "rgba(50, 47, 56, 0.4)",
  },
};

export default function App() {
  return (
    <>
      <CitasProvider>
        <PaperProvider theme={ligthTheme}>
          <StatusBar style="auto" />
          <AppNav />
        </PaperProvider>
      </CitasProvider>
    </>
  );
}
