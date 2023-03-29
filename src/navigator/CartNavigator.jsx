import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Cart'>
      <Stack.Screen
        name='Cart'
        component={CartScreen}
      />
    </Stack.Navigator>
  )
}

export default CartNavigator