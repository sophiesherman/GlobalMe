import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

import AppBackButton from "../components/AppBackButton";
import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppFonts from "../config/AppFonts";
import AppLogo from "../components/AppLogo";
import AppScreen from "../components/AppScreen";
import AppErrorText from "../components/AppErrorText";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import DataManager from "../config/DataManager";

// NAME: LoginScreen: Screen

// PURPOSE: Screen for the user to enter their username and password to log into and access their account
//          Validate whether or not the details are correct

// PARAMS:
//  - navigation: used to navigate between screens

const schema = Yup.object().shape({
  username: Yup.string().required().min(3).max(15).label("Username"),
  password: Yup.string().required().min(4).max(8).label("Password"),
});

const validateUser = ({ username, password }) => {
  let commonData = DataManager.getInstance();
  let users = commonData.getUsers();
  return (
    users.filter(
      (user) => user.username === username && user.password == password
    ).length > 0
  );
};

const getUser = ({ username }) => {
  let commonData = DataManager.getInstance();
  let users = commonData.getUsers();
  return users.find((user) => user.username === username);
};

const createUser = ({ username }) => {
  let commonData = DataManager.getInstance();
  let currentUsername = getUser({ username }).username;
  commonData.setUsername(currentUsername);
};

function LoginScreen({ navigation }) {
  return (
    <AppScreen style={styles.container}>
      <View style={styles.screenBanner}>
        <AppBackButton onPress={() => navigation.goBack()} />
        <View style={styles.logoContainer}>
          <AppLogo size={90} />
          <AppText style={styles.heading}>GLOBAL ME</AppText>
        </View>
      </View>
      <KeyboardAwareScrollView>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            if (validateUser(values)) {
              createUser(values);
              resetForm();
              navigation.navigate("Home", {
                screen: "Home",
                params: {
                  screen: "Home",
                  params: {
                    paramUsername: values.username,
                    paramName: getUser(values).name,
                    paramImage: getUser(values).image,
                  },
                },
              });
            } else {
              resetForm();
              alert("Invalid login details ");
            }
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
                  autoCapitalize="none"
                  autoCorrect={false}
                  clearButtonMode="always"
                  icon="at"
                  onBlur={() => setFieldTouched("username")}
                  onChangeText={handleChange("username")}
                  placeholder="Username"
                  value={values.username}
                />
                {touched.username && [
                  <AppErrorText key="1" errors={errors.username} />,
                ]}
                <AppTextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock-outline"
                  onBlur={() => setFieldTouched("password")}
                  onChangeText={handleChange("password")}
                  placeholder="Password"
                  secureTextEntry
                  textContentType="password"
                  value={values.password}
                />
                {touched.password && [
                  <AppErrorText key="2" errors={errors.password} />,
                ]}
                <View style={styles.buttonContainer}>
                  <AppButton title="Login" onPress={handleSubmit} />
                </View>
              </View>
            </>
          )}
        </Formik>
      </KeyboardAwareScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    height: "40%",
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: AppColors.white,
  },
  container: {
    marginTop: 0,
    flex: 1,
    backgroundColor: AppColors.white,
  },
  inputContainer: {
    marginHorizontal: 80,
    marginVertical: 40,
  },
  logoContainer: {
    paddingBottom: 30,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    height: "60%",
  },
  heading: {
    fontFamily: AppFonts.heading,
    fontWeight: "bold",
    fontSize: 40,
    color: AppColors.white,
  },
  screenBanner: {
    backgroundColor: AppColors.primaryColor,
    height: 350,
  },
});

export default LoginScreen;
