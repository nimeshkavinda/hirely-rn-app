import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerNav: {
    marginVertical: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  companyHeader: {
    marginHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 20,
    borderBottomColor: "#f5f5f5",
    borderBottomWidth: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  companyLogo: {
    width: 80,
    height: 80,
    borderRadius: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 20,
    marginBottom: 10,
  },
  tagsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tagText: {
    color: "#a0a0a0",
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 16,
    textTransform: "capitalize",
  },
  typeRow: {
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  type: {
    justifyContent: "center",
    alignItems: "center",
  },
  typeIcon: {
    borderRadius: 60,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  typeHeading: {
    color: "#a0a0a0",
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 14,
  },
  value: {
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 14,
    textTransform: "capitalize",
  },
  descriptionWrapper: {
    marginHorizontal: 20,
  },
  descriptionHeading: {
    fontSize: 18,
    fontWeight: "600",
    lineHeight: 20,
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
    marginBottom: 20,
    color: "#a0a0a0",
  },
  buttonWrapper: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});

export default styles;
