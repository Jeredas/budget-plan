import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBreakdown, IChannel } from "shared/interfaces";

interface IInitialState {
  channels: IChannel[];
}
const initialState: IInitialState = {
  channels: [],
};

export const channelsListSlice = createSlice({
  name: "channelsList",
  initialState,
  reducers: {
    addChannel: (state: IInitialState, action: PayloadAction<IChannel>) => {
      state.channels.push(action.payload);
    },
    removeChannel: (state: IInitialState, action: PayloadAction<string>) => {
      const channels = state.channels.filter((channel) => {
        return channel.id !== action.payload;
      });
      state.channels = channels;
    },
    setChannelIsOpened: (
      state: IInitialState,
      action: PayloadAction<string>
    ) => {
      const channels = state.channels.map((channel) => {
        if (channel.id === action.payload) {
          channel.isOpened = !channel.isOpened;
        } else {
          channel.isOpened = false;
        }
        return channel;
      });
      state = { ...state, channels };
    },
    setChannelName: (
      state: IInitialState,
      action: PayloadAction<{ id: string; name: string }>
    ) => {
      const channels = state.channels.map((channel) => {
        if (channel.id === action.payload.id) {
          channel.name = action.payload.name;
        }
        return channel;
      });
      state = { ...state, channels };
    },
    setChannelAllocation: (
      state: IInitialState,
      action: PayloadAction<{ id: string; allocation: string }>
    ) => {
      const channels = state.channels.map((channel) => {
        if (channel.id === action.payload.id) {
          channel.allocation = action.payload.allocation;
        }
        return channel;
      });
      state = { ...state, channels };
    },
    setChannelAmount: (
      state: IInitialState,
      action: PayloadAction<{ id: string; amount: number }>
    ) => {
      const channels = state.channels.map((channel) => {
        if (channel.id === action.payload.id) {
          channel.amount = action.payload.amount;
        }
        return channel;
      });
      state = { ...state, channels };
    },
    setChannelFrequency: (
      state: IInitialState,
      action: PayloadAction<{ id: string; frequency: string }>
    ) => {
      const channels = state.channels.map((channel) => {
        if (channel.id === action.payload.id) {
          channel.frequency = action.payload.frequency;
        }
        return channel;
      });
      state = { ...state, channels };
    },
    setChannelBreakdown: (
      state: IInitialState,
      action: PayloadAction<{ id: string; breakdown: IBreakdown }>
    ) => {
      const channels = state.channels.map((channel) => {
        if (channel.id === action.payload.id) {
          const newBreakdown = channel.breakdown.map((bd) => {
            if (bd.name === action.payload.breakdown.name) {
              bd.value = action.payload.breakdown.value;
            }
            return bd;
          });
          channel.breakdown = newBreakdown;
        }
        return channel;
      });
      state = { ...state, channels };
    },
  },
});

export const {
  addChannel,
  removeChannel,
  setChannelIsOpened,
  setChannelAmount,
  setChannelFrequency,
  setChannelAllocation,
  setChannelName,
  setChannelBreakdown,
} = channelsListSlice.actions;

export default channelsListSlice.reducer;
