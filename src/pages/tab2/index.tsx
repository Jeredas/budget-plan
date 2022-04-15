import Channel from "components/channel";
import ChannelRow from "components/table/channel-row";
import React,{ ReactElement, useMemo } from "react";
import { useState } from "react";
import { setChannel } from "reducers/channel.slice";
import { useAppDispatch, useAppSelector } from "store/hooks";

export default function Tab2(): ReactElement{
	const channelList = useAppSelector((state:any)=> state.channelsList.channels)
	const dispatch = useAppDispatch();
	const [channels, setChannels] = useState(channelList);
	
	useMemo(()=>{
		setChannels(channelList)
	},[channelList]);
	
	return(
		<>
		{channelList.map((channel:any)=>{
			return (
				<ChannelRow channel={channel}/>
			)
		})}
		</>
	)
}