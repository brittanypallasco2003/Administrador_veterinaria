import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Inicio from '../views/Inicio'

const Stack = createNativeStackNavigator()

const AppNav = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Inicio'>
            <Stack.Screen name='Inicio' component={Inicio}/>
        </Stack.Navigator>

    </NavigationContainer>
  )
}

export default AppNav