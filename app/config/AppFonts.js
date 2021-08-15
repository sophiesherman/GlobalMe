import { Platform } from "react-native";

// NAME: AppFonts: Config

// PURPOSE: to keep fonts consistent across the app - if there is ever a desire for font change it will be possible in one place

export default {
  heading: Platform.OS === "android" ? "monospace" : "Avenir-Roman",
  subheading: Platform.OS === "android" ? "monospace" : "Avenir-Roman",
  body: Platform.OS === "android" ? "monospace" : "Avenir Next",
};
