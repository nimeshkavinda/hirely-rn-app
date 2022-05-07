import React from "react";
import styles from "./styles";
import { View, Image, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const JobCard = ({
  id,
  companyLogo,
  created,
  title,
  companyName,
  noOfApplicants,
  jobType,
  modality,
  industry,
  location,
  salary,
  description,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() =>
        navigation.navigate("JobView", {
          jobId: id,
        })
      }
    >
      <View style={styles.headingWrapper}>
        <View style={styles.headingLeft}>
          <View>
            <Image
              style={styles.companyLogo}
              source={{
                uri: `${companyLogo}`,
              }}
              resizeMode="cover"
            />
          </View>
          <View>
            <Text style={styles.title}>{title}</Text>
            <Text style={[styles.salary, { textTransform: "uppercase" }]}>
              {salary} LKR
            </Text>
          </View>
        </View>
        <View>
          <Feather name="bookmark" size={24} color="#a0a0a0" />
        </View>
      </View>
      <View style={styles.footerWrapper}>
        <View style={styles.footerLeft}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>
              {modality ? "Remote" : "In-office"}
            </Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText} numberOfLines={1}>
              {location}
            </Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>
              {jobType}
            </Text>
          </View>
        </View>
        <View style={styles.footerRight}>
          <View style={styles.pillButton}>
            <Text style={styles.pillButtonText}>Apply</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default JobCard;
