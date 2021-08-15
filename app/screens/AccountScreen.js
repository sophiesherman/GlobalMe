import React, { useState } from "react";
import { StyleSheet, View, Modal, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";
import AppScreen from "../components/AppScreen";
import AppListItem from "../components/AppListItem";
import AppIcon from "../components/AppIcon";
import AppProfileBanner from "../components/AppProfileBanner";
import AppBanner from "../components/AppBanner";
import DataManager from "../config/DataManager";
import { ScrollView } from "react-native-gesture-handler";
import AppButton from "../components/AppButton";
import AppUpdateProfile from "../components/AppUpdateProfile";
import AppText from "../components/AppText";

// NAME: AccountScreen: Screen

// PURPOSE: Screen to show the users account details and a list of actions they can take from the page

// PARAMS:
//  - navigation: used to navigate between screens
//  - route: parameters passed through screens

function AccountScreen({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);

  let commonData = DataManager.getInstance();
  let users = commonData.getUsers();
  let username = commonData.getUsername();

  let user = commonData.getUser(username, users);

  const handleDelete = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUsername();
    commonData.deleteUser(user);
    commonData.logOut();
    Alert.alert("Your account has been deleted");
    navigation.navigate("Welcome");
  };

  return (
    <AppScreen style={styles.container}>
      <AppBanner
        logOut={true}
        onPress={() => {
          commonData.logOut();
          navigation.navigate("Welcome");
        }}
      />
      <View style={styles.pageContainer}>
        {route.params && (
          <AppProfileBanner
            image={route.params.paramImage}
            title={route.params.paramName}
            username={route.params.paramUsername}
          />
        )}

        <ScrollView style={styles.linksContainer}>
          <AppListItem
            title="My Travels"
            onPress={() => {
              const listings = commonData.getListings(
                route.params.paramUsername
              );
              navigation.navigate("My Travels", {
                screen: "My Travels",
                params: {
                  screen: "My Travels",
                  params: { listings },
                },
              });
            }}
            EndComponent={
              <>
                <AppIcon
                  name="heart"
                  size={50}
                  color="otherColor"
                  backgroundColor={AppColors.otherColor}
                />
              </>
            }
          />
          <AppListItem
            title="Create New Listing"
            onPress={() => navigation.navigate("New Listing")}
            EndComponent={
              <AppIcon
                name="plus"
                size={60}
                color="otherColor"
                backgroundColor={AppColors.otherColor}
              />
            }
          />
          <AppListItem
            title="Explore"
            onPress={() => {
              const allListings = commonData.getAllListings();
              navigation.navigate("Explore", {
                screen: "Explore",
                params: {
                  screen: "Explore",
                  params: { allListings },
                },
              });
            }}
            EndComponent={
              <>
                <AppIcon
                  name="map"
                  size={60}
                  color="otherColor"
                  backgroundColor={AppColors.otherColor}
                />
              </>
            }
          />
          <AppListItem
            title="Manage Account"
            onPress={() => {
              setModalVisible(true);
            }}
            EndComponent={
              <>
                <AppIcon
                  name="account"
                  size={60}
                  color="otherColor"
                  backgroundColor={AppColors.otherColor}
                />
              </>
            }
          />
        </ScrollView>
        <Modal visible={modalVisible} animationType="slide">
          <AppScreen style={styles.modal}>
            <View style={styles.closeButton}>
              <AppButton
                title="Close"
                onPress={() => setModalVisible(false)}
                height={50}
              />
            </View>
            <AppUpdateProfile data={user} navigation={navigation} />
            <View style={styles.deleteProfile}>
              <AppText style={styles.heading}>DELETE PROFILE</AppText>
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "Are you sure you want to delete your account?",
                    "This action cannot be undone",
                    [
                      {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                      },
                      { text: "Yes", onPress: () => handleDelete() },
                    ]
                  )
                }
              >
                <AppIcon
                  name="trash-can"
                  color="white"
                  backgroundColor="otherColor"
                  size={60}
                />
              </TouchableOpacity>
            </View>
          </AppScreen>
        </Modal>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.lightGrey,
  },
  closeButton: {
    paddingTop: 20,
    height: 100,
    flexDirection: "row",
    backgroundColor: AppColors.primaryColor,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  deleteProfile: {
    backgroundColor: AppColors.primaryColor,
    height: 200,
    alignItems: "center",
  },
  heading: {
    fontSize: 28,
    textTransform: "uppercase",
    backgroundColor: AppColors.primaryColor,
    color: AppColors.white,
    textAlign: "center",
    fontFamily: AppFonts.heading,
    paddingVertical: 20,
  },
});

export default AccountScreen;
