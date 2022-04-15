import React, { ReactElement } from "react";
import { addChannel, setCollapse } from "reducers/channel-list.slice";
import { setId } from "reducers/channel.slice";
import { MONTHS } from "shared/constatns";
import { useAppDispatch } from "store/hooks";
import styled from "styled-components";

export default function Header(): ReactElement {
  const dispatch = useAppDispatch();
  const handleChannellAdd = () => {
    const newChannel = {
      id: `${Date.now()}`,
      name: "New Channel",
      allocation: "Equal",
      frequency: "Annualy",
      breakdown: MONTHS,
      isOpened: false,
      amount: 12000,
    }
    dispatch(addChannel(newChannel))
    dispatch(setId(newChannel.id))
    dispatch(setCollapse(newChannel.id))
  };
  return (
    <HeaderWrapper>
      <Title>Build your budget plan</Title>
      <SetupWrapper>
        <SetupTitle>Setup channels</SetupTitle>
        <SetupSubtitle>
          Setup your added channels by adding baseline budgets out of your total
          budget. See the forecast impact with the help of tips and insights.
        </SetupSubtitle>
        <AddChannel onClick={handleChannellAdd}>+ Add Channel </AddChannel>
      </SetupWrapper>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  max-width: 1340px;
  width: 100%;
  margin: 50px 50px 16px 50px;
`;

const Title = styled.h1`
  width: 250px;
  height: 33px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 33px;
  /* identical to box height */
  letter-spacing: -0.2px;
  color: #182033;
`;

const SetupWrapper = styled.div`
  width: 100%;
  marign: 0 auto;
  display: grid;
  grid-template:
    "st st"
    "ss ac";
  justify-content: space-between;
`;

const SetupTitle = styled.div`
  grid-area: st;
  width: 127px;
  height: 25px;
  left: 50px;
  top: 99px;

  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  /* identical to box height */

  color: #182033;
`;

const SetupSubtitle = styled.div`
  grid-area: ss;
  width: 678px;
  height: 42px;

  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */

  color: #99a4c2;
`;

const AddChannel = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ac;
  width: 123px;
  height: 40px;

  background: linear-gradient(360deg, #fafafc 0%, #ffffff 100%);
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 3px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  /* identical to box height, or 133% */
  color: #707ea7;
`;
