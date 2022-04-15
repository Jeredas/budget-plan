import { ReactElement, useState } from "react";
import { IBreakdown } from "shared/interfaces";
import { useAppSelector } from "store/hooks";
import styled from "styled-components";
import BaselineBudget from "./baseline-budget";
import BudgetAllocation from "./budget-allocation";
import BudgetFrequency from "./budget-frequency";

export default function BudgetSettings(props: {
  settings: {
    frequency: string;
    amount: number;
    allocation: string;
    breakdown: IBreakdown[];
  };
}): ReactElement {
  const [value, setValue] = useState(props.settings.amount);
  const { amount } = useAppSelector((state) => state.channel);
  const handleChange = (value: number) => {
    setValue(value);
  };

  return (
    <BudgetSettingsWrapper>
      <BudgetFrequency frequency={props.settings.frequency} />
      {props.settings.allocation === "Equal" && (
        <BaselineBudget
          amount={value}
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

const BudgetSettingsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 1128px;
  margin: 40px 0 0 32px;
`;
