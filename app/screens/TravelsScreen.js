import React, { useState } from "react";
import {
  Alert,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import AppBanner from "../components/AppBanner";
import { useNavigation } from "@react-navigation/native";

import AppCard from "../components/AppCard";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";
import AppPicker from "../components/AppPicker";
import DataManager from "../config/DataManager";
import AppIcon from "../components/AppIcon";
import AppUpdateItem from "../components/AppUpdateItem";
import AppButton from "../components/AppButton";

// NAME: TravelScreen: Screen

// PURPOSE: Screen to show listings that belong to the logged in user
//          Ability to filter by category and/or location

// PARAMS:
//  - navigation: used to navigate between screens

let commonData = DataManager.getInstance();

const categories = commonData.getCategories();
const locations = commonData.getLocations();

const getListings = () => {
  let user = commonData.getUsername();
  return commonData.getListings(user);
};

function TravelsScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [editItem, setEditItem] = useState([]);

  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const allListings = getListings();

  let listings = allListings;

  if (category != "" && location == "") {
    listings = listings.filter(
      (listing) => listing.category === category.label
    );
  } else if (category == "" && location != "") {
    listings = listings.filter(
      (listing) => listing.location === location.label
    );
  } else if (category != "" && location != "") {
    let firstFilter = listings.filter(
      (listing) => listing.location === location.label
    );
    listings = firstFilter.filter(
      (listing) => listing.category === category.label
    );
  }

  const handleDelete = (item) => {
    let commonData = DataManager.getInstance();
    commonData.deleteListing(item);
    let updatedListings = commonData.getListings(item.username);
    navigation.navigate("My Travels", {
      screen: "My Travels",
      params: {
        screen: "My Travels",
        params: {
          newData: updatedListings,
        },
      },
    });
  };

  return (
    <AppScreen style={styles.container}>
      <View style={styles.top}>
        <AppBanner backgroundColor={null} iconColor="primaryColor" />
        <AppText style={styles.heading}>My Travels</AppText>
      </View>

      <View style={styles.filters}>
        <AppPicker
          selectedItem={category}
          onSelectItem={(item) => setCategory(item)}
          data={categories}
          icon={"apps"}
          placeholder="Category"
          value={category}
        />
        <AppPicker
          selectedItem={location}
          onSelectItem={(item) => setLocation(item)}
          data={locations}
          icon="map-marker"
          placeholder="Location"
          value={location}
        />
      </View>

      <ScrollView>
        <View style={styles.listings}>
          <FlatList
            data={listings}
            keyExtractor={(listing) => listing.id.toString()}
            refreshing={refreshing}
            onRefresh={() => getListings()}
            renderItem={({ item }) => [
              <AppCard
                key={item.title}
                title={item.title}
                location={item.location}
                category={item.category}
                image={item.image}
                username={item.username}
                onSwipeLeft={() => (
                  <View style={styles.deleteView}>
                    <TouchableOpacity
                      onPress={() => {
                        setEditItem(item);
                        setModalVisible(true);
                      }}
                    >
                      <AppIcon
                        name="pencil"
                        color="white"
                        backgroundColor="otherColor"
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        Alert.alert(
                          "Are you sure you want to delete this listing?",
                          "This action cannot be undone",
                          [
                            {
                              text: "Cancel",
                              onPress: () => console.log("Cancel Pressed"),
                              style: "cancel",
                            },
                            { text: "Yes", onPress: () => handleDelete(item) },
                          ]
                        )
                      }
                    >
                      <AppIcon
                        name="trash-can"
                        color="white"
                        backgroundColor="otherColor"
                      />
                    </TouchableOpacity>
                  </View>
                )}
                onPress={() => {
                  navigation.navigate("More Information", {
                    screen: "More Information",
                    params: {
                      screen: "Home",
                      params: {
                        item,
                      },
                    },
                  });
                }}
              />,
            ]}
          />
        </View>
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
          <AppUpdateItem data={editItem} modalVisible={modalVisible} />
        </AppScreen>
      </Modal>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
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
  deleteView: {
    width: 70,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
  },
  empty: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  listings: {
    justifyContent: "center",
    margin: 20,
  },
  heading: {
    fontSize: 26,
    textTransform: "uppercase",
    color: AppColors.primaryColor,
    textAlign: "center",
    fontFamily: AppFonts.heading,
  },
  filters: {
    paddingTop: 10,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default TravelsScreen;
