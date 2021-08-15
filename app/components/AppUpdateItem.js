import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import AppColors from "../config/AppColors";
import AppText from "./AppText";
import AppFonts from "../config/AppFonts";
import AppButton from "./AppButton";
import AppTextInput from "./AppTextInput";
import AppErrorText from "./AppErrorText";
import DataManager from "../config/DataManager";

// NAME: AppUpdateItem: Custom Component

// PURPOSE: update a particular listing

// PARAMS:
//  - data: the selected listing's data

function AppUpdateItem({ data }) {
  const [title, setTitle] = useState(data.title);
  const [information, setInformation] = useState(data.information);

  const [titleError, setTitleError] = useState("");
  const [informationError, setInformationError] = useState("");

  const doErrorCheck = () => {
    setTitleError(
      title.length > 9 ? "" : "Title must be at least 10 characters"
    );
    setInformationError(
      information.length > 24
        ? ""
        : "Information must be at least 25 characters"
    );

    return title.length > 9 && information.length > 24;
  };

  const updateListing = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUsername();

    const newListing = {
      title: title,
      information: information,
      category: data.category,
      location: data.location,
      id: data.id,
      username: data.username,
      image: data.image,
    };

    commonData.updateListing(data, newListing);
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.heading}>EDIT LISTING</AppText>
      <View style={styles.inputContainer}>
        <AppTextInput
          icon="pin"
          onChangeText={(inputText) => setTitle(inputText)}
          placeholder="Title"
          clearButtonMode="always"
          value={title}
        />
        {titleError.length > 0 ? (
          <AppErrorText key="1" errors={titleError} />
        ) : (
          <Text />
        )}
        <AppTextInput
          icon="information-outline"
          onChangeText={(inputText) => setInformation(inputText)}
          placeholder="Information"
          clearButtonMode="always"
          value={information}
        />
        {informationError.length > 0 ? (
          <AppErrorText key="2" errors={informationError} />
        ) : (
          <Text />
        )}

        <View style={styles.buttonContainer}>
          <AppButton
            title="Update"
            height={50}
            color="otherColor"
            onPress={() => {
              if (doErrorCheck()) {
                updateListing();
                let commonData = DataManager.getInstance();
                let updatedListings = commonData.getListings(data.usermame);
                alert("Listing has been updated");
              }
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "space-around",
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.primaryColor,
  },
  inputContainer: {
    flex: 1,
    marginHorizontal: 50,
    marginVertical: 40,
  },
  logoContainer: {
    paddingBottom: 75,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    height: 200,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
  screenBanner: {
    backgroundColor: AppColors.primaryColor,
    height: 250,
  },
});

export default AppUpdateItem;
