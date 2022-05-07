import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../screens/Profile/Profile";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
    </Stack.Navigator>
  );
}
