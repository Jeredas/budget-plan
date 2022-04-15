import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MONTHS, QUARTERS } from "shared/constatns";
import { IBreakdown } from "./channel.slice";
// eslint-disable-next-line import/no-cycle

interface IInitialState {
  channels: IChannel[];
}
export interface IChannel {
  id: string;
  name: string;
  allocation: string;
  amount: number;
  frequency: string;
  breakdown: IBreakdown[];
  isOpened: boolean;
}

const initialState: IInitialState = {
  channels: [
  ],
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
    setCollapse: (state: IInitialState, action: PayloadAction<string>) => {
      const channels = state.channels.map((channel) => {
        if (channel.id === action.payload) {
          if (channel.isOpened) {
            channel.isOpened = false;
          } else {
            channel.isOpened = true;
          }
        } else {
          channel.isOpened = false;
        }
        return channel;
      });
      state.channels = channels;
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
      state.channels = channels;
    },
    setСhannelAllocation: (
      state: IInitialState,
      action: PayloadAction<{ id: string; allocation: string }>
    ) => {
      const channels = state.channels.map((channel) => {
        if (channel.id === action.payload.id) {
          channel.allocation = action.payload.allocation;
        }
        return channel;
      });
      state.channels = channels;
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
      state.channels = channels;
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
      state.channels = channels;
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
      state.channels = channels;
    },
    setChannelBreakdownList: (
      state: IInitialState,
      action: PayloadAction<{ id: string; breakdown: IBreakdown[] }>
    ) => {
      const channels = state.channels.map((channel) => {
        if (channel.id === action.payload.id) {
          channel.breakdown = action.payload.breakdown;
        }
        return channel;
      });
      state.channels = channels;
    },
  },
});

export const {
  addChannel,
  removeChannel,
  setCollapse,
  setChannelAmount,
  setChannelFrequency,
  setСhannelAllocation,
  setChannelName,
  setChannelBreakdown,
  setChannelBreakdownList,
} = channelsListSlice.actions;

export default channelsListSlice.reducer;
