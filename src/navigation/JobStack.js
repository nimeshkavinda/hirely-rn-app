import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Jobs from "../screens/Jobs/Jobs";

const Stack = createNativeStackNavigator();

export default function JobStack() {
  return (
    <Stack.Navigator initialRouteName="Jobs">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Jobs"
        component={Jobs}
      />
    </Stack.Navigator>
  );
}
