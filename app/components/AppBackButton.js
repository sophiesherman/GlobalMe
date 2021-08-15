import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";
import AppFonts from "../config/AppFonts";

// NAME: AppBackButton: Custom Component

// PURPOSE: Consistency for the icon and / or text that is used at the top of pages to log out or go back

// PARAMS:
//  - icon: boolean of whether or not the icon will show
//  - text: text written on the button - sometimes is log out instead of back
//  - onPress: function when the button is pressed
//  - color: default white, color of the button and text

function AppBackButton({
  icon = true,
  text = "BACK",
  onPress,
  color = "white",
}) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.backButton}>
        {icon && [
          <MaterialCommunityIcons
            key={22}
            color={AppColors[color]}
            name="keyboard-backspace"
            size={33}
          />,
        ]}
        <AppText style={[styles.backText, { color: AppColors[color] }]}>
          {text}
        </AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backButton: {
    paddingTop: 12,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  backText: {
    fontFamily: AppFonts.body,
    fontSize: 14,
    fontWeight: "500",
  },
});

export default AppBackButton;
