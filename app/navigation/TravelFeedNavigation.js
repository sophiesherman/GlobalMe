import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import MoreInformationScreen from "../screens/MoreInformationScreen";
import TravelFeedScreen from "../screens/TravelFeedScreen";

// NAME: TravelFeedNavigation: Navigation

// PURPOSE: navigation between the Travel Feed Screen and More information Screen

const AppStack = createStackNavigator();

const TravelFeedNavigation = () => (
  <AppStack.Navigator>
    <AppStack.Screen
      name="Explore"
      component={TravelFeedScreen}
      options={{ headerShown: false }}
    />
    <AppStack.Screen
      name="More Information"
      component={MoreInformationScreen}
      options={{ headerShown: false }}
    />
  </AppStack.Navigator>
);

export default TravelFeedNavigation;
