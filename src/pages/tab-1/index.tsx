import Channel from "components/channel";
import React, { ReactElement, useMemo } from "react";
import { useState } from "react";
import { setChannel } from "reducers/channel.slice";
import { IChannel } from "shared/interfaces";
import { useAppDispatch, useAppSelector } from "store/hooks";

export default function Tab1(): ReactElement {
  const channelList = useAppSelector((state) => state.channelsList.channels);
  const dispatch = useAppDispatch();
  const [channels, setChannels] = useState(channelList);

  useMemo(() => {
    setChannels(channelList);
  }, [channelList]);

  return (
    <>
      {channels.map((channel: IChannel) => {
        dispatch(setChannel(channel));
        return <Channel channel={channel} key={channel.id} />;
      })}
    </>
  );
}
