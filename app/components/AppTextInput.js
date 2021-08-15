import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";

// NAME: AppTextInput: Custom Component

// PURPOSE: custom style for all text inputs across the app

// PARAMS:
//  - icon: name of the material community icon to be used. See https://materialdesignicons.com/ for names
//  - ...otherProps: allow use of TextInput props within the AppTextInput tag

function AppTextInput({ icon, ...otherProps }) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name={icon}
        size={22}
        color={AppColors.darkGrey}
      />
      <TextInput style={styles.textInput} {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.lightGrey,
    flexDirection: "row",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "100%",
    alignItems: "center",
  },
  textInput: {
    fontSize: 20,
    fontFamily: AppFonts.body,
    marginLeft: 10,
    flex: 1,
  },
});

export default AppTextInput;
