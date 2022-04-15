import { useEffect, useState } from "react";
import { ReactElement } from "react";
import styled from "styled-components";
import BudgetSettings from "./channel-budget/budget-settings";
import BudgetBreakdown from "./channel-budget/budget-breakdown";
import Dots from "./channel-dots";
import { useAppDispatch } from "store/hooks";
import {
  IChannel,
  removeChannel,
  setChannelName,
  setCollapse,
} from "reducers/channel-list.slice";
import { setId } from "reducers/channel.slice";

export default function Channel(props: { chan: IChannel }): ReactElement {
  const [isOpened, setIsOpened] = useState(props.chan.isOpened);
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(props.chan.name);
  const dispatch = useAppDispatch();

  const handleOpen = () => {
    setIsEdit(false);
    dispatch(setId(props.chan.id));
    if (isOpened) {
      setIsOpened(false);
      dispatch(setCollapse(props.chan.id));
    } else {
      setIsOpened(true);
      dispatch(setCollapse(props.chan.id));
    }
  };
  
  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleChange = (e: any) => {
    setName(e.target.value);
    if (e.target.value.length > 0) {
      dispatch(setChannelName({ id: props.chan.id, name: e.target.value }));
    }
  };

  useEffect(() => {
    setIsOpened(props.chan.isOpened);
  }, [props.chan.isOpened]);
  return (
    <>
      <ChannelWrapper onClick={handleOpen}>
        {/* @ts-ignore */}
        <ArrowIcon isOpened={isOpened} />
        <ChannelLogo />
        {!isEdit && <ChannelName> {props.chan.name}</ChannelName>}
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
        {/* @ts-ignore */}
        {isOpened && (
          <Dots
            onEdit={handleEdit}
            onRemove={() => dispatch(removeChannel(props.chan.id))}
          />
        )}
      </ChannelWrapper>
      {isOpened && (
        <ChannelExpanded onClick={() => setIsEdit(false)}>
          <BudgetSettings
            settings={{
              amount: props.chan.amount,
              allocation: props.chan.allocation,
              frequency: props.chan.frequency,
              breakdown: props.chan.breakdown,
            }}
          />
          <BudgetBreakdown
            breakdown={props.chan.breakdown}
            allocation={props.chan.allocation}
            amount={props.chan.amount}
          />
        </ChannelExpanded>
      )}
    </>
  );
}

const NameInput = styled.input`
  width: 160px;
  height: 40px;
  left: 106px;
  top: 622px;
  background: linear-gradient(360deg, #fafafc 0%, #ffffff 100%);
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 3px;
  padding-left: 8px;
`;

const ChannelExpanded = styled.div((props: any) => ({
  width: `1340px`,
  height: `581px`,
  margin: "0 auto",
  border: "1px solid rgba(178, 187, 213, 0.5)",
  borderRadius: "0px 0px 4px 4px",
}));

const ChannelWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: flex-start;
  width: 1340px;
  height: 52px;
  margin: 0 auto;
  justify-content: flex-start;
  background: #f6f7fb;
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
  backgroundSize: 'cover',
  width: "36px",
  height: "36px",
  margin: "auto 15px",
}));

const ChannelName = styled.div`
  display: flex;
  align-items: center;
  max-width: 300px;
  height: 21px;
  left: 153px;
  top: 307px;
  margin: auto 0;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */
  color: #222a41;
`;
