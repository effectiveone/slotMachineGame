import React from "react";
import { Text, View } from "react-native";
import styles from "../utils/helpers/styles";

function ContainerSlots({ slot1, slot2, slot3 }) {
  return (
    <>
      <View style={styles.slotsContainer}>
        <Text style={styles.slot}>{slot1.symbol}</Text>
        <Text style={styles.slot}>{slot2.symbol}</Text>
        <Text style={styles.slot}>{slot3.symbol}</Text>
      </View>
    </>
  );
}

export default ContainerSlots;
