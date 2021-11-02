import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

export default function App() {
  return <AppContainer />;
}

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {headerShown: false}
    },
    Details: {
      screen: DetailsScreen
    }
  },
  {initialRouteName: "Home"}
)

const AppContainer = createAppContainer(AppStackNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});