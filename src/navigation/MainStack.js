import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import ICourseScreen from '../screens/Interest/ICourseScreen'
import ICourseRoadMapScreen from '../screens/Interest/ICourseRoadMapScreen'
import BottomStack from './BottomStack'
import CourseDetailScreen from '../screens/Courses/CourseDetailScreen'
import CParticipantsScreen from '../screens/Courses/CParticipantsScreen'
import CourseMicroScreen from '../screens/Courses/CourseMicroScreen'
import CupScreen from '../screens/Goal/CupScreen'
import CurrentGoalScreen from '../screens/Goal/CurrentGoalScreen'
import EvolutionScreen from '../screens/Goal/EvolutionScreen'
import SuccessCasesScreen from '../screens/Goal/SuccessCasesScreen'

const Stack = createStackNavigator()

const MainStack = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
            <Stack.Screen name='BottomStack' component={BottomStack} />
            <Stack.Screen name='ICourse' component={ICourseScreen} />
            <Stack.Screen name='ICourseRoadMap' component={ICourseRoadMapScreen} />
            <Stack.Screen name='CourseDetail' component={CourseDetailScreen} />
            <Stack.Screen name='CParticipants' component={CParticipantsScreen} />
            <Stack.Screen name='CourseMicro' component={CourseMicroScreen} />
            <Stack.Screen name='Cup' component={CupScreen} />
            <Stack.Screen name='CurrentGoal' component={CurrentGoalScreen} />
            <Stack.Screen name='Evolution' component={EvolutionScreen} />
            <Stack.Screen name='SuccessCases' component={SuccessCasesScreen} />
        </Stack.Navigator>
    )

}

export default MainStack