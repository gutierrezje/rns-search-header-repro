import { Stack } from "expo-router";
import { useTheme } from "./theme";

// Each tab: a native stack with a large title whose colour follows the theme.
export function TabStack({ title }: { title: string }) {
  const { colors } = useTheme();
  return (
    <Stack
      screenOptions={{
        headerLargeTitleEnabled: true,
        headerTransparent: true,
        headerLargeTitleStyle: { color: colors.text },
        headerTitleStyle: { color: colors.text },
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="index" options={{ title }} />
    </Stack>
  );
}
