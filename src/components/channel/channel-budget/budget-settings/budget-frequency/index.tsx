import { useState } from "react";
import { ReactElement } from "react";
import {
  setChannelFrequency,
  setChannelAllocation,
} from "reducers/channel-list.slice";
import { setAllocation, setFrequency } from "reducers/channel.slice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  BudgetFrequencyWrapper,
  BudgetFrequencyTitle,
  InfoIcon,
  IconTooltip,
  Dropdwon,
  DropdownItem,
  ArrowIcon,
  DropdownList,
} from "./style";

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
    if (frequency === "Monthly") {
      dispatch(setAllocation("Manual"));
      dispatch(setChannelAllocation({ id, allocation: "Manual" }));
    } else {
      dispatch(setAllocation("Equal"));
      dispatch(setChannelAllocation({ id, allocation: "Equal" }));
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
