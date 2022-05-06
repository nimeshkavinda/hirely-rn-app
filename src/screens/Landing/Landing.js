import React from "react";
import { View, TouchableOpacity } from "react-native";
import { Text } from "../../common";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Landing = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.wrapper}>
      <View style={styles.logoWrapper}>
        <Text style={styles.logo}>Hirely.</Text>
      </View>
      <View style={styles.loginWrapper}>
        <TouchableOpacity style={styles.quickLogin}>
          <MaterialCommunityIcons
            name="face-recognition"
            size={60}
            style={styles.quickLoginImg}
          />
          <Text style={styles.quickLoginText}>Hi, Nimesh</Text>
        </TouchableOpacity>
        <View style={styles.loginLinkWrapper}>
          <Text style={styles.loginLinkText}>Not Nimesh?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}>Login with a different account</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={styles.signUpLink}>Create an account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;
