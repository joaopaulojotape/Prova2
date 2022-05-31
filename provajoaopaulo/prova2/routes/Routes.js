import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import CriarConta from '../screens/CriarConta';
import SobreNos from '../screens/SobreNos';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return (
        <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: true}}>
          <Stack.Screen  name="Home" component={Home} />
          <Stack.Screen name="CriarConta" component={CriarConta} />
          <Stack.Screen name="SobreNos" component={SobreNos} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}