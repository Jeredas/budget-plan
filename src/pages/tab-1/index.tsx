import Channel from "components/channel";
import React, { ReactElement, useMemo } from "react";
import { useState } from "react";
import { IChannel } from "shared/interfaces";
import { useAppSelector } from "store/hooks";

export default function Tab1(): ReactElement {
  const channelList = useAppSelector((state) => state.channelsList.channels);
  const [channels, setChannels] = useState(channelList);

  useMemo(() => {
    setChannels(channelList);
  }, [channelList]);

  return (
    <>
      {channels.map((channel: IChannel) => {
        return <Channel channel={channel} key={channel.id} />;
      })}
    </>
  );
}
