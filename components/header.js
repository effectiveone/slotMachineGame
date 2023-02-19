import React from "react";
import { Text } from "react-native";
import styles from "../utils/helpers/styles";
function header({ wallet }) {
  return (
    <>
      <Text style={styles.title}>Slot Machine</Text>
      <Text style={styles.wallet}>Wallet: {wallet}</Text>
    </>
  );
}

export default header;
