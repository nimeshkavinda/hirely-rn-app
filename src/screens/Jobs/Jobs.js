import React from "react";
import { View, SafeAreaView } from "react-native";
import styles from "./styles";
import { Text, Input } from "../../common";

const Jobs = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.searchWrapper}>
        <Input style={styles.search} placeholder="Job title, type or keyword" />
        <Text style={styles.resultsText}>200 job openings</Text>
      </View>
    </SafeAreaView>
  );
};

export default Jobs;
