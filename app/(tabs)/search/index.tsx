import { Stack } from "expo-router";
import { OpenSettings } from "../../../OpenSettings";

// Bug: with the header search bar active, the large title keeps the old colour.
export default function Search() {
  return (
    <>
      <Stack.Screen
        options={{ headerSearchBarOptions: { placeholder: "Search", hideNavigationBar: false } }}
      />
      <OpenSettings note="Screen with headerSearchBarOptions in a role=search native tab." />
    </>
  );
}
