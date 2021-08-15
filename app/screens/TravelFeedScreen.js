import React, { useState } from "react";
import { View, StyleSheet, FlatList, ScrollView } from "react-native";
import AppBanner from "../components/AppBanner";
import { useNavigation } from "@react-navigation/native";

import AppCard from "../components/AppCard";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";
import AppPicker from "../components/AppPicker";
import DataManager from "../config/DataManager";
import AppBackButton from "../components/AppBackButton";

// NAME: TravelFeedScreen: Screen

// PURPOSE: Screen to show listings from every single user
//          Ability to filter by category and/or location

// PARAMS:
//  - navigation: used to navigate between screens

let commonData = DataManager.getInstance();

const categories = commonData.getCategories();
const locations = commonData.getLocations();

function TravelFeedScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  const allFeedListings = commonData.getAllListings();

  let feedListings = allFeedListings;

  if (category != "" && location == "") {
    feedListings = feedListings.filter(
      (listing) => listing.category === category.label
    );
  } else if (category == "" && location != "") {
    feedListings = feedListings.filter(
      (listing) => listing.location === location.label
    );
  } else if (category != "" && location != "") {
    let firstFilter = feedListings.filter(
      (listing) => listing.location === location.label
    );
    feedListings = firstFilter.filter(
      (listing) => listing.category === category.label
    );
  }

  return (
    <AppScreen style={styles.container}>
      <View style={styles.top}>
        <AppBackButton
          onPress={() => navigation.goBack()}
          color="primaryColor"
        />
        <AppText style={styles.heading}>Explore</AppText>
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
            data={feedListings}
            keyExtractor={(listing) => listing.id.toString()}
            refreshing={refreshing}
            onRefresh={() => getAllListings()}
            renderItem={({ item }) =>
              feedListings.length > 0 ? (
                [
                  <AppCard
                    title={item.title}
                    location={item.location}
                    category={item.category}
                    image={item.image}
                    username={item.username}
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
                ]
              ) : (
                <AppText>
                  When you create a listing they will appear here
                </AppText>
              )
            }
          />
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
export default TravelFeedScreen;
