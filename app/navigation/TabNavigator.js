import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppColors from "../config/AppColors";
import AccountScreen from "../screens/AccountScreen";
import NewListingScreen from "../screens/NewListingScreen";
import AppIcon from "../components/AppIcon";
import TravelsNavigation from "./TravelsNavigation";
import TravelFeedNavigation from "./TravelFeedNavigation";

// NAME: TabNavigator: Navigation

// PURPOSE: bottom tab navigation between the New Listing Screen, Travel Screen, Travel Feed Screen and Account Screen

const AppTab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <AppTab.Navigator
      tabBarOptions={{
        activeBackgroundColor: AppColors.primaryColor,
        activeTintColor: AppColors.otherColor,
        inactiveBackgroundColor: AppColors.white,
        inactiveTintColor: AppColors.black,
      }}
    >
      <AppTab.Screen
        name="Home"
        component={AccountScreen}
        options={{
          tabBarIcon: () => (
            <AppIcon
              size={40}
              name="home"
              color="otherColor"
              backgroundColor={AppColors.otherColor}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="My Travels"
        component={TravelsNavigation}
        options={{
          tabBarIcon: () => (
            <AppIcon
              size={40}
              name="heart"
              color="otherColor"
              backgroundColor={AppColors.otherColor}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="New Listing"
        component={NewListingScreen}
        options={{
          tabBarIcon: () => (
            <AppIcon
              size={50}
              name="plus"
              color="otherColor"
              backgroundColor={AppColors.otherColor}
            />
          ),
        }}
      />
      {/* <AppTab.Screen
        name="Explore"
        component={TravelFeedNavigation}
        options={{
          tabBarIcon: () => (
            <AppIcon
              size={40}
              name="map"
              color="otherColor"
              backgroundColor={AppColors.otherColor}
            />
          ),
        }}
      /> */}
    </AppTab.Navigator>
  );
};
export default TabNavigator;
