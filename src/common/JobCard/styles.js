import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    padding: 16,
    elevation: 6,
    shadowColor: "#a0a0a0",
    shadowOpacity: 0.1,
    shadowOffset: {
      height: 6,
    },
    shadowRadius: 30,
  },
  headingWrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  companyLogo: {
    width: 48,
    height: 48,
    borderRadius: 60,
    marginRight: 14,
  },
  headingLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    lineHeight: 20,
  },
  salary: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
    color: "#a0a0a0",
  },
  pill: {
    backgroundColor: "#f6f6f6",
    borderRadius: 50,
    paddingHorizontal: 10,
    paddingVertical: 4,
    alignItems: "center",
    marginRight: 4,
  },
  pillText: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 14,
    color: "#000",
  },
  footerWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  footerLeft: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  pillButton: {
    backgroundColor: "#FAEFD1",
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 4,
    alignItems: "center",
    marginRight: 4,
  },
  pillButtonText: {
    fontSize: 12,
    fontWeight: "500",
    lineHeight: 14,
    // color: "#fff",
  },
});

export default styles;
