import { configureStore } from '@reduxjs/toolkit';
import channelListSliceReducer from 'reducers/channel-list.slice';
import channelSliceReducer from 'reducers/channel.slice';



const store = configureStore({
	reducer: {
		channel: channelSliceReducer,
		channelsList: channelListSliceReducer
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;