import React, { Children } from "react";
import { Text, StyleSheet } from "react-native";

import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";
import AppText from "./AppText";

// NAME: AppErrorText: Custom Component

// PURPOSE: one place for an error text style across the app, style can be overridden if needed

// PARAMS:
//  - errors: errors passed that have to be displayed

function AppErrorText({ errors }) {
  return <Text style={styles.text}> {errors} </Text>;
}

const styles = StyleSheet.create({
  text: {
    fontFamily: AppFonts.body,
    color: "red",
  },
});

export default AppErrorText;
