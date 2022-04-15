import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MONTHS } from "shared/constatns";
import { IBreakdown } from "shared/interfaces";

interface IInitialState {
  id: string;
  name: string;
  allocation: string;
  amount: number;
  frequency: string;
  breakdown: IBreakdown[];
  isOpened: boolean;
}

const initialState: IInitialState = {
  id: "000",
  name: "New channel",
  allocation: "Equal",
  amount: 12000,
  frequency: "Monthly",
  breakdown: MONTHS,
  isOpened: false,
};

export const channelSlice = createSlice({
  name: "channel",
  initialState,
  reducers: {
    setChannel: (
      state: IInitialState,
      action: PayloadAction<IInitialState>
    ) => {
      state = action.payload;
    },
    setId: (state: IInitialState, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    setAmount: (state: IInitialState, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    setFrequency: (state: IInitialState, action: PayloadAction<string>) => {
      state.frequency = action.payload;
    },
    setAllocation: (state: IInitialState, action: PayloadAction<string>) => {
      state.allocation = action.payload;
    },
    setBreakdown: (state: IInitialState, action: PayloadAction<IBreakdown>) => {
      const breakdown = state.breakdown.map((breakdown)=>{
        if(breakdown.name === action.payload.name) {
          breakdown.value = action.payload.value
        }
        return breakdown;
      })
      state.breakdown = breakdown;
    },
    setBreakdownList: (state: IInitialState, action: PayloadAction<IBreakdown[]>) => {
      state.breakdown = action.payload;
    },
  },
});

export const {
  setChannel,
  setId,
  setFrequency,
  setAmount,
  setAllocation,
  setBreakdown,
  setBreakdownList
} = channelSlice.actions;

export default channelSlice.reducer;
