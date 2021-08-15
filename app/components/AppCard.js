import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

import AppColors from "../config/AppColors";
import AppText from "../components/AppText";
import { TouchableOpacity } from "react-native-gesture-handler";
import AppCategory from "./AppCategory";
import AppIcon from "./AppIcon";

// NAME: AppCard: Custom Component

// PURPOSE: Cards used to show all the listing lists throughout the app

// PARAMS:
//  - title: heading for the card
//  - location: location of the listing
//  - username: user who created the listing
//  - image: image uploaded to the listing
//  - location: category of the listing
//  - onPress: function called when the card is pressed

const getRandomNumber = () => {
  let min = 10000;
  let max = 99999;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function AppCard({
  title,
  location,
  username,
  image,
  category,
  onPress,
  onSwipeLeft,
}) {
  let key = getRandomNumber();
  return (
    <Swipeable renderRightActions={onSwipeLeft}>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <Image source={image} style={styles.image} />
        <View style={styles.bottomContainer}>
          <View style={styles.textIcon}>
            <View style={styles.category}>
              <AppCategory key={key} category={category} size={40} />
            </View>
            <View style={styles.text}>
              <AppText style={styles.title}>{title}</AppText>
              <View style={styles.location}>
                <AppIcon
                  name="map-marker"
                  size={20}
                  color="primaryColor"
                  backgroundColor="white"
                />
                <AppText style={styles.subtitle}>{location}</AppText>
              </View>
              <View style={styles.location}>
                <AppIcon
                  name="at"
                  size={20}
                  color="primaryColor"
                  backgroundColor="white"
                />
                <AppText style={styles.subtitle}>{username}</AppText>
              </View>
            </View>
          </View>
          <View style={styles.icon}>
            <AppIcon
              name="chevron-right"
              size={60}
              color="otherColor"
              backgroundColor="white"
            />
          </View>
        </View>
      </TouchableOpacity>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.white,
    borderRadius: 20,
    borderBottomWidth: 2,
    borderColor: AppColors.otherColor,
    overflow: "hidden",
    marginBottom: 25,
  },
  bottomContainer: {
    flexDirection: "row",
    
  },
  text: {
    padding: 10,
  },
  icon: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end",
    
  },
  category: {
    justifyContent: "center",
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    height: 200,
    width: "100%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
    color: AppColors.primaryColor,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  textIcon: {
    paddingLeft: 10,
    flexDirection: "row",
  },
  location: {
    flexDirection: "row",
    
  },
  subtitle: {
    color: AppColors.primaryColor,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
});

export default AppCard;
