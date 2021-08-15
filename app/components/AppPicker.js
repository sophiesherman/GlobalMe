import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";
import AppText from "./AppText";
import AppFonts from "../config/AppFonts";
import AppScreen from "./AppScreen";
import AppButton from "./AppButton";
import { FlatList } from "react-native-gesture-handler";
import AppPickerItem from "./AppPickerItem";

// NAME: AppPicker: Custom Component

// PURPOSE: custom picker component to have the user select from a list of options

// PARAMS:
//  - data: options available to choose from
//  - icon: icon to be displayed with the picker
//  - placeholder: word to be shown when nothing is selected
//  - selectedItem: the option that is selected
//  - onSelectItem: to pass the new selected item

function AppPicker({ data, icon, placeholder, selectedItem, onSelectItem }) {
  const [modalVisable, setModalVisable] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisable(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={22}
              color={AppColors.white}
            />
          )}
          <AppText style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={22}
            color={AppColors.white}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisable} animationType="slide">
        <AppScreen style={styles.modal}>
          <View style={styles.closeButton}>
            <AppButton
              color="otherColor"
              title="Close"
              height={40}
              width={200}
              onPress={() => setModalVisable(false)}
            />
          </View>
          <View style={styles.selectNoneButton}>
            <AppButton
              color="primaryColor"
              title="Select None"
              height={40}
              width={200}
              onPress={() => {
                onSelectItem("");
                setModalVisable(false);
              }}
            />
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <AppPickerItem
                label={item.label}
                onPress={() => {
                  setModalVisable(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </AppScreen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.secondaryColor,
    flexDirection: "row",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: "100%",
  },
  text: {
    fontSize: 20,
    fontFamily: AppFonts.body,
    color: AppColors.white,
    flex: 1,
  },
  closeButton: {
    paddingVertical: 30,
    paddingBottom: 5,
    justifyContent: "center",
    flexDirection: "row",
  },
  selectNoneButton: {
    paddingVertical: 10,
    justifyContent: "flex-start",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default AppPicker;
