import React from 'react'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import ICourseScreen from '../screens/Interest/ICourseScreen'
import ICourseRoadMapScreen from '../screens/Interest/ICourseRoadMapScreen'
import BottomStack from './BottomStack'

const Stack = createStackNavigator()

const MainStack = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}>
            <Stack.Screen name='BottomStack' component={BottomStack} />
            <Stack.Screen name='ICourse' component={ICourseScreen} />
            <Stack.Screen name='ICourseRoadMap' component={ICourseRoadMapScreen} />
        </Stack.Navigator>
    )

}

export default MainStack