import React, { FC } from 'react'
import { Text, View } from 'react-native';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import HomeScreen from '../screens/HomeScreen'
import DeliveryIcon from '../components/Icons/DeliveryIcon';
import OrdersIcon from '../components/Icons/OrdersIcon';
import SettingsIcon from '../components/Icons/SettingsIcon';

const appTheme = DefaultTheme
appTheme.colors.background = "white"

function ComingSoon() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Coming Soon !</Text>
    </View>
  );
}

const MainNavigator: FC = () => {
  const Tab = createBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          header: () => null,
          tabBarActiveTintColor: '#d9201a',
          tabBarInactiveTintColor: '#a5a5a5',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarIcon: ({ color }) => (
            <DeliveryIcon color={color} />
          ),
        }} />
        <Tab.Screen name="My Orders" component={ComingSoon} options={{
          tabBarIcon: ({ color }) => (
            <OrdersIcon color={color} />
          ),
        }} />
        <Tab.Screen name="Me" component={ComingSoon} options={{
          tabBarIcon: ({ color }) => (
            <SettingsIcon color={color} />
          ),
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
