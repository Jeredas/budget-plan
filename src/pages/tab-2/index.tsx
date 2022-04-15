import ChannelRow from "components/table/channel-row";
import React, { ReactElement } from "react";
import { IChannel } from "shared/interfaces";
import { useAppSelector } from "store/hooks";

export default function Tab2(): ReactElement {
  const channelList = useAppSelector((state) => state.channelsList.channels);

  return (
    <>
      {channelList.map((channel: IChannel) => {
        return <ChannelRow channel={channel} key={channel.id} />;
      })}
    </>
  );
}
