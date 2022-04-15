import { ReactElement, useState } from "react";
import { QUARTERS } from "shared/constatns";
import { IChannel } from "shared/interfaces";
import styled from "styled-components";
import ChannelCell from "./channel-cell";
import {v4 as uuidv4, v4} from 'uuid';

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

const Arrow = styled.div<{isMoved:boolean}>((props: { isMoved: boolean }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: `10px`,
  height: `6.25px`,
  margin: "auto 15px",
  transition: "0.5s",
  backgroundImage: "url(./icons/scroll_arrow.png)",
  transform: `rotate(${props.isMoved ? "180deg" : "0deg"})`,
  backgroundPosition: "center",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  top: "20px",
  right: "75px",
  position: "absolute",
}));

const Subtitle = styled.div`
  position: absolute;
  height: 16px;
  left: 41px;
  top: 15px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 16px;
  /* identical to box height, or 145% */
  text-transform: uppercase;
  color: #99a4c2;
`;
const CellsWrapper = styled.div`
  display: flex;
  transform: translateX(0%);
  transition: 0.5s;
`;

const TableGrid = styled.div`
  display: flex;
  overflow: hidden;
  width: 1000px;
  height: 100%;
`;

const ScrollIndicator = styled.div`
  positon: relative;
  width: 80px;
  height: 128px;
  display: flex;
  background: linear-gradient(
    90deg,
    rgba(169, 181, 210, 0.0001) 0%,
    rgba(112, 126, 167, 0.134454) 100%
  );
  mix-blend-mode: normal;
  opacity: 0.5;
`;
const ChannelTitle = styled.div`
  position: relative;
  width: 257px;
  height: 128px;
  display: flex;
  align-items: flex-end;
`;

const ChanneRowlWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  width: 100%px;
  height: 128px;
  margin: 0 auto;
  justify-content: flex-start;

  border: 1px solid rgba(178, 187, 213, 0.5);
  border-radius: 4px 4px 0px 0px;
  cursor: pointer;
`;

const ChannelLogo = styled.div`
  background-image: url(./icons/channel-logo.png);
  width: 36px;
  height: 36px;
  background-color: #FF9602;
  margin: 0 16px 14px 28px;`

const ChannelName = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
  height: 21px;
  left: 153px;
  top: 307px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */
  color: #222a41;
  margin: 0 0 21px 0;
`;
