import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  searchWrapper: {
    marginVertical: 20,
    borderBottomColor: "#f6f6f6",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  search: { marginHorizontal: 20 },
  resultsText: {
    fontSize: 16,
    fontWeight: "500",
    lineHeight: 18,
    marginTop: 16,
    marginHorizontal: 20,
  },
  flatListWrapper: { flex: 1 },
  flatList: {
    paddingHorizontal: 20,
  },
});

export default styles;
