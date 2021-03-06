import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    marginTop: 30,
    marginBottom: 20,
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  headerLeft: {},
  headerGreeting: {
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 30,
    color: "#a0a0a0",
  },
  headerName: {
    fontSize: 28,
    fontWeight: "600",
    lineHeight: 30,
  },
  profile: {},
  profileImg: {},
  allJobCardWrapper: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  allJobCard: {
    backgroundColor: "#FAEFD1",
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  allJobCardTextWrapper: { marginBottom: 10 },
  allJobCardHeading: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 21,
    color: "#a0a0a0",
  },
  logo: {
    fontSize: 36,
    fontWeight: "600",
    letterSpacing: -2,
  },
  pillButton: {
    backgroundColor: "#000",
    borderRadius: 50,
    paddingHorizontal: 15,
    paddingVertical: 4,
    width: 80,
    alignItems: "center",
  },
  pillButtonText: {
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 16,
    color: "#fff",
  },
  allJobCardImg: {
    width: 100,
    height: 100,
  },
  profileImg: {
    width: 55,
    height: 55,
    borderRadius: 60,
    // borderWidth: 3,
    // borderColor: colors.primary,
  },
  sectionWrapper: { marginHorizontal: 20 },
  sectionHeading: {
    fontSize: 19,
    fontWeight: "600",
    lineHeight: 21,
  },
  jobTypesWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginVertical: 20,
    width: "100%",
  },
  jobTypeCardLarge: {
    backgroundColor: "#D1F3FA",
    borderRadius: 10,
    padding: 20,
    height: 190,
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    width: "48%",
  },
  iconWrapper: {
    backgroundColor: "#fff",
    borderRadius: 50,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  jobCount: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 20,
  },
  jobType: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 16,
    color: "#a0a0a0",
  },
  jobTypeCardSmallWrapper: {
    justifyContent: "space-between",
    height: 190,
    width: "48%",
  },
  jobTypeCardSmall: {
    borderRadius: 10,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  smallJobCardRight: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    textAlign: "left",
    marginLeft: 10,
  },
  sectionHeadingWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionHeadingMain: {
    fontSize: 23,
    fontWeight: "600",
    lineHeight: 25,
    marginTop: 6,
  },
  link: {
    color: "#a0a0a0",
    fontWeight: "600",
    paddingTop: 6,
  },
  // cardsWrapper: { paddingVertical: 20 },
  flatList: { paddingVertical: 20 },
  loading: {
    zIndex: 99999,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff80",
  },
});

export default styles;
