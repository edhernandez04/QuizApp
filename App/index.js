import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createAppContainer } from '@react-navigation/native'

import QuizIndex from './screens/QuizIndex'
import Quiz from './screens/Quiz'

const Stack = createStackNavigator()

const MainStack = () => (
  <NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Quizzes" component={QuizIndex} />
    <Stack.Screen name="Quiz" component={Quiz} />
  </Stack.Navigator>
</NavigationContainer>
)

export default MainStack