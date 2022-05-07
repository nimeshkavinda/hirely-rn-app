import React from "react";
import styles from "./styles";
import { View, Image, TouchableOpacity } from "react-native";
import { Text } from "react-native";
import { Feather } from "@expo/vector-icons";

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
  return (
    <TouchableOpacity style={styles.wrapper}>
      <View style={styles.headingWrapper}>
        <View style={styles.headingLeft}>
          <View>
            <Image
              style={styles.companyLogo}
              source={{
                // uri: `data:image/jpg;base64,${""}`,
                uri: "https://media-exp1.licdn.com/dms/image/C4D0BAQGNCOdrcOEQzg/company-logo_200_200/0/1519892773304?e=2147483647&v=beta&t=kq3O9XyGoBdQmlXUHJccc5svIA5vVKpnRlAuxBojCvE",
              }}
              resizeMode="cover"
            />
          </View>
          <View>
            <Text style={styles.title}>Software Engineer</Text>
            <Text style={styles.salary}>85,000 LKR</Text>
          </View>
        </View>
        <View>
          <Feather name="bookmark" size={24} color="#a0a0a0" />
        </View>
      </View>
      <View style={styles.footerWrapper}>
        <View style={styles.footerLeft}>
          <View style={styles.pill}>
            <Text style={styles.pillText}>Remote</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>Colombo 3</Text>
          </View>
          <View style={styles.pill}>
            <Text style={styles.pillText}>Full time</Text>
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
