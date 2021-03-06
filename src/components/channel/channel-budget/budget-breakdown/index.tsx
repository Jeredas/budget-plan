import { ReactElement, useEffect } from "react";
import BreakdownItem from "./breakdown-item";
import { QUARTERS } from "shared/constatns";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  setChannelAmount,
  setChannelBreakdown,
} from "reducers/channel-list.slice";
import { setBreakdown } from "reducers/channel.slice";
import { IBreakdown } from "shared/interfaces";
import {
  BreakdownWrapper,
  BreakdownTitle,
  BreakdownSubtitle,
  BreakdownList,
} from "./style";

export default function BudgetBreakdown(props: {
  allocation: string;
  amount: number;
  breakdown: IBreakdown[];
}): ReactElement {
  const { amount, frequency, id, allocation } = useAppSelector(
    (state) => state.channel
  );
  const dispatch = useAppDispatch();
  const breakdowmnList = frequency === "Quarterly" ? QUARTERS : props.breakdown;

  useEffect(() => {
    dispatch(setChannelAmount({ id, amount: props.amount }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amount]);

  const handleChange = (breakdown: any) => {
    dispatch(setBreakdown(breakdown));
    dispatch(setChannelBreakdown({ id, breakdown: breakdown }));
  };

  return (
    <BreakdownWrapper>
      <BreakdownTitle>Budget Breakdown</BreakdownTitle>
      <BreakdownSubtitle>
        By default, your budget will be equally divided throughout the year. You
        can manually change the budget allocation, either now or later.
      </BreakdownSubtitle>
      <BreakdownList>
        {frequency !== "Quarterly" &&
          allocation === "Equal" &&
          breakdowmnList.map((breakdown) => {
            return (
              <BreakdownItem
                allocation={props.allocation}
                month={breakdown.name}
                amount={props.amount / breakdowmnList.length}
                onChange={handleChange}
                key={breakdown.name}
              />
            );
          })}
        {frequency === "Quarterly" &&
          allocation === "Equal" &&
          breakdowmnList.map((breakdown) => {
            return (
              <BreakdownItem
                allocation={props.allocation}
                month={breakdown.name}
                amount={props.amount / breakdowmnList.length}
                onChange={handleChange}
                key={breakdown.name}
              />
            );
          })}
        {frequency !== "Quarterly" &&
          allocation === "Manual" &&
          props.breakdown.map((breakdown) => {
            return (
              <BreakdownItem
                allocation={props.allocation}
                month={breakdown.name}
                amount={breakdown.value}
                onChange={handleChange}
                key={breakdown.name}
              />
            );
          })}

        {frequency === "Quarterly" &&
          allocation === "Manual" &&
          QUARTERS.map((breakdown, index) => {
            return (
              <BreakdownItem
                allocation={props.allocation}
                month={props.breakdown[index].name}
                quarterName={breakdown.name}
                amount={props.breakdown[index].value}
                onChange={handleChange}
                key={breakdown.name}
              />
            );
          })}
      </BreakdownList>
    </BreakdownWrapper>
  );
}
