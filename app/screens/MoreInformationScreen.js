import React from "react";
import { View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppBackButton from "../components/AppBackButton";
import AppCategory from "../components/AppCategory";
import AppIcon from "../components/AppIcon";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppColors from "../config/AppColors";

// NAME: MoreInformationScreen: Screen

// PURPOSE: Screen to display more detailed information about a particular listing

// PARAMS:
//  - navigation: used to navigate between screens
//  - route: parameters passed through screens

function MoreInformationScreen({ navigation, route }) {
  const data = route.params.params.params.item;
  return (
    <AppScreen style={styles.container}>
      <View style={styles.header}>
        <ImageBackground source={data.image} style={styles.background}>
          <AppBackButton onPress={() => navigation.goBack()} />
        </ImageBackground>
      </View>
      <View style={styles.textHeader}>
        <View style={styles.textHeaderLeft}>
          <AppText style={styles.title}>{data.title}</AppText>
          <View style={styles.location}>
            <AppIcon
              name="map-marker"
              size={24}
              color="primaryColor"
              backgroundColor="white"
            />
            <AppText style={styles.subtitle}>{data.location}</AppText>
          </View>
        </View>
        <View style={styles.category}>
          <AppCategory category={data.category} size={40} />
        </View>
      </View>
      <ScrollView>
        <View style={styles.information}>
          <AppText style={styles.posted}>@{data.username}:</AppText>
          <AppText style={styles.informationText}>"{data.information}"</AppText>
        </View>
      </ScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.lightGrey,
  },
  listings: {
    justifyContent: "center",
    margin: 20,
  },
  header: {
    height: "40%",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,

    color: AppColors.primaryColor,
  },
  textHeader: {
    backgroundColor: AppColors.white,
    flexDirection: "row",
    alignItems: "center",
    height: "13%",
    padding: 20,
    borderBottomWidth: 2,
    borderColor: AppColors.primaryColor,
  },
  textHeaderLeft: {
    flexDirection: "column",
  },
  subtitle: {
    color: AppColors.primaryColor,
  },
  background: {
    flex: 1,
  },
  category: {
    flex: 1,
    alignItems: "flex-end",
  },
  location: {
    flexDirection: "row",
  },
  posted: {
    fontStyle: "italic",
    fontWeight: "600",
    color: AppColors.secondaryColor,
  },
  information: {
    backgroundColor: AppColors.white,
    borderRadius: 20,
    padding: 20,
    margin: 20,
    borderBottomWidth: 3,
    borderColor: AppColors.otherColor,
  },
  informationText: {
    paddingTop: 20,
    fontSize: 16,
  },
  subtitle: {
    fontSize: 16,
  },
});
export default MoreInformationScreen;
