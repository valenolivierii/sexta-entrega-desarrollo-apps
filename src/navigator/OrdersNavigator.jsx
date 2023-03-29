import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import OrdersScreen from '../screens/OrdersScreen';

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='Orders'>
      <Stack.Screen
        name='Orders'
        component={OrdersScreen}
        options={{
          title: 'Ordenes'
        }}
      />
    </Stack.Navigator>
  )
}

export default CartNavigator
