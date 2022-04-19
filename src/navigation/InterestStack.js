import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InterestScreen from '../screens/Interest/InterestScreen'
import ICourseScreen from '../screens/Interest/ICourseScreen'
import ICourseRoadMapScreen from '../screens/Interest/ICourseRoadMapScreen'

const Stack = createNativeStackNavigator()

const InterestStack = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Interest' component={InterestScreen} />
            <Stack.Screen name='ICourse' component={ICourseScreen} />
            <Stack.Screen name='ICourseRoadMap' component={ICourseRoadMapScreen} />
        </Stack.Navigator>
    )

}

export default InterestStack