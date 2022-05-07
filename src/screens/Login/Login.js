import { View, TouchableOpacity, Alert } from "react-native";
import React, { useEffect } from "react";
import styles from "./styles";
import { Button, Input, BackButton, Text, ValidationText } from "../../common";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../redux/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StatusBar } from "expo-status-bar";

const Login = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signIn = useSelector(({ signIn }) => signIn);

  const fetching = useSelector(({ signIn: { fetching } }) => {
    return fetching;
  });

  const onSubmit = (data) => {
    dispatch(ac.signIn(data.email, data.password));

  };

  const getCandidateByUid = useSelector(
    ({ getCandidateByUid }) => getCandidateByUid
  );

  const getCandidateByUidFetching = useSelector(
    ({ getCandidateByUid: { fetching } }) => {
      return fetching;
    }
  );

  useEffect(
    function () {
      if (signIn.data) {
        dispatch(ac.getCandidateByUid(signIn.data.uid));
      }
      if (signIn.error) {
        message.error(signIn.error.code);
      }
    },
    [signIn, dispatch, navigation]
  );

  useEffect(
    function () {
      if (getCandidateByUid.data) {
        // localStorage.setItem("uid", signIn.data.uid);
        // localStorage.setItem("accessToken", signIn.data.accessToken);
        storeData({
          uid: signIn.data.uid,
          accessToken: signIn.data.accessToken,
        });
      }
      if (getCandidateByUid.error) {
        Alert.alert(
          "Failed to login",
          signIn.error.code || getCandidateByUid.error,
          [
            {
              text: "OK",
              style: "default",
            },
          ],
          {
            cancelable: true,
          }
        );
      }
    },
    [getCandidateByUid, signIn, navigation]
  );

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@user", jsonValue);
    } catch (e) {
      console.log("failed to store in async store, ", e);
    }
  };

  return (
    <View style={styles.wrapper}>
      <View>
        <BackButton />
        <View style={styles.headingWrapper}>
          <Text style={styles.title}>Welcome to Hirely</Text>
          <Text style={styles.subtitle}>Let's sign you in</Text>
        </View>
        <View style={styles.formWrapper}>
          <Controller
            control={control}
            rules={{
              required: true,
              // pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                placeholder="email address"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.email ? true : false}
              />
            )}
            name="email"
          />
          {errors.email?.type === "required" ? (
            <ValidationText>Email is required</ValidationText>
          ) : errors.email?.type === "pattern" ? (
            <ValidationText>Email is not valid</ValidationText>
          ) : null}

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                secureTextEntry={true}
                placeholder="password"
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                isError={errors.password ? true : false}
              />
            )}
            name="password"
          />
          {errors.password && (
            <ValidationText>Password is required</ValidationText>
          )}

          <Button
            title="Forgot password?"
            variant="link"
            style={styles.forgotPWLink}
            onPress={() => navigation.navigate("ForgotPassword")}
          />
          <Button
            title="Login"
            isLoading={fetching || getCandidateByUidFetching}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
        <View style={styles.socialLoginWrapper}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>OR</Text>
          <TouchableOpacity style={styles.socialLoginButton}>
            <AntDesign name="google" size={24} color="#015EFF" />
            <Text style={styles.socialLoginLabel}>Login with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonWrapper}>
        <View style={styles.signupLinkWrapper}>
          <Text style={styles.signupLabel}>Don't have an account?</Text>
          <Button
            title="Register"
            variant="link"
            style={styles.signupLink}
            onPress={() => navigation.navigate("Signup")}
          />
        </View>
      </View>
      <StatusBar style="dark" />
    </View>
  );
};

export default Login;
