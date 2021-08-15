import React from "react";
import { Text } from "react-native";
import renderer from "react-test-renderer";
import AppText from "./components/AppText";

test("AppText renders correctly", () => {
  const tree = renderer.create(<AppText />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("AppText is Text component", () => {
  const json = renderer.create(<AppText />).toJSON();
  expect(json.type).toBe("Text");
});

test("AppText contains child text", () => {
  const json = renderer
    .create(<AppText>Some test a user might add</AppText>)
    .toJSON();
  expect(json.children.includes("Some test a user might add"));
});

test("AppText should contain entered style", () => {
  const json = renderer
    .create(<AppText style={{ fontSize: 90 }}>Text</AppText>)
    .toJSON();
  expect(json.props.style[1].fontSize).toBe(90);
});

test("AppText should be the right font family", () => {
  const json = renderer
    .create(<AppText>Some test a user might add</AppText>)
    .toJSON();
  expect(json.props.style[0].fontFamily).toBe("Avenir Next");
});
