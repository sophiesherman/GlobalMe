import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import HomeNavigator from "./HomeNavigator";

// NAME: AuthNavigation: Navigation

// PURPOSE: navigation between the Welcome Screen, Login Screen, Register Screen and Home Screen

const AppStack = createStackNavigator();
const AuthNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Login"
      component={LoginScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Register"
      component={RegisterScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Home"
      component={HomeNavigator}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

export default AuthNavigator;
