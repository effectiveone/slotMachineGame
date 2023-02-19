import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../utils/helpers/styles";

function GamePadButton({ spin, spinLimit, refill }) {
  return (
    <View style={styles.containerButtons}>
      <TouchableOpacity style={styles.button} onPress={spin}>
        <Text style={styles.buttonText}>Spin {spinLimit}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={refill}>
        <Text style={styles.buttonText}>Refill</Text>
      </TouchableOpacity>
    </View>
  );
}

export default GamePadButton;
