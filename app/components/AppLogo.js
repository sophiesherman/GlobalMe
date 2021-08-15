import React from "react";
import { StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";

// NAME: AppLogo: Custom Component

// PURPOSE: Consistency for the logo across the app, one place to come to if it ever changes

// PARAMS:
//  - color: default white, color of the logo
//  - size: default 40, size of the logo

function AppLogo({ color = "white", size = 40 }) {
  return (
    <MaterialCommunityIcons
      color={AppColors[color]}
      name="airplane-landing"
      size={size}
    />
  );
}

const styles = StyleSheet.create({});

export default AppLogo;
