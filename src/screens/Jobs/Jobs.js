import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, ActivityIndicator } from "react-native";
import styles from "./styles";
import { Text, Input, JobCard } from "../../common";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../redux/actions";

const Jobs = () => {
  const [allJobs, setAllJobs] = useState([]);

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

  const searchJobs = (data) => {
    if (data === "") {
      let jobsArr = Object.keys(getJobs).map((key) => {
        return getJobs[key];
      });
      setAllJobs(jobsArr);
    } else {
      setAllJobs(
        allJobs &&
          allJobs.filter((job) => {
            return job.title.toLowerCase().includes(data.toLowerCase());
          })
      );
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ paddingVertical: 10 }}>
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

  if (getJobsFetching) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.searchWrapper}>
        <Input
          style={styles.search}
          placeholder="Job title, type or keyword"
          onChangeText={searchJobs}
        />
        <Text style={styles.resultsText}>{allJobs.length} job openings</Text>
      </View>
      <View style={styles.flatListWrapper}>
        <FlatList
          data={allJobs}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={styles.flatList}
        />
      </View>
    </SafeAreaView>
  );
};

export default Jobs;
