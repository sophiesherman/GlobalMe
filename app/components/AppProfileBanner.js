import React from "react";
import { View, StyleSheet, Image } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";

// NAME: AppProfileBanner: Custom Component

// PURPOSE: a consistent proile banner, one place if there was ever a desire for change

// PARAMS:
//  - image: profile picture
//  - title: name of the user
//  - username: user's username

function AppProfileBanner({ image, title, username }) {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.container}>
        {image && <Image source={image} style={styles.image} />}
        <View style={styles.textContainer}>
          <AppText style={styles.title}> {title} </AppText>
          {username && <AppText style={styles.username}> @{username} </AppText>}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
  },
  profileContainer: {
    paddingBottom: 10,
    backgroundColor: AppColors.primaryColor,
    justifyContent: "center",
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: AppColors.white,
  },
  textContainer: {
    marginTop: 10,
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    color: AppColors.white,
    fontWeight: "700",
    marginVertical: 1,
    fontSize: 18,
  },
  username: {
    color: AppColors.white,
    fontSize: 15,
    marginVertical: 1,
    fontWeight: "500",
  },
});

export default AppProfileBanner;
