import React from 'react'
import { StyleSheet } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TabIconCustom } from '../components';
import { COLORS } from '../constants/colors';

const BottomTabs = createBottomTabNavigator();

import AppNavigator from './AppNavigator';
import CartNavigator from './CartNavigator';
import OrdersNavigator from './OrdersNavigator'

const TabsNavigator = () => {
  return (
    <BottomTabs.Navigator
      initialRouteName='Store-bar'
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <BottomTabs.Screen
        name='Store-bar'
        component={AppNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIconCustom
              iconName='home-outline'
              title='Tienda'
              tintColor={focused ? COLORS.primary : 'black'}
              size={24}
            />
          )
        }}
      />
      <BottomTabs.Screen
        name='Cart-bar'
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIconCustom
              iconName='cart-outline'
              title='Carrito'
              tintColor={focused ? COLORS.primary : 'black'}
              size={24}
            />
          )
        }}
      />
      <BottomTabs.Screen
        name='Orders-bar'
        component={OrdersNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIconCustom
              iconName='list-outline'
              title='Ordenes'
              tintColor={focused ? COLORS.primary : 'black'}
              size={24}
            />
          )
        }}
      />
    </BottomTabs.Navigator>
  )
}

export default TabsNavigator

const styles = StyleSheet.create({
  tabBar: {
    elevation: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
  },
})