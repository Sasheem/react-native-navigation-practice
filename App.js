import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  createSwitchNavigator,
  createStackNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

/*
  createSwitchNavigator - Only show one screen/stack at one time
  1. Loading Screen
  2. Authentication StackNavigator
    - Auth Loading Screen
    - Sign In Screen
    - Sign Up Screen
  3. AppDrawerNavigator
    - App StackNavigator (to give a common header to tabs)
      - Home Tab
      - Settings Tab
*/

import AuthLoadingScreen from './screens/AuthLoadingScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

const AuthStackNavigator = createStackNavigator({
  Welcome: WelcomeScreen,
  SignIn: SignInScreen,
  SignUp: SignUpScreen
});

const AppTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  Settings: {
    screen: SettingsScreen
  }
});

/*
  The advantage of placing a stack navigator between the
  drawer navigator and the tab navigator is you can use
  a common header at the top

  READ doc on navigationOptions
*/
const AppStackNavigator = createStackNavigator({
  AppTabNavigator:{
    screen:  AppTabNavigator,
    navigationOptions: ({ navigation }) => ({
      title: 'My App',
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{ paddingHorizontal: 10 }}>
            <Ionicons name='md-menu' size={24} />
          </View>
        </TouchableOpacity>
      )
    })
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator
});

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStackNavigator,
  App: AppDrawerNavigator
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
