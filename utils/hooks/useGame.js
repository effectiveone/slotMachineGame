import slotItems from "../helpers/slotItems";
import { useReducer } from "react";
const initialState = {
  slot1: slotItems[0],
  slot2: slotItems[0],
  slot3: slotItems[0],
  wallet: 0,
  spinLimit: 5,
};

function reducer(state, action) {
  switch (action.type) {
    case "SPIN":
      if (state.spinLimit === 0) {
        alert("you do not have coins");
        return state;
      }
      const item1 = slotItems[Math.floor(Math.random() * slotItems.length)];
      const item2 = slotItems[Math.floor(Math.random() * slotItems.length)];
      const item3 = slotItems[Math.floor(Math.random() * slotItems.length)];
      let wallet = state.wallet;
      if (item1.symbol === item2.symbol && item2.symbol === item3.symbol) {
        wallet += item1.points;
      }
      return {
        ...state,
        slot1: item1,
        slot2: item2,
        slot3: item3,
        wallet,
        spinLimit: state.spinLimit - 1,
      };
    case "REFILL":
      return {
        ...state,
        spinLimit: 5,
      };
    default:
      return state;
  }
}

function useSlotMachine() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function spin() {
    dispatch({ type: "SPIN" });
  }

  function refill() {
    dispatch({ type: "REFILL" });
  }

  return {
    slot1: state.slot1,
    slot2: state.slot2,
    slot3: state.slot3,
    wallet: state.wallet,
    spinLimit: state.spinLimit,
    spin,
    refill,
  };
}

export default useSlotMachine;
