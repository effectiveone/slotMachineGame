import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,
  },
  slotsContainer: {
    flexDirection: "row",
    marginBottom: 30,
  },
  slot: {
    border: "1px solid black",
    fontSize: 60,
    marginHorizontal: 10,
  },
  wallet: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  containerButtons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "space-between",
    gap: "20px",
  },
});

export default styles;
