import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";
import AppText from "./AppText";

// NAME: AppListItem: Custom Component

// PURPOSE: Consistency for list items e.g. on the Account Screen

// PARAMS:
//  - title: title of the list item
//  - subtitle: subtitle of the list item
//  - EndComponent: component to be displayed on the right side of the list item - e.g. AppIcon
//  - onPress: function to be called when the list item is clicked on

function AppListItem({ title, subtitle, EndComponent, onPress }) {
  return (
    <TouchableHighlight
      style={styles.container}
      onPress={onPress}
      underlayColor={AppColors.otherColor}
    >
      <View style={styles.viewContainer}>
        <View style={styles.textContainer}>
          <AppText style={styles.title}> {title} </AppText>
          {subtitle && <AppText style={styles.subtitle}> {subtitle} </AppText>}
        </View>
        <View style={styles.endContainer}>{EndComponent}</View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
    marginHorizontal: 20,
    backgroundColor: AppColors.white,
    paddingLeft: 10,
    borderBottomWidth: 3,
    borderColor: AppColors.otherColor,
    marginVertical: 10,
    height: 100,
    borderRadius: 15,
    shadowColor: AppColors.darkGrey,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  viewContainer: {
    flexDirection: "row",
  },
  endContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 50,
    marginLeft: 10,
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    
  },
  title: {
    color: AppColors.primaryColor,
    fontWeight: "200",
    fontFamily: AppFonts.heading,
    marginVertical: 1,
    fontSize: 18,
    textTransform: "uppercase",
  },
  subtitle: {
    fontSize: 15,
    marginVertical: 1,
  },
});

export default AppListItem;
