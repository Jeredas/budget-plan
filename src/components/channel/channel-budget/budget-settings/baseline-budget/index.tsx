import { useEffect, useState } from "react";
import { ReactElement } from "react";
import { setChannelAmount } from "reducers/channel-list.slice";
import { setAmount } from "reducers/channel.slice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { IBreakdown } from "shared/interfaces";
import { QUARTERS } from "shared/constatns";
import { BaselineBudgetTitle, BaselineBudgetWrapper, BudgetInput, IconTooltip, InfoIcon } from "./style";

export default function BaselineBudget(props: {
  amount: number;
  frequency: string;
  onChange: any;
  breakdown: IBreakdown[];
}): ReactElement {
  const dispatch = useAppDispatch();
  const { id, allocation, frequency, breakdown } = useAppSelector(
    (state) => state.channel
  );
  const [value, setValue] = useState(props.amount);
  const [showTooltip, setShowTooltip] = useState(false);
  const [breakdownValue, setBreakdownValue] = useState(props.amount);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value.split(",").join(""));
    setValue(newValue);
    dispatch(setAmount(newValue));
    dispatch(setChannelAmount({ id, amount: newValue }));
  };

  useEffect(() => {
    let result = 0;
    if (frequency === "Quarterly") {
      QUARTERS.forEach((bd, index) => {
        result += props.breakdown[index].value;
      });
    } else {
      props.breakdown.forEach((bd) => {
        result += bd.value;
      });
    }
    setBreakdownValue(result);
    dispatch(setChannelAmount({ id, amount: result }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [breakdown]);
  return (
    <BaselineBudgetWrapper>
      <BaselineBudgetTitle>
        Baseline {frequency} Budget
        <InfoIcon
          onMouseOver={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        />
        <IconTooltip isShown={showTooltip}>
          {`
      Chosen budget frequency value.
      `}
        </IconTooltip>
      </BaselineBudgetTitle>
      {allocation === "Manual" && (
        <BudgetInput
          style={{
            color: "#99A4C2",
          }}
          isNumericString={true}
          disabled={true}
          value={breakdownValue}
          allowNegative={false}
          thousandSeparator={true}
          onChange={handleChange}
        />
      )}
      {allocation === "Equal" && (
        <BudgetInput
          style={{
            color: "#2A3558",
          }}
          isNumericString={true}
          disabled={false}
          value={value}
          allowNegative={true}
          thousandSeparator={true}
          onChange={handleChange}
        />
      )}
    </BaselineBudgetWrapper>
  );
}

