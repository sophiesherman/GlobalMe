import React from "react";
import { View, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";

// NAME: AppIcon: Custom Component

// PURPOSE: Consistency for icons across the app

// PARAMS:
//  - backgroundColor: default white, background color behind the icon
//  - color: default black, color of the icon
//  - name: name of the material community icon to be used see https://materialdesignicons.com/ for names
//  - size: size of the icon (please note this total size including the background)

function AppIcon({
  backgroundColor = "white",
  color = "black",
  name,
  size = 40,
}) {
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: AppColors[backgroundColor],
        borderRadius: size / 2,
        justifyContent: "center",
        height: size,
        width: size,
      }}
    >
      <MaterialCommunityIcons
        color={AppColors[color]}
        name={name}
        size={size * 0.7}
      />
    </View>
  );
}

const styles = StyleSheet.create({});

export default AppIcon;
