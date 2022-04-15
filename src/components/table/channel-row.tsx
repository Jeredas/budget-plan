import { ReactElement, useEffect, useState } from "react";
import { IChannel } from "reducers/channel-list.slice";
import { QUARTERS } from "shared/constatns";
import styled from "styled-components";
import ChannelCell from "./channel-cell";

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
              props.channel.breakdown.map((breakdown, index) => {
                return (
                  <ChannelCell
                    id={props.channel.id}
                    amount={props.channel.amount}
                    breakdown={breakdown}
                    allocation={props.channel.allocation}
                  />
                );
              })}
            {props.channel.frequency === "Quarterly" &&
              QUARTERS.map((breakdown, index) => {
                return (
                  <ChannelCell
                    id={props.channel.id}
                    amount={props.channel.amount}
                    breakdown={props.channel.breakdown[index]}
                    allocation={props.channel.allocation}
                    quarterName={breakdown.name}
                  />
                );
              })}
          </CellsWrapper>
        </TableGrid>
        {/* @ts-ignore */}
        {props.channel.frequency !== "Quarterly" && (<Arrow isMoved={isMoved} onClick={() => setIsMoved(!isMoved)} />
        )}
      </ChanneRowlWrapper>
    </>
  );
}
// @ts-ignore
const Arrow = styled.div((props: any) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: `10px`,
  height: `6.25px`,
  margin: "auto 15px",
  transition: "0.5s",
  backgroundImage: "url(./icons/scroll_arrow.png)",
  transform: `rotate(${props.isMoved ? "180deg" : "0deg"})`,
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
  posiiton: relative;
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
  max-width:1340
  width: 100%px;
  height: 128px;
  margin: 0 auto;
  justify-content: flex-start;

  border: 1px solid rgba(178, 187, 213, 0.5);
  border-radius: 4px 4px 0px 0px;
  cursor: pointer;
`;

const ArrowIcon = styled.div((props: any) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: `10px`,
  height: `6.25px`,
  margin: "auto 15px",
  transition: "0.5s",
  backgroundImage: "url(./icons/Arrow_down.png)",
  transform: `rotate(${props.isOpened ? "180deg" : "0"})`,
}));

const ChannelLogo = styled.div((props: any) => ({
  backgroundImage: `url(./icons/channel-logo.png)`,
  width: "36px",
  height: "36px",
  backgroundColor: "#FF9602",
  margin: "0 16px 14px 28px",
}));

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
