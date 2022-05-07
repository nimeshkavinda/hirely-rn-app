import React from "react";
import { SafeAreaView, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Text } from "../../common";
import { Entypo } from "@expo/vector-icons";

const Profile = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.name}>Nimesh Kavinda</Text>
      </View>
      <View style={styles.profileHeaderWrapper}>
        <Image
          style={styles.profilePhoto}
          source={{
            // uri: `data:image/jpg;base64,${""}`,
            uri: "https://github.com/nimeshkavinda.png",
          }}
          resizeMode="cover"
        />
        <Text style={styles.role}>Software Engineer</Text>
        <Text style={styles.about} numberOfLines={2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <View style={styles.contactsRow}>
          <View style={styles.contactItem}>
            <Entypo name="phone" size={16} color="#6d6d6d" />
            <Text style={styles.contact}>071 695 6139</Text>
          </View>
          <View style={styles.contactItem}>
            <Entypo name="email" size={16} color="#6d6d6d" />
            <Text style={styles.contact}>nimeshkavinda13@gmail.com</Text>
          </View>
        </View>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.sectionHeadingWrapper}>
          <Text style={styles.sectionHeading}>Applications</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
