import DataManager from "./config/DataManager";

let dm = DataManager.getInstance();

test("Categories should contain 'Places to Stay'", () => {
  expect(dm.getCategories().includes("Places to Stay"));
});

test("Get listings for jane should return an array of length 3", () => {
  expect(dm.getListings("jane").length).toBe(3);
});

test("Get all listings should return an array of length 6", () => {
  expect(dm.getAllListings().length).toBe(6);
});

test("Delete user removes the user and their listings from the system", () => {
  dm.deleteUser("jane");
  expect(dm.getUsers().length).toBe(2);
  expect(dm.getListings("jane").length).toBe(0);
});

test("Setting a username works", () => {
  dm.setUsername("Harry");
  expect(dm.getUsername()).toBe("Harry");
});
