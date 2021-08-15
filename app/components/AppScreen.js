import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";

// NAME: AppScreen: Custom Component

// PURPOSE: Ensure the screen is within a safe area where it does not enter into the status bar area

// PARAMS:
//  - children: ensure all things called within an AppScreen tag will be passed through
//  - style: any styles for the screen passed through

function AppScreen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={styles.paddingView}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  paddingView: {
    flex: 1,
  },
});

export default AppScreen;
