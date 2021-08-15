import React from "react";
import renderer from "react-test-renderer";
import AppButton from "./components/AppButton";

test("AppButton renders correctly", () => {
  const tree = renderer.create(<AppButton />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("AppButton will render", () => {
  const json = renderer.create(<AppButton />).toJSON();
  expect(json.children[0].props.style[0].flexDirection).toBe("row");
  expect(json.children[0].props.style[0].borderRadius).toBe(10);
});

test("AppButton contains title", () => {
  const json = renderer
    .create(
      <AppButton
        title="Selected title here"
        onPress={() => console.log("Pressed")}
      />
    )
    .toJSON();
  expect(json.children.includes("Selected title here"));
  expect(json.props.style.opacity).toBe(1);
});
