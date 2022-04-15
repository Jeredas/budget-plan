import { useEffect, useState } from "react";
import { ReactElement } from "react";
import { setChannelAmount } from "reducers/channel-list.slice";
import { setAmount } from "reducers/channel.slice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import styled from "styled-components";
import NumberFormat from "react-number-format";
import { IBreakdown } from "shared/interfaces";
import { QUARTERS } from "shared/constatns";

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

const IconTooltip = styled.div<{isShown:boolean}>((props:{isShown:boolean}) => ({
  position: "absolute",
  display: `${props.isShown ? "flex" : "none"}`,
  left: "60%",
  top: "-25px",
  width: "300px",
  background: "linear-gradient(360deg, #fafafc 0%, #ffffff 100%)",
  border: "1px solid rgba(178, 187, 213, 0.5)",
  cursor: "pointer",
  margin: "20px",
  zIndex: "1000",
}));

const InfoIcon = styled.div`
  position: absolute;
  left: 75%;
  top: calc(50% - 6px);
  width: 12px;
  height: 12px;
  background: url(./icons/info-icon.png);
  cursor: pointer;
`;

const BaselineBudgetWrapper = styled.div`
  dispaly: flex;
  width: 237px;
  margin: 0 55px 0 0;
  flex-direction: column;
`;

const BaselineBudgetTitle = styled.div`
  position: relative;
  display: flex;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #2a3558;
`;

const BudgetInput = styled(NumberFormat)`
  display: flex;
  width: 237px;
  align-items: left;
  height: 40px;
  cursor: pointer;
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 3px;
  padding: 0 10px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */
`;
