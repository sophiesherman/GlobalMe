import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";
import AppScreen from "../components/AppScreen";
import AppErrorText from "../components/AppErrorText";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import AppBanner from "../components/AppBanner";
import AppPicker from "../components/AppPicker";
import DataManager from "../config/DataManager";
import AppIcon from "../components/AppIcon";

// NAME: NewListingScreen: Screen

// PURPOSE: Screen to add a new listing
//          Validate that all items have been correctly entered

// PARAMS:
//  - navigation: used to navigate between screens

const getRandomNumber = () => {
  let min = 10000;
  let max = 99999;
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let commonData = DataManager.getInstance();

const categories = commonData.getCategories();
const locations = commonData.getLocations();

function NewListingScreen({ navigation }) {
  const [title, setTitle] = useState("");
  const [information, setInformation] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const [titleError, setTitleError] = useState("");
  const [informationError, setInformationError] = useState("");
  const [categoryError, setCategoryError] = useState("");
  const [locationError, setLocationError] = useState("");
  const [imageError, setImageError] = useState("");

  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    //If picker result is cancelled return out of it
    if (pickerResult.cancelled === true) {
      return;
    }
    // Set image path
    setImage({ path: pickerResult.uri });
  };

  const doErrorCheck = () => {
    setTitleError(
      title.length > 9 ? "" : "Title must be at least 10 characters"
    );
    setInformationError(
      information.length > 24
        ? ""
        : "Information must be at least 25 characters"
    );
    setCategoryError(category ? "" : "Please select a category");
    setLocationError(location ? "" : "Please select a location");
    setImageError(image ? "" : "Please select an image");

    return title.length > 9 && information.length > 24 && category
      ? true
      : false && location
      ? true
      : false && image
      ? true
      : false;
  };

  const addListing = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUsername();

    const listingID = getRandomNumber();

    const newListing = {
      title: title,
      information: information,
      category: category.label,
      location: location.label,
      id: listingID,
      username: user,
      image: { uri: image.path },
    };

    commonData.addListing(newListing);
  };

  const refresh = () => {
    setTitle("");
    setCategory("");
    setInformation("");
    setLocation("");
    setImage("");
  };

  return (
    <AppScreen style={styles.container}>
      <AppBanner />
      <AppText style={styles.heading}>NEW LISTING</AppText>
      <View style={styles.inputContainer}>
        <AppTextInput
          icon="pin"
          onChangeText={(inputText) => setTitle(inputText)}
          placeholder="Title"
          value={title}
          clearButtonMode="always"
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
          value={information}
          clearButtonMode="always"
        />
        {informationError.length > 0 ? (
          <AppErrorText key="2" errors={informationError} />
        ) : (
          <Text />
        )}
        <AppPicker
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          data={categories}
          icon={"apps"}
          placeholder="Category"
          value={category}
        />
        {categoryError.length > 0 ? (
          <AppErrorText key="3" errors={categoryError} />
        ) : (
          <Text />
        )}
        <AppPicker
          selectedItem={location}
          onSelectItem={(item) => setLocation(item)}
          data={locations}
          icon="map-marker"
          placeholder="Location"
        />
        {locationError.length > 0 ? (
          <AppErrorText key="4" errors={categoryError} />
        ) : (
          <Text />
        )}

        <TouchableOpacity
          onPress={openImagePickerAsync}
          style={styles.imageContainer}
        >
          <Text>
            <AppIcon
              name="camera"
              size={80}
              color="primaryColor"
              backgroundColor="secondaryColor"
            />
            {image && (
              <Image
                source={{ uri: image.path }}
                style={{ height: 80, width: 80, marginLeft: 20 }}
              />
            )}
          </Text>
        </TouchableOpacity>

        {imageError.length > 0 ? (
          <AppErrorText key="5" errors={imageError} />
        ) : (
          <Text />
        )}

        <View style={styles.buttonContainer}>
          <AppButton
            title="Create"
            height={50}
            color="otherColor"
            onPress={() => {
              if (doErrorCheck()) {
                addListing();
                let commonData = DataManager.getInstance();
                let user = commonData.getUsername();
                const updatedListings = commonData.getListings(user);
                refresh();
                navigation.navigate("My Travels", {
                  screen: "My Travels",
                  params: {
                    screen: "My Travels",
                    params: {
                      newData: updatedListings,
                    },
                  },
                });
              }
            }}
          />
        </View>
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: 100,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: AppColors.white,
  },
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  inputContainer: {
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
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  heading: {
    fontSize: 28,
    textTransform: "uppercase",
    backgroundColor: AppColors.primaryColor,
    color: AppColors.white,
    textAlign: "center",
    fontFamily: AppFonts.heading,
    paddingBottom: 20,
  },
  screenBanner: {
    backgroundColor: AppColors.primaryColor,
    height: 250,
  },
});

export default NewListingScreen;
