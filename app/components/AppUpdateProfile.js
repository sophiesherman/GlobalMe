import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";
import AppErrorText from "../components/AppErrorText";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import DataManager from "../config/DataManager";

// NAME: AppUpdateProfile: Custom Component

// PURPOSE: update profile values in manage profile

// PARAMS:
//  - data: the current user data
//  - navigation: used to navigate between screens

const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email("Email format invalid").label("Email"),
  username: Yup.string().required().min(3).max(15).label("Username"),
  password: Yup.string().required().min(4).max(8).label("Password"),
});

function AppUpdateProfile({ data, navigation }) {
  //Add user to the instance
  const updateUser = (values) => {
    let commonData = DataManager.getInstance();
    // let users = commonData.getUsers();

    const updatedUser = {
      name: values.name,
      email: values.email,
      username: values.username,
      password: values.password,
      image: values.image,
    };

    commonData.updateUser(updatedUser, initialValues);
  };

  const initialValues = {
    name: data[0].name,
    email: data[0].email,
    username: data[0].username,
    password: data[0].password,
    image: data[0].image,
  };

  return (
    <View style={styles.container}>
      <AppText style={styles.heading}>EDIT PROFILE</AppText>
      <KeyboardAwareScrollView>
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            updateUser(values);
            alert("Your account details have been updated");
            navigation.navigate("Welcome");
          }}
          validationSchema={schema}
        >
          {({
            values,
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            touched,
          }) => (
            <>
              <View style={styles.inputContainer}>
                <AppTextInput
                  clearButtonMode="always"
                  icon="account"
                  input="name"
                  onBlur={() => setFieldTouched("name")}
                  onChangeText={handleChange("name")}
                  placeholder={"Name"}
                  value={values.name}
                />
                {touched.name && [
                  <AppErrorText key="1" errors={errors.name} />,
                ]}
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="always"
                  icon="email-outline"
                  input="email"
                  onBlur={() => setFieldTouched("email")}
                  onChangeText={handleChange("email")}
                  placeholder={"Email"}
                  value={values.email}
                />
                {touched.email && [
                  <AppErrorText key="2" errors={errors.email} />,
                ]}
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="always"
                  icon="at"
                  onBlur={() => setFieldTouched("username")}
                  onChangeText={handleChange("username")}
                  placeholder={"Username"}
                  value={values.username}
                />
                {touched.username && [
                  <AppErrorText key="3" errors={errors.username} />,
                ]}
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="always"
                  icon="lock-outline"
                  onBlur={() => setFieldTouched("password")}
                  onChangeText={handleChange("password")}
                  placeholder="New password"
                  secureTextEntry
                  textContentType="password"
                  value={values.password}
                />
                {touched.password && [
                  <AppErrorText key="4" errors={errors.password} />,
                ]}

                <View style={styles.buttonContainer}>
                  <AppButton
                    title="Update"
                    color="otherColor"
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
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

export default AppUpdateProfile;
