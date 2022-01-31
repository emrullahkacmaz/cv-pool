import React, { Component } from 'react'
import { View, Text } from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import LoginScreen from './src/loginScreen';
import FormScreen from './src/formScreen';
import AdminScreen from './src/adminScreen';
import DetailScreen from './src/detailScreen';

const Stack =createNativeStackNavigator();

export default class MyComponent extends Component {
  constructor(props) {
    super(props)
  }

  
  render() {
    return (
      <NavigationContainer>
      <Stack.Navigator screenOptions={{
    headerShown: false
  }}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="FormScreen" component={FormScreen} />
        <Stack.Screen name="AdminScreen" component={AdminScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      
        </Stack.Navigator>
      </NavigationContainer>
      
      );
  }
}
