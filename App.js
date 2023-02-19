import React from "react";
import { View } from "react-native";
import styles from "./utils/helpers/styles";
import useSlotMachine from "./utils/hooks/useGame";
import Header from "./components/header";
import ContainerSlots from "./components/ContainerSlots";
import GamepadButton from "./components/Gamepad";
export default function App() {
  const { slot1, slot2, slot3, wallet, spinLimit, spin, refill } =
    useSlotMachine();

  return (
    <View style={styles.container}>
      <Header wallet={wallet} />
      <ContainerSlots slot1={slot1} slot2={slot2} slot3={slot3} />
      <GamepadButton spin={spin} spinLimit={spinLimit} refill={refill} />
    </View>
  );
}
