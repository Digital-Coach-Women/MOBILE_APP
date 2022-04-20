import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CoursesScreen from '../screens/Courses/CoursesScreen'
import CourseDetailScreen from '../screens/Courses/CourseDetailScreen'
import CParticipantsScreen from '../screens/Courses/CParticipantsScreen'

const Stack = createNativeStackNavigator()

const CourseStack = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Course' component={CoursesScreen} />
            <Stack.Screen name='CourseDetail' component={CourseDetailScreen} />
            <Stack.Screen name='CParticipants' component={CParticipantsScreen} />
        </Stack.Navigator>
    )

}

export default CourseStack