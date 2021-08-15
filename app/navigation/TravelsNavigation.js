import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TravelsScreen from "../screens/TravelsScreen";
import MoreInformationScreen from "../screens/MoreInformationScreen";

// NAME: TravelFeedNavigation: Navigation

// PURPOSE: navigation between the Travel Screen and More information Screen

const AppStack = createStackNavigator();

const TravelsNavigation = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="My Travels"
      component={TravelsScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="More Information"
      component={MoreInformationScreen}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

export default TravelsNavigation;
