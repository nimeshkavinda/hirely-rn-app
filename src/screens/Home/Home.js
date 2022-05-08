import React, { useState, useEffect } from "react";
import {
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { JobCard, Text } from "../../common";
import styles from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../redux/actions";
import AsyncStorage from "@react-native-async-storage/async-storage";
import colors from "../../theme/colors";

const Home = () => {
  const dispatch = useDispatch();
  const [allJobs, setAllJobs] = useState([]);
  const [jobTypesCount, setJobsTypesCount] = useState([]);
  const [modalityCount, setModalityCount] = useState([]);
  const [user, setUser] = useState();

  const candidateData = useSelector(({ getCandidateByUid }) =>
    getCandidateByUid.data ? getCandidateByUid.data[0] : {}
  );

  const getCandidateByUidFetching = useSelector(
    ({ getCandidateByUid: { fetching } }) => {
      return fetching;
    }
  );

  useEffect(() => {
    dispatch(ac.getJobs());
    setUser(candidateData?.data);
  }, []);

  useEffect(() => {
    if (!getCandidateByUidFetching) {
      setUser(candidateData?.data);
    }
  }, [getCandidateByUidFetching, candidateData]);

  const getJobs = useSelector(({ getJobs }) =>
    getJobs.data ? getJobs.data : {}
  );

  const getJobsFetching = useSelector(({ getJobs: { fetching } }) => {
    return fetching;
  });

  useEffect(() => {
    let jobsArr = Object.keys(getJobs).map((key) => {
      return getJobs[key];
    });
    if (!getJobsFetching) {
      setAllJobs(jobsArr);
    }
  }, [getJobs, getJobsFetching]);

  const getJobTypeCounts = () => {
    let fullTime = allJobs
      .filter((jobs) => jobs.jobType === jobTypes[0].value)
      .map((jobs) => jobs);

    let partTime = allJobs
      .filter((jobs) => jobs.jobType === jobTypes[1].value)
      .map((jobs) => jobs);

    let contract = allJobs
      .filter((jobs) => jobs.jobType === jobTypes[2].value)
      .map((jobs) => jobs);

    let internship = allJobs
      .filter((jobs) => jobs.jobType === jobTypes[3].value)
      .map((jobs) => jobs);

    setJobsTypesCount({
      fullTime: { ...fullTime, value: "full-time" },
      partTime: { ...partTime, value: "part-time" },
      contract: { ...contract, value: "contract" },
      internship: { ...internship, value: "internship" },
    });
  };

  const getModalityCounts = () => {
    let remote = allJobs
      .filter((jobs) => jobs.isRemote === true)
      .map((jobs) => jobs);

    let office = allJobs
      .filter((jobs) => jobs.isRemote === false)
      .map((jobs) => jobs);

    setModalityCount({
      remote: { ...remote, value: "remote" },
      inOffice: { ...office, value: "in-office" },
    });
  };

  if (getCandidateByUidFetching || getJobsFetching) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={{ paddingLeft: 20 }}>
      <JobCard
        id={item.id}
        companyLogo={item.company.companyLogo}
        created={item.created}
        title={item.title}
        companyName={item.company.companyName}
        noOfApplicants={item.noOfApplicants}
        jobType={item.jobType}
        modality={item.modality}
        industry={item.industry}
        location={item.location}
        salary={item.salary}
        description={item.description}
      />
    </View>
  );

  return (
    <SafeAreaView
      style={styles.wrapper}
      pointerEvents={
        getJobsFetching || getCandidateByUidFetching ? "none" : "auto"
      }
    >
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerGreeting}>Hello</Text>
          <Text style={styles.headerName}>Nimesh Kavinda</Text>
        </View>
        <TouchableOpacity style={styles.profile}>
          <Image
            style={styles.profileImg}
            source={{
              // uri: `data:image/jpg;base64,${""}`,
              uri: "https://github.com/nimeshkavinda.png",
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
              <Text style={[styles.jobCount, { textAlign: "center" }]}>4</Text>
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
                <Text style={styles.jobCount}>12</Text>
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
                <Text style={styles.jobCount}>17</Text>
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
      </View>
      <View style={styles.cardsWrapper}>
        <FlatList
          data={allJobs.slice(0, 5)}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={styles.flatList}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
