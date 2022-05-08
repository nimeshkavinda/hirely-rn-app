import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, ActivityIndicator } from "react-native";
import { Text } from "../../common";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../redux/actions";
import colors from "../../theme/colors";

const Landing = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userData, setUserData] = useState();

  const retrieveData = async () => {
    try {
      const valueString = await AsyncStorage.getItem("user");
      const value = JSON.parse(valueString);
      setLoggedInUser(value);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    retrieveData();
  }, []);

  useEffect(() => {
    console.log("LOGGED USER: ", loggedInUser);
    dispatch(ac.getCandidateByUid(loggedInUser?._W?.uid));
  }, [loggedInUser]);

  const candidateData = useSelector(({ getCandidateByUid }) =>
    getCandidateByUid.data ? getCandidateByUid.data[0] : {}
  );

  const getCandidateByUidFetching = useSelector(
    ({ getCandidateByUid: { fetching } }) => {
      return fetching;
    }
  );

  useEffect(() => {
    if (!getCandidateByUidFetching) {
      setUserData(candidateData?.data);
    }
  }, [candidateData, getCandidateByUidFetching]);

  if (getCandidateByUidFetching) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

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
          <Text style={styles.quickLoginText}>
            Hi {userData.data?.firstName}
          </Text>
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
