import { ReactElement } from "react";
import { useDispatch } from "react-redux";
import { setChannelAmount } from "reducers/channel-list.slice";
import { setAmount } from "reducers/channel.slice";
import { IBreakdown } from "shared/interfaces";
import { useAppSelector } from "store/hooks";
import BaselineBudget from "./baseline-budget";
import BudgetAllocation from "./budget-allocation";
import BudgetFrequency from "./budget-frequency";
import { BudgetSettingsWrapper } from "./style";

export default function BudgetSettings(props: {
  settings: {
    frequency: string;
    amount: number;
    allocation: string;
    breakdown: IBreakdown[];
  };
}): ReactElement {
  const { id, amount } = useAppSelector((state) => state.channel);
  const dispatch = useDispatch();
  const handleChange = (value: number) => {
    dispatch(setAmount(value));
    dispatch(setChannelAmount({ id, amount: value }));
  };

  return (
    <BudgetSettingsWrapper>
      <BudgetFrequency frequency={props.settings.frequency} />
      {props.settings.allocation === "Equal" && (
        <BaselineBudget
          amount={amount}
          frequency={props.settings.frequency}
          onChange={handleChange}
          breakdown={props.settings.breakdown}
        />
      )}
      {props.settings.allocation === "Manual" && (
        <BaselineBudget
          amount={amount}
          frequency={props.settings.frequency}
          onChange={handleChange}
          breakdown={props.settings.breakdown}
        />
      )}
      <BudgetAllocation allocation={props.settings.allocation} />
    </BudgetSettingsWrapper>
  );
}
