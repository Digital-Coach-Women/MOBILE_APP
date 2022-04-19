import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomStack from './BottomStack'

const Stack = createNativeStackNavigator()

const MainStack = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='BottomStack' component={BottomStack} />
        </Stack.Navigator>
    )

}

export default MainStack