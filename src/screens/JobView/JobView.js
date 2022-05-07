import React, { useState, useEffect } from "react";
import styles from "./styles";
import {
  SafeAreaView,
  View,
  Image,
  ActivityIndicator,
  Alert,
} from "react-native";
import { Text, BackButton, Button } from "../../common";
import { Feather } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../redux/actions";
import colors from "../../theme/colors";

const JobView = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const [applyStatus, setApplyStatus] = useState(false);

  useEffect(() => {
    dispatch(ac.getJobById(route.params.jobId));
  }, []);

  const getJobById = useSelector(({ getJobById }) =>
    getJobById.data ? getJobById.data[0] : {}
  );

  const getJobByIdFetching = useSelector(({ getJobById: { fetching } }) => {
    return fetching;
  });

  const getCandidateByUid = useSelector(
    ({ getCandidateByUid }) => getCandidateByUid
  );

  const getCandidateByUidFetching = useSelector(
    ({ getCandidateByUid: { fetching } }) => {
      return fetching;
    }
  );

  const updateJob = useSelector(({ updateJob }) =>
    updateJob.data ? updateJob.data : {}
  );

  const updateJobFetching = useSelector(({ updateJob: { fetching } }) => {
    return fetching;
  });

  const getEmployerByUid = useSelector(
    ({ getEmployerByUid }) => getEmployerByUid
  );

  const getEmployerByUidFetching = useSelector(
    ({ getEmployerByUid: { fetching } }) => {
      return fetching;
    }
  );

  useEffect(() => {
    if (!getJobByIdFetching && getJobById) {
      // console.log("job company id: ", getJobById.company.uid);
      dispatch(ac.getEmployerByUid(getJobById.company?.uid));
    }
  }, [getJobById, getJobByIdFetching, dispatch]);

  const onApply = () => {
    dispatch(
      ac.updateJob(route.params.jobId, {
        ...getJobById,
        candidates: [
          ...getJobById.candidates,
          {
            candidateUid: getCandidateByUid.data.data.uid,
          },
        ],
      })
    );

    dispatch(
      ac.updateEmployer(getJobById.company.uid, {
        ...getEmployerByUid.data[0],
        candidates: [
          ...getEmployerByUid.data[0].candidates,
          {
            candidateUid: getCandidateByUid.data.data.uid,
            jobId: route.params.jobId,
          },
        ],
      })
    );

    dispatch(
      ac.updateCandidate(getCandidateByUid.data.data.uid, {
        ...getCandidateByUid.data.data,
        jobs: [
          ...getCandidateByUid.data.data.jobs,
          {
            employerUid: getJobById.company.uid,
            jobId: route.params.jobId,
          },
        ],
      })
    );
  };

  useEffect(() => {
    if (updateJob.status === "success") {
      let isFound = updateJob.data.candidates.some((candidate) => {
        if (candidate.candidateUid === getCandidateByUid.data.data.uid) {
          return true;
        }
        return false;
      });
      if (isFound) {
        setApplyStatus(true);
        Alert.alert(
          "Applied",
          "You have applied for this job",
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
      } else {
        Alert.alert(
          "Failed",
          "Failed to apply",
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
    }
    if (updateJob.error) {
      Alert.alert(
        "Failed",
        "Failed to apply",
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
  }, [updateJob, getCandidateByUid.data.data.uid, updateJobFetching, dispatch]);

  if (getJobByIdFetching) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

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
            uri: `${getJobById?.company?.companyLogo}`,
          }}
          resizeMode="cover"
        />
        <Text style={styles.title}>{getJobById?.title}</Text>
        <View style={styles.tagsRow}>
          <Text style={styles.tagText}>{getJobById?.company?.companyName}</Text>
          <Entypo name="dot-single" size={24} color="#a0a0a0" />
          <Text style={styles.tagText}>{getJobById?.location}</Text>
          <Entypo name="dot-single" size={24} color="#a0a0a0" />
          <Text style={styles.tagText}>
            {getJobById?.candidates?.length} applicants
          </Text>
        </View>
      </View>
      <View style={styles.typeRow}>
        <View style={styles.type}>
          <View style={[styles.typeIcon, { backgroundColor: "#FAEFD1" }]}>
            <FontAwesome name="dollar" size={24} color="black" />
          </View>
          <Text style={styles.typeHeading}>Salary</Text>
          <Text style={styles.value}>{getJobById?.salary} LKR</Text>
        </View>
        <View style={styles.type}>
          <View style={[styles.typeIcon, { backgroundColor: "#E5D1FA" }]}>
            <MaterialIcons name="timer" size={24} color="black" />
          </View>
          <Text style={styles.typeHeading}>Job type</Text>
          <Text style={styles.value}>{getJobById?.jobType}</Text>
        </View>
        <View style={styles.type}>
          <View style={[styles.typeIcon, { backgroundColor: "#D1FAD7" }]}>
            <FontAwesome5 name="building" size={24} color="black" />
          </View>
          <Text style={styles.typeHeading}>Industry</Text>
          <Text numberOfLines={1} style={[styles.value, { maxWidth: 80 }]}>
            {getJobById?.industry}
          </Text>
        </View>
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.descriptionHeading}>Description</Text>
        <Text style={styles.description} numberOfLines={8}>
          {getJobById?.description}
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button
          title={applyStatus ? "Already applied" : "Apply for this job"}
          disabled={applyStatus}
          onPress={onApply}
          isLoading={
            getCandidateByUidFetching ||
            getEmployerByUidFetching ||
            updateJobFetching
          }
          style={{ backgroundColor: applyStatus ? "#a9a9a9" : colors.primary }}
        />
      </View>
    </SafeAreaView>
  );
};

export default JobView;
