import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const slotItems = [
  { symbol: "🍒", points: 10 },
  { symbol: "🍇", points: 20 },
  { symbol: "🍉", points: 30 },
  { symbol: "🍊", points: 40 },
  { symbol: "🍓", points: 50 },
  { symbol: "🍋", points: 60 },
  { symbol: "🍍", points: 70 },
  { symbol: "🍑", points: 80 },
];

export default function App() {
  const [slot1, setSlot1] = useState(slotItems[0]);
  const [slot2, setSlot2] = useState(slotItems[0]);
  const [slot3, setSlot3] = useState(slotItems[0]);
  const [wallet, setWallet] = useState(0);

  const spin = () => {
    // Losuj trzy symbole
    const item1 = slotItems[Math.floor(Math.random() * slotItems.length)];
    const item2 = slotItems[Math.floor(Math.random() * slotItems.length)];
    const item3 = slotItems[Math.floor(Math.random() * slotItems.length)];

    // Aktualizuj stany symboli
    setSlot1(item1);
    setSlot2(item2);
    setSlot3(item3);

    // Dodaj nagrodę punktową do portfela, jeśli wylosowano pasujące symbole
    if (item1.symbol === item2.symbol && item2.symbol === item3.symbol) {
      setWallet(wallet + item1.points);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Slot Machine</Text>
      <View style={styles.slotsContainer}>
        <Text style={styles.slot}>{slot1.symbol}</Text>
        <Text style={styles.slot}>{slot2.symbol}</Text>
        <Text style={styles.slot}>{slot3.symbol}</Text>
      </View>
      <Text style={styles.wallet}>Wallet: {wallet}</Text>
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
});
