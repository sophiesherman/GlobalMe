import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";
import AppFonts from "../config/AppFonts";
import AppCategory from "./AppCategory";

// NAME: AppPickerItem: Custom Component

// PURPOSE: to individualise each picker item's function and look

// PARAMS:
//  - onPress: function to be called when the item is clicked on
//  - label: name of the item / option

const getRandomNumber = () => {
  let min = 10000;
  let max = 99999;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function AppPickerItem({ onPress, label }) {
  let key = getRandomNumber();

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AppCategory key={key} category={label} size={50} />
      <AppText style={styles.text}> {label} </AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingLeft: 100,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: AppColors.lightGrey,
    borderBottomWidth: 1,
    borderColor: AppColors.darkGrey,
  },
  text: {
    paddingTop: 10,
    fontFamily: AppFonts.body,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
    color: AppColors.primaryColor,
  },
});

export default AppPickerItem;
