import React from "react";
import { View, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";
import AppBackButton from "./AppBackButton";
import AppLogo from "./AppLogo";

// NAME: AppBanner: Custom Component

// PURPOSE: Consistency for the banner at the top of the screens

// PARAMS:
//  - logOut: boolean, whether or not there is the option to log out available in the banner
//  - onPress: if there is a log out button the on press is the function to handle log out
//  - backgroundColor: default primary color - incase the bacnkground color is to be null or something else
//  - iconColor: default white -colour of the logo in the banner

function AppBanner({
  logOut = false,
  onPress,
  backgroundColor = AppColors.primaryColor,
  iconColor = "white",
}) {
  return (
    <View style={[styles.screenBanner, { backgroundColor: backgroundColor }]}>
      <View style={styles.logoContainer}>
        <AppLogo size={40} color={iconColor} />
      </View>
      {logOut && [
        <AppBackButton key="7" icon={false} text="LOG OUT" onPress={onPress} />,
      ]}
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    paddingBottom: 15,
    flex: 1,
    alignItems: "flex-start",
    flexDirection: "column",
  },
  screenBanner: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});

export default AppBanner;
