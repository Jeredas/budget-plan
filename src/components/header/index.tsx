import React, { ReactElement } from "react";
import { addChannel, setChannelIsOpened } from "reducers/channel-list.slice";
import { setId } from "reducers/channel.slice";
import { MONTHS } from "shared/constatns";
import { useAppDispatch } from "store/hooks";
import { v4 } from "uuid";
import {
  HeaderWrapper,
  Title,
  SetupWrapper,
  SetupTitle,
  SetupSubtitle,
  AddChannel,
} from "./style";

export default function Header(): ReactElement {
  const dispatch = useAppDispatch();
  const handleChannelAdd = () => {
    const uuid = v4();
    const newChannel = {
      id: uuid,
      name: "New Channel",
      allocation: "Equal",
      frequency: "Annualy",
      breakdown: MONTHS,
      isOpened: false,
      amount: 0,
    };
    dispatch(addChannel(newChannel));
    dispatch(setId(newChannel.id));
    dispatch(setChannelIsOpened(newChannel.id));
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
        <AddChannel onClick={handleChannelAdd}>+ Add Channel </AddChannel>
      </SetupWrapper>
    </HeaderWrapper>
  );
}
