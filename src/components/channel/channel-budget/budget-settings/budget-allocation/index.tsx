import { useEffect, useState } from "react";
import { ReactElement } from "react";
import { setAllocation, setBreakdownList } from "reducers/channel.slice";
import { setChannelAllocation } from "reducers/channel-list.slice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { activeInput, disabledInput, MONTHS, QUARTERS } from "shared/constatns";
import { IBreakdown } from "shared/interfaces";
import {
  BaselineBudgetTitle,
  InfoIcon,
  IconTooltip,
  AllocationSwitch,
  AlloacationOption,
  BudgetAllocationWrapper,
} from "./style";

export default function BudgetAllocation(props: {
  allocation: string;
}): ReactElement {
  const [selection, setSelection] = useState(props.allocation);
  const [showTooltip, setShowTooltip] = useState(false);
  const dispatch = useAppDispatch();
  const { id, allocation, frequency } = useAppSelector(
    (state) => state.channel
  );
  const handleSwitch = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const value = e.target as HTMLElement;
    let breakdown: IBreakdown[] = MONTHS;
    if (frequency === "Quarterly") {
      breakdown = QUARTERS;
    }
    setSelection(value.innerText);
    dispatch(setBreakdownList(breakdown));
    dispatch(setAllocation(value.innerText));
    dispatch(setChannelAllocation({ id, allocation: value.innerText }));
  };

  useEffect(() => {
    setSelection(props.allocation);
  }, [allocation, props.allocation]);

  return (
    <BudgetAllocationWrapper>
      <BaselineBudgetTitle>
        Budget Allocation
        <InfoIcon
          onMouseOver={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        />
        <IconTooltip isShown={showTooltip}>
          {`
      "Equal" - Adding an amount to “Baseline budget”, should fill the “Budget Breakdown” fields and be divided equally.
      
      "Manual" - The “Baseline budget” should become the sum of all the “Budget Breakdown” fields.

      `}
        </IconTooltip>
      </BaselineBudgetTitle>
      {/* <BudgetInput value={value} type={'checkbox'} onChange={handleChange} /> */}
      <AllocationSwitch>
        <AlloacationOption
          style={selection === "Equal" ? activeInput : disabledInput}
          onClick={handleSwitch}
        >
          Equal
        </AlloacationOption>
        <AlloacationOption
          style={selection === "Manual" ? activeInput : disabledInput}
          onClick={handleSwitch}
        >
          Manual
        </AlloacationOption>
      </AllocationSwitch>
    </BudgetAllocationWrapper>
  );
}
