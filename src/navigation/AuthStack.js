import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from '../screens/Auth/LoginScreen'
import ForgetScreen from '../screens/Auth/ForgetScreen'
import ChangeScreen from '../screens/Auth/ChangeScreen'
import RegisterScreen from '../screens/Auth/RegisterScreen'
import WelcomeScreen from '../screens/Auth/WelcomeScreen'

const Stack = createNativeStackNavigator()

const AuthStack = () => {

    return (
        <Stack.Navigator 
            screenOptions={{headerShown:false, animation: 'slide_from_right'}} 
        >
            <Stack.Screen name='Welcome' component={WelcomeScreen} /> 
            <Stack.Screen name='Login' component={LoginScreen} /> 
            <Stack.Screen name='Forget' component={ForgetScreen} /> 
            <Stack.Screen name='Change' component={ChangeScreen} /> 
            <Stack.Screen name='Register' component={RegisterScreen} /> 
        </Stack.Navigator>
    )

}

export default AuthStack