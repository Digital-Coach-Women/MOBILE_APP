import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import ChatScreen from '../screens/Chat/ChatScreen'
import GoalScreen from '../screens/Goal/GoalScreen'
import SettingsScreen from '../screens/Settings/SettingsScreen'
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { colors } from '../utils'
import InterestStack from './InterestStack'
import CourseStack from './CourseStack'

const Tab = createBottomTabNavigator()

const BottomStack = () => {

    return (
        <Tab.Navigator screenOptions={{headerShown: false, tabBarActiveTintColor: colors.pink, tabBarInactiveTintColor: 'gray'}} >
            <Tab.Screen name='InterestStack' component={InterestStack} options={{tabBarLabel: 'Interes', tabBarIcon: ({focused}) => (<Entypo name='graduation-cap' size={24} color={focused ? colors.pink : 'gray' } /> ) }}/>
            <Tab.Screen name='CoursesStack' component={CourseStack} options={{tabBarLabel: 'Cursos', tabBarIcon: ({focused}) => (<Entypo name='open-book' size={24} color={focused ? colors.pink : 'gray' } /> )}}  />
            <Tab.Screen name='Goal' component={GoalScreen} options={{tabBarLabel: 'Objetivos', tabBarIcon: ({focused}) => (<Feather name='target' size={24} color={focused ? colors.pink : 'gray' } /> )}}  />
            <Tab.Screen name='Chat' component={ChatScreen} options={{tabBarLabel: 'Chat', tabBarIcon: ({focused}) => (<Ionicons name='chatbox-ellipses-outline' size={24} color={focused ? colors.pink : 'gray' } /> )}}  />
            <Tab.Screen name='Settings' component={SettingsScreen} options={{tabBarLabel: 'Configuración',tabBarIcon: ({focused}) => (<Ionicons name='settings-outline' size={24} color={focused ? colors.pink : 'gray' } /> )}}  />
        </Tab.Navigator>
    )
}

export default BottomStack