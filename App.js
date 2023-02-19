import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const slotItems = ["🍒", "🍇", "🍉", "🍊", "🍓", "🍋", "🍍", "🍑"];

export default function App() {
  const [slot1, setSlot1] = useState("🍒");
  const [slot2, setSlot2] = useState("🍒");
  const [slot3, setSlot3] = useState("🍒");

  const spin = () => {
    // Losuj trzy symbole
    const item1 = slotItems[Math.floor(Math.random() * slotItems.length)];
    const item2 = slotItems[Math.floor(Math.random() * slotItems.length)];
    const item3 = slotItems[Math.floor(Math.random() * slotItems.length)];

    // Aktualizuj stany symboli
    setSlot1(item1);
    setSlot2(item2);
    setSlot3(item3);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Slot Machine</Text>
      <View style={styles.slotsContainer}>
        <Text style={styles.slot}>{slot1}</Text>
        <Text style={styles.slot}>{slot2}</Text>
        <Text style={styles.slot}>{slot3}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={spin}>
        <Text style={styles.buttonText}>Spin</Text>
      </TouchableOpacity>
    </View>
  );
}

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
    fontSize: 60,
    marginHorizontal: 10,
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
});
