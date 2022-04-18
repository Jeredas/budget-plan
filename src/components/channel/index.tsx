import { useEffect, useState } from "react";
import React, { ReactElement } from "react";
import BudgetSettings from "./channel-budget/budget-settings";
import BudgetBreakdown from "./channel-budget/budget-breakdown";
import Dots from "./channel-dots";
import { useAppDispatch } from "store/hooks";
import {
  removeChannel,
  setChannelName,
  setChannelIsOpened,
} from "reducers/channel-list.slice";
import { setId } from "reducers/channel.slice";
import { IChannel } from "shared/interfaces";
import {
  ChannelWrapper,
  ArrowIcon,
  ChannelLogo,
  ChannelName,
  NameInput,
  ChannelExpanded,
} from "./style";

export default function Channel(props: { channel: IChannel }): ReactElement {
  const [isOpened, setIsOpened] = useState(props.channel.isOpened);
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(props.channel.name);
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    setIsEdit(false);
    dispatch(setId(props.channel.id));
    setIsOpened(!!isOpened);
    dispatch(setChannelIsOpened(props.channel.id));
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (e.target.value.length > 0) {
      dispatch(setChannelName({ id: props.channel.id, name: e.target.value }));
    }
  };

  useEffect(() => {
    setIsOpened(props.channel.isOpened);
  }, [props.channel.isOpened]);
  return (
    <>
      <ChannelWrapper onClick={handleOpen}>
        <ArrowIcon isOpened={isOpened} />
        <ChannelLogo />
        {!isEdit && <ChannelName> {props.channel.name}</ChannelName>}
        {isEdit && isOpened && (
          <ChannelName>
            <NameInput
              value={name}
              onBlur={() => setIsEdit(false)}
              onChange={handleChange}
              onClick={(e) => e.stopPropagation()}
            />
          </ChannelName>
        )}
        {isOpened && (
          <Dots
            onEdit={handleEdit}
            onRemove={() => dispatch(removeChannel(props.channel.id))}
          />
        )}
      </ChannelWrapper>
      {isOpened && (
        <ChannelExpanded onClick={() => setIsEdit(false)}>
          <BudgetSettings
            settings={{
              amount: props.channel.amount,
              allocation: props.channel.allocation,
              frequency: props.channel.frequency,
              breakdown: props.channel.breakdown,
            }}
          />
          <BudgetBreakdown
            breakdown={props.channel.breakdown}
            allocation={props.channel.allocation}
            amount={props.channel.amount}
          />
        </ChannelExpanded>
      )}
    </>
  );
}
