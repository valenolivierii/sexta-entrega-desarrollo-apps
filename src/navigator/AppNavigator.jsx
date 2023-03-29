import React from 'react'
import { Platform } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { COLORS } from '../constants/colors'

import Home from '../screens/Home'
import ListCharacters from '../screens/ListCharacters'
import CharactersDetails from '../screens/CharacterDetails'

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerTintColor: Platform.OS === 'android' ? COLORS.primary : COLORS.primary,
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Inicio'
        }}
      />
      <Stack.Screen
        name='Categories'
        component={ListCharacters}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name='Details'
        component={CharactersDetails}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  )
}

export default AppNavigator
