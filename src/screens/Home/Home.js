import React from "react";
import { View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { JobCard, Text } from "../../common";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Touchable } from "react-native-web";

const Home = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerGreeting}>Hello</Text>
          <Text style={styles.headerName}>Nimesh K.</Text>
        </View>
        <TouchableOpacity style={styles.profile}>
          <Image
            style={styles.profileImg}
            source={{
              // uri: `data:image/jpg;base64,${""}`,
              uri: "https://biographymask.com/wp-content/uploads/2021/05/Kim-Se-Jeong-songwriter.jpg",
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </View>
      <View style={styles.allJobCardWrapper}>
        <TouchableOpacity style={styles.allJobCard}>
          <View>
            <View style={styles.allJobCardTextWrapper}>
              <Text style={styles.allJobCardHeading}>
                Find your dream job on
              </Text>
              <Text style={styles.logo}>Hirely</Text>
            </View>
            <View style={styles.pillButton}>
              <Text style={styles.pillButtonText}>Explore</Text>
            </View>
          </View>
          <View>
            <Image
              style={styles.allJobCardImg}
              source={{
                uri: `https://www.pinclipart.com/picdir/big/565-5657202_successful-clip-art.png`,
              }}
              resizeMode="cover"
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.sectionWrapper}>
        <Text style={styles.sectionHeading}>Find your job</Text>
        <View style={styles.jobTypesWrapper}>
          <TouchableOpacity style={styles.jobTypeCardLarge}>
            <View style={styles.iconWrapper}>
              <MaterialCommunityIcons
                name="home-city-outline"
                size={24}
                color="black"
              />
            </View>
            <View>
              <Text style={[styles.jobCount, { textAlign: "center" }]}>
                44k
              </Text>
              <Text style={styles.jobType}>Remote jobs</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.jobTypeCardSmallWrapper}>
            <TouchableOpacity
              style={[styles.jobTypeCardSmall, { backgroundColor: "#E5D1FA" }]}
            >
              <View style={styles.iconWrapper}>
                <MaterialCommunityIcons
                  name="office-building"
                  size={24}
                  color="black"
                />
              </View>
              <View style={styles.smallJobCardRight}>
                <Text style={styles.jobCount}>44k</Text>
                <Text style={styles.jobType}>Full time</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.jobTypeCardSmall, { backgroundColor: "#D1FAD7" }]}
            >
              <View style={styles.iconWrapper}>
                <MaterialCommunityIcons
                  name="heart-box-outline"
                  size={24}
                  color="black"
                />
              </View>
              <View style={styles.smallJobCardRight}>
                <Text style={styles.jobCount}>44k</Text>
                <Text style={styles.jobType}>Part time</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.sectionWrapper}>
        <View style={styles.sectionHeadingWrapper}>
          <Text style={styles.sectionHeadingMain}>Recent job list</Text>
          <TouchableOpacity>
            <Text style={styles.link}>See all</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.cardsWrapper}>
          <JobCard />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
