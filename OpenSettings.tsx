import { router } from "expo-router";
import { Button, ScrollView, Text } from "react-native";
import { useTheme } from "./theme";

export function OpenSettings({ note }: { note: string }) {
  const { colors } = useTheme();
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" contentContainerStyle={{ padding: 20, gap: 12 }}>
      <Text style={{ color: colors.text }}>{note}</Text>
      <Button title="Open settings modal" onPress={() => router.push("/settings")} />
    </ScrollView>
  );
}
