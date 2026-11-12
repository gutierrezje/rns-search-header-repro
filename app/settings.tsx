import { router } from "expo-router";
import { Button, Text, View } from "react-native";
import { useTheme } from "../theme";

export default function Settings() {
  const { dark, setDark, colors } = useTheme();
  return (
    <View style={{ flex: 1, padding: 24, gap: 16, backgroundColor: colors.background }}>
      <Text style={{ color: colors.text, fontSize: 28 }}>Settings</Text>
      <Button
        title={dark ? "Switch to light theme" : "Switch to dark theme"}
        onPress={() => setDark(!dark)}
      />
      <Button title="Close" onPress={() => router.back()} />
    </View>
  );
}
