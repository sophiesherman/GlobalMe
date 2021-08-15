import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../components/AppButton";
import { useNavigation } from "@react-navigation/native";

import AppLogo from "../components/AppLogo";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";

// NAME: WelcomeScreen: Screen

// PURPOSE: First screen when the app is open to give the user to login or register

// PARAMS:
//  - navigation: used to navigate between screens

function WelcomeScreen({ navigation }) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.logoContainer}>
        <AppLogo size={90} />
        <AppText style={styles.heading}>GLOBAL ME</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="otherColor"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: "20%",
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryColor,
  },
  logoContainer: {
    marginTop: "5%",
    height: "50%",
    alignItems: "flex-end",
    paddingBottom: "30%",
    justifyContent: "center",
    flexDirection: "row",
  },
  heading: {
    fontFamily: AppFonts.heading,
    fontWeight: "bold",
    fontSize: 40,
    color: AppColors.white,
  },
});

export default WelcomeScreen;
