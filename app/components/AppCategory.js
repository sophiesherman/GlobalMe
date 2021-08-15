import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";
import AppIcon from "./AppIcon";
import AppText from "./AppText";

// NAME: AppCategory: Custom Component

// PURPOSE: Displays the correct icon to represent a particular category

// PARAMS:
//  - category: category to be displayed
//  - size: size of the icon

function AppCategory({ category, size }) {
  if (category == "Restaurant") {
    return [
      <AppIcon
        name="food-fork-drink"
        size={size}
        color="white"
        backgroundColor="restaurant"
      />,
    ];
  } else if (category == "Places to Visit") {
    return [
      <AppIcon
        name="bridge"
        size={size}
        color="white"
        backgroundColor="visit"
      />,
    ];
  } else if (category == "Places to Stay") {
    return [
      <AppIcon name="bed" size={size} color="white" backgroundColor="stay" />,
    ];
  } else if (category == "Things to Do") {
    return [
      <AppIcon
        name="shopping"
        size={size}
        color="white"
        backgroundColor="todo"
      />,
    ];

    // If the category isn't one of the above it has to be a location
  } else {
    return [
      <AppIcon
        name="map-marker"
        size={size}
        color="white"
        backgroundColor="restaurant"
      />,
    ];
  }
}

export default AppCategory;
