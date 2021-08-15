import React from "react";
import { Text, StyleSheet } from "react-native";

import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";

// NAME: AppText: Custom Component

// PURPOSE: one place for a basic text style across the app, style can be overridden if needed

// PARAMS:
//  - children: ensure all things called within an AppText tag will be passed through
//  - style: any styles for the text will be passed through

function AppText({ children, style }) {
  return <Text style={[styles.text, style]}> {children} </Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: AppFonts.body,
    color: AppColors.dark,
  },
});

export default AppText;
