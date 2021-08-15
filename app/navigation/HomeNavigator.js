import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NewListingScreen from "../screens/NewListingScreen";
import AuthNavigator from "./AuthNavigator";
import TabNavigator from "./TabNavigator";
import TravelsNavigation from "./TravelsNavigation";
import TravelFeedNavigation from "./TravelFeedNavigation";

// NAME: HomeNavigator: Navigation

// PURPOSE: navigation between the New Listing Screen, Welcome Screen, Travel Screen and Account Screen

const AppStack = createStackNavigator();

const HomeNavigator = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Home"
      component={TabNavigator}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="My Travels"
      component={TravelsNavigation}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Explore"
      component={TravelFeedNavigation}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="New Listing"
      component={NewListingScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="Welcome"
      component={AuthNavigator}
      options={{ headerShown: false, tabBarVisible: false }}
    />
  </AppStack.Navigator>
);

export default HomeNavigator;
