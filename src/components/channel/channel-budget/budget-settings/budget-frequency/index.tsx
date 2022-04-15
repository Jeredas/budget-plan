import { useState } from "react";
import { ReactElement } from "react";
import {
  setChannelFrequency,
  setСhannelAllocation,
} from "reducers/channel-list.slice";
import { setAllocation, setFrequency } from "reducers/channel.slice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import styled from "styled-components";

export default function BudgetFrequency(props: {
  frequency: string;
}): ReactElement {
  const [isOpened, setIsOpened] = useState(false);
  const [selection, setSelection] = useState(props.frequency);
  const [showTooltip, setShowTooltip] = useState(false);
  const id = useAppSelector((state) => state.channel.id);
  const dispatch = useAppDispatch();

  dispatch(setFrequency(selection));
  const handleSelect = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const frequency = (e.target as HTMLElement).innerText;
    if (frequency === "Annually") {
      dispatch(setAllocation("Equal"));
      dispatch(setСhannelAllocation({ id, allocation: "Equal" }));
    } else if (frequency === "Monthly") {
      dispatch(setAllocation("Manual"));
      dispatch(setСhannelAllocation({ id, allocation: "Manual" }));
    } else {
      dispatch(setAllocation("Equal"));
      dispatch(setСhannelAllocation({ id, allocation: "Equal" }));
    }
    setSelection(frequency);
    dispatch(setFrequency(frequency));
    dispatch(setChannelFrequency({ id, frequency: frequency }));
  };

  return (
    <BudgetFrequencyWrapper>
      <BudgetFrequencyTitle>
        Budget Frequency
        <InfoIcon
          onMouseOver={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        />
        <IconTooltip isShown={showTooltip}>
          {`
      Annually - will divide the budget into 12.
      Monthly - will assign the budget to each month.
      Quarterly - will assign the budget to each quarter.      
      `}
        </IconTooltip>
      </BudgetFrequencyTitle>
      <Dropdwon
        onClick={() => setIsOpened(!isOpened)}
        onMouseLeave={() => setIsOpened(false)}
      >
        <DropdownItem>
          {selection}
          <ArrowIcon isOpened={isOpened} />
        </DropdownItem>
        {isOpened && (
          <DropdownList>
            <DropdownItem onClick={handleSelect}>Annually</DropdownItem>
            <DropdownItem onClick={handleSelect}>Monthly</DropdownItem>
            <DropdownItem onClick={handleSelect}>Quarterly </DropdownItem>
          </DropdownList>
        )}
      </Dropdwon>
    </BudgetFrequencyWrapper>
  );
}
const IconTooltip = styled.div<{isShown:boolean}>((props: { isShown: boolean }) => ({
  position: "absolute",
  display: `${props.isShown ? "flex" : "none"}`,
  left: "55%",
  top: "-85px",
  width: "350px",
  background: "linear-gradient(360deg, #fafafc 0%, #ffffff 100%)",
  border: "1px solid rgba(178, 187, 213, 0.5)",
  cursor: "pointer",
  margin: "20px",
  zIndex: "1000",
}));

const InfoIcon = styled.div`
  position: absolute;
  left: 55%;
  top: calc(50% - 6px);
  width: 12px;
  height: 12px;
  background: url(./icons/info-icon.png);
  cursor: pointer;
`;
const BudgetFrequencyWrapper = styled.div`
  dispaly: flex;
  width: 226px;
  margin-right: 55px;
  flex-direction: column;
`;
const BudgetFrequencyTitle = styled.div`
  position: relative;
  display: flex;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  color: #2f3b66;
`;

const Dropdwon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: left;
  height: 40px;
  cursor: pointer;
  background: linear-gradient(360deg, #fafafc 0%, #ffffff 100%);
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 3px;
`;

const DropdownItem = styled.div`
  display: flex;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */
  position: relative;
  text-align: center;
  background: white;
  color: #2a3558;
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 3px;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
  &:hover {
    background: #f6f7fb;
  }
`;
const DropdownList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: white;
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 3px;
`;
const ArrowIcon = styled.div((props: { isOpened: boolean }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: `10px`,
  height: `6.25px`,
  transition: "0.5s",
  backgroundImage: "url(./icons/Arrow_down.png)",
  transform: `rotate(${props.isOpened ? "180deg" : "0"})`,
}));
