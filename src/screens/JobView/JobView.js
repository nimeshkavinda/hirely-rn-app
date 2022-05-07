import React from "react";
import styles from "./styles";
import { SafeAreaView, View, Image } from "react-native";
import { Text, BackButton, Button } from "../../common";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

const JobView = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.headerNav}>
        <BackButton />
        <Feather
          name="bookmark"
          size={24}
          color="#a0a0a0"
          style={{ marginRight: 20 }}
        />
      </View>
      <View style={styles.companyHeader}>
        <Image
          style={styles.companyLogo}
          source={{
            // uri: `data:image/jpg;base64,${""}`,
            uri: "https://media-exp1.licdn.com/dms/image/C4D0BAQGNCOdrcOEQzg/company-logo_200_200/0/1519892773304?e=2147483647&v=beta&t=kq3O9XyGoBdQmlXUHJccc5svIA5vVKpnRlAuxBojCvE",
          }}
          resizeMode="cover"
        />
        <Text style={styles.title}>Software Engineer</Text>
        <View style={styles.tagsRow}>
          <Text style={styles.tagText}>SmashTaps</Text>
          <Entypo name="dot-single" size={24} color="#a0a0a0" />
          <Text style={styles.tagText}>Colombo 3</Text>
          <Entypo name="dot-single" size={24} color="#a0a0a0" />
          <Text style={styles.tagText}>13 applicants</Text>
        </View>
      </View>
      <View style={styles.typeRow}>
        <View style={styles.type}>
          <View style={[styles.typeIcon, { backgroundColor: "#FAEFD1" }]}>
            <FontAwesome name="dollar" size={24} color="black" />
          </View>
          <Text style={styles.typeHeading}>Salary</Text>
          <Text style={styles.value}>150,000 LKR</Text>
        </View>
        <View style={styles.type}>
          <View style={[styles.typeIcon, { backgroundColor: "#E5D1FA" }]}>
            <MaterialIcons name="timer" size={24} color="black" />
          </View>
          <Text style={styles.typeHeading}>Job type</Text>
          <Text style={styles.value}>Full time</Text>
        </View>
        <View style={styles.type}>
          <View style={[styles.typeIcon, { backgroundColor: "#D1FAD7" }]}>
            <FontAwesome5 name="building" size={24} color="black" />
          </View>
          <Text style={styles.typeHeading}>Industry</Text>
          <Text style={styles.value}>IT services</Text>
        </View>
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.descriptionHeading}>Description</Text>
        <Text style={styles.description} numberOfLines={10}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button title="Apply for job" />
      </View>
    </SafeAreaView>
  );
};

export default JobView;
