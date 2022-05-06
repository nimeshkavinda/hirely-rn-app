import { StyleSheet } from "react-native";
import colors from "../../theme/colors";

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoWrapper: { justifyContent: "flex-end", alignItems: "center", flex: 1 },
  logo: {
    fontSize: 46,
    fontWeight: "600",
    letterSpacing: -2,
  },
  loginWrapper: {
    flex: 2.5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  quickLogin: {
    backgroundColor: "#f5f5f5",
    marginTop: 140,
    padding: 24,
    borderRadius: 24,
    width: 153,
    height: 159,
    justifyContent: "center",
    alignItems: "center",
  },
  quickLoginImg: {
    marginBottom: 16,
  },
  quickLoginText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 31,
  },
  loginLinkWrapper: {
    alignItems: "center",
    justifyContent: "center",
  },
  loginLinkText: {
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 31,
  },
  loginLink: {
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 16,
    lineHeight: 31,
    color: colors.primary,
  },
  signUpLink: {
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 31,
    marginBottom: 36,
    color: colors.primary,
  },
});

export default styles;
