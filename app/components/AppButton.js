import React from "react";
import { TouchableOpacity, StyleSheet, View } from "react-native";

import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";
import AppIcon from "./AppIcon";
import AppText from "./AppText";

// NAME: AppButton: Custom Component

// PURPOSE: Consistency for all buttons throughout the App

// PARAMS:
//  - color: default secondaryColor, color of the button
//  - onPress: function called when the button is pressed
//  - title: text written on the button
//  - width: default 180, width of the button
//  - height: default 60, height of the button
//  - icon: name of the material community icon to be used. See https://materialdesignicons.com/ for names

function AppButton({
  color = "secondaryColor",
  onPress,
  title,
  width = 180,
  height = 60,
  icon,
}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          styles.button,
          { backgroundColor: AppColors[color], width: width, height: height },
        ]}
      >
        <AppText style={styles.text} font="subheading">
          {title}
        </AppText>
        {icon && [<AppIcon name="plus" size={50} color="white" />]}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    borderColor: AppColors.white,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  text: {
    fontSize: 22,
    color: AppColors.white,
    fontFamily: AppFonts.body,
  },
});

export default AppButton;
