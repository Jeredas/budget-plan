import Channel from "components/channel";
import React,{ ReactElement, useMemo } from "react";
import { useState } from "react";
import { setChannel } from "reducers/channel.slice";
import { useAppDispatch, useAppSelector } from "store/hooks";

export default function Tab1(): ReactElement{
	const channelList = useAppSelector((state:any)=> state.channelsList.channels)
	const dispatch = useAppDispatch();
	const [channels, setChannels] = useState(channelList);

	useMemo(()=>{
		setChannels(channelList)
	},[channelList]);
	
	return(
		<>
		{channels.map((chan:any)=>{
			dispatch(setChannel(chan))
			// @ts-ignore
			return <Channel chan={chan}/>
		})}
		</>
	)
}