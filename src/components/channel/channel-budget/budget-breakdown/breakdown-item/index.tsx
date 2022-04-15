import { ReactElement, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { setChannelBreakdown } from "reducers/channel-list.slice";
import { setAmount, setBreakdown } from "reducers/channel.slice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import styled from "styled-components";

export default function BreakdownItem(props: {
  allocation: string;
  month: string;
  amount?: number;
  onChange: any;
  quarterName?: string;
}): ReactElement {
  const [value, setValue] = useState(props.amount);
  const { allocation, id } = useAppSelector((state) => state.channel);

  const dispatch = useAppDispatch();

  const handleChange = (e: any) => {
    const newValue = Number(e.target.value.split(",").join(""));
    const newBreakdown = { name: props.month, value: newValue };
    setValue(newValue);
    dispatch(setBreakdown(newBreakdown));
    dispatch(setChannelBreakdown({ id, breakdown: newBreakdown }));
    props.onChange(newBreakdown);
  };

  useEffect(() => {
    setValue(props.amount);
  }, [props.amount]);

  return (
    <ItemWrapper>
      <Month>
        {props.quarterName || props.month} {`${new Date().getFullYear()}`}
      </Month>
      {allocation === "Manual" && (
        <ItemValue
          isNumericString={true}
          allowNegative={false}
          thousandSeparator={true}
          disabled={props.allocation === "Equal"}
          onChange={handleChange}
          value={value}
        />
      )}
      {allocation === "Equal" && (
        <ItemValue
          disabled={props.allocation === "Equal"}
          onChange={handleChange}
          value={value}
          isNumericString={true}
          allowNegative={false}
          thousandSeparator={true}
        />
      )}
      <Currency>$</Currency>
    </ItemWrapper>
  );
}

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 160px;
  margin: 12px;
  position: relative;
`;

const Month = styled.div`
  width: 160px;
  height: 21px;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  color: #2f3b66;
`;

const ItemValue = styled(NumberFormat)`
  width: 160px;
  height: 40px;
  left: 106px;
  top: 622px;
  background: linear-gradient(360deg, #fafafc 0%, #ffffff 100%);
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 3px;
  padding-left: 33px;
`;

const Currency = styled.div`
  position: absolute;
  width: 9px;
  height: 21px;
  left: 16px;
  top: 30px;

  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 150% */

  color: #2a3558;
`;
