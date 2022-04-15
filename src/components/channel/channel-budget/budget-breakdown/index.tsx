import { ReactElement, useEffect } from "react";
import styled from "styled-components";
import BreakdownItem from "./breakdown-item";
import { QUARTERS } from "shared/constatns";
import { useAppDispatch, useAppSelector } from "store/hooks";
import {
  setChannelAmount,
  setChannelBreakdown,
} from "reducers/channel-list.slice";
import { setBreakdown } from "reducers/channel.slice";
import { IBreakdown } from "shared/interfaces";

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

const BreakdownList = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
  flex-wrap: wrap;
`;
const BreakdownWrapper = styled.div`
  width: 1128px;
  height: 287px;
  margin: 50px 32px;
  background: #f5f6fa;
  border: 1px solid rgba(178, 187, 213, 0.5);
  border-radius: 4px;
`;

const BreakdownTitle = styled.div`
  width: 144px;
  height: 24px;
  left: 106px;
  top: 516px;
  margin: 24px 0 0 24px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  z-index: -1;
  color: #99a4c2;
`;
const BreakdownSubtitle = styled.div`
  width: 863px;
  height: 21px;
  left: 106px;
  top: 548px;
  margin: 8px 0 0 24px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  color: #99a4c2;
`;
