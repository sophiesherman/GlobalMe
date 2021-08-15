import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as ImagePicker from "expo-image-picker";
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
import AppIcon from "../components/AppIcon";

// NAME: RegisterScreen: Screen

// PURPOSE: Screen to add a new user
//          Validate that all inputs have been correctly entered

// PARAMS:
//  - navigation: used to navigate between screens

const schema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  username: Yup.string().required().min(3).max(15).label("Username"),
  password: Yup.string().required().min(4).max(8).label("Password"),
});

function RegisterScreen({ navigation }) {
  const [image, setImage] = useState("");

  let openImagePickerAsync = async (image) => {
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

  //Add user to the instance
  const addUser = (values) => {
    let commonData = DataManager.getInstance();
    // let users = commonData.getUsers();

    const newUser = {
      name: values.name,
      email: values.email,
      username: values.username,
      password: values.password,
      image: { uri: image.path },
    };

    commonData.addUser(newUser);
  };

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
          initialValues={{
            name: "",
            email: "",
            username: "",
            password: "",
            image: null,
          }}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            setImage(null);
            addUser(values);
            Alert.alert("You may now login with your new account");
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
                  placeholder="Name"
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
                  placeholder="Email Address"
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
                  placeholder="Username"
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
                  placeholder="Password"
                  secureTextEntry
                  textContentType="password"
                  value={values.password}
                />
                {touched.password && [
                  <AppErrorText key="4" errors={errors.password} />,
                ]}

                <TouchableOpacity
                  onPress={openImagePickerAsync}
                  style={styles.imageContainer}
                  onBlur={() => setFieldTouched("image")}
                  value={values.image}
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
                {touched.image && [
                  <AppErrorText key="4" errors={errors.image} />,
                ]}

                <View style={styles.buttonContainer}>
                  <AppButton
                    title="Register"
                    color="otherColor"
                    onPress={handleSubmit}
                  />
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
    height: "30%",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: AppColors.white,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
    paddingBottom: 75,
    alignItems: "flex-end",
    justifyContent: "center",
    flexDirection: "row",
    height: 200,
  },
  heading: {
    fontFamily: AppFonts.heading,
    fontWeight: "bold",
    fontSize: 40,
    color: AppColors.white,
  },
  screenBanner: {
    backgroundColor: AppColors.primaryColor,
    height: 250,
  },
});

export default RegisterScreen;
