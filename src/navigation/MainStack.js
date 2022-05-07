import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";
import colors from "../theme/colors";
import { Platform } from "react-native";
import HomeStack from "./HomeStack";
import ProfileStack from "./ProfileStack";

const Tab = createBottomTabNavigator();

export default function MainStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeStack") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "ProfileStack") {
            iconName = focused ? "user" : "user";
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: "#3B3B3B",
        tabBarStyle: {
          borderTopWidth: 0,
          borderTopColor: "transparent",
          elevation: 6,
          shadowColor: "#3B3B3B",
          shadowOpacity: 0.1,
          shadowOffset: {
            height: 6,
          },
          shadowRadius: 30,
          height: Platform.OS === "android" ? 60 : 80,
          padding: Platform.OS === "android" ? 0 : 15,
        },
      })}
    >
      <Tab.Screen
        name="HomeStack"
        options={{ headerShown: false }}
        component={HomeStack}
      />
      <Tab.Screen
        name="ProfileStack"
        options={{ headerShown: false }}
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
}
