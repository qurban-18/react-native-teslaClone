import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titles: {
    width: "100%",
    alignItems: "center",
    marginTop: "30%",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#5c5e62",
  },
  bgImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  buttonContainer: {
    width: "100%",
    position: "absolute",
    bottom: 40,
  },
});

export default styles;
