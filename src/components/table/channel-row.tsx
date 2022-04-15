import { ReactElement, useState } from "react";
import { QUARTERS } from "shared/constatns";
import { IChannel } from "shared/interfaces";
import ChannelCell from "./channel-cell";
import {v4 as uuidv4, v4} from 'uuid';
import { ChanneRowlWrapper, ChannelTitle, Subtitle, ChannelLogo, ChannelName, ScrollIndicator, TableGrid, CellsWrapper, Arrow } from "./style";

export default function ChannelRow(props: { channel: IChannel }): ReactElement {
  const [isMoved, setIsMoved] = useState(false);
  return (
    <>
      <ChanneRowlWrapper>
        <ChannelTitle>
          <Subtitle>Channel</Subtitle>
          <ChannelLogo />
          <ChannelName> {props.channel.name}</ChannelName>
        </ChannelTitle>
        <ScrollIndicator />
        <TableGrid>
          <CellsWrapper
            style={{
              transform: `${isMoved ? "translateX(-25%)" : "translateX(0)"} `,
            }}
          >
            {props.channel.frequency !== "Quarterly" &&
              props.channel.breakdown.map((breakdown) => {
                const uuid=v4();
                return (
                  <ChannelCell
                    id={props.channel.id}
                    amount={props.channel.amount}
                    breakdown={breakdown}
                    allocation={props.channel.allocation}
                    key={uuid}
                  />
                );
              })}
            {props.channel.frequency === "Quarterly" &&
              QUARTERS.map((breakdown, index) => {
                const uuid = uuidv4();
                return (
                  <ChannelCell
                    id={props.channel.id}
                    amount={props.channel.amount}
                    breakdown={props.channel.breakdown[index]}
                    allocation={props.channel.allocation}
                    quarterName={breakdown.name}
                    key={uuid}
                  />
                );
              })}
          </CellsWrapper>
        </TableGrid>
        {props.channel.frequency !== "Quarterly" && (
          <Arrow isMoved={isMoved} onClick={() => setIsMoved(!isMoved)} />
        )}
      </ChanneRowlWrapper>
    </>
  );
}

