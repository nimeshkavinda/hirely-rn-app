import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    paddingVertical: 18,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 22,
  },
  profileHeaderWrapper: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1,
  },
  profilePhoto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginVertical: 20,
  },
  role: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 22,
    marginBottom: 10,
  },
  about: {
    marginHorizontal: 40,
    marginBottom: 20,
    textAlign: "center",
  },
  contactsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  contactItem: { marginHorizontal: 10, flexDirection: "row" },
  contact: {
    color: "#6d6d6d",
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 14,
    marginLeft: 5,
  },
  buttonWrapper: { marginBottom: 30 },
  editButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  editButtonText: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 18,
    color: "#fff",
  },
  sectionHeadingWrapper: {
    marginBottom: 20,
  },
  sectionHeading: {
    fontSize: 16,
    fontWeight: "600",
    lineHeight: 18,
  },
});

export default styles;
