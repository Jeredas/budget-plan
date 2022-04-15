import { useEffect, useState } from "react";
import { ReactElement } from "react";
import {
  IBreakdown,
  setAllocation,
  setBreakdown,
  setBreakdownList,
} from "reducers/channel.slice";
import { setСhannelAllocation } from "reducers/channel-list.slice";
import { useAppDispatch, useAppSelector } from "store/hooks";
import styled from "styled-components";
import { MONTHS, QUARTERS } from "shared/constatns";

export default function BudgetAllocation(props: {
  allocation: string;
}): ReactElement {
  const [selection, setSelection] = useState(props.allocation);
  const [showTooltip,setShowTooltip] = useState(false);
  const dispatch = useAppDispatch();
  const { id, allocation } = useAppSelector((state) => state.channel);
  const handleSwitch = (e: any) => {
    let breakdown: IBreakdown[];
    if (allocation === "Quarterly") {
      breakdown = QUARTERS;
    }
    setSelection(e.target.innerText);
    dispatch(setBreakdownList(MONTHS));
    dispatch(setAllocation(e.target.innerText));
    dispatch(setСhannelAllocation({ id, allocation: e.target.innerText }));
  };

  useEffect(() => {
    setSelection(props.allocation);
  }, [allocation]);

  return (
    <BudgetAllocationWrapper>
      <BaselineBudgetTitle>
        Budget Allocation
          {/* @ts-ignore */}
      <InfoIcon  onMouseOver={()=>setShowTooltip(true)} onMouseLeave={()=>setShowTooltip(false)}/>
      {/* @ts-ignore */}
      <IconTooltip isShown={showTooltip} > {`
      "Equal" - Adding an amount to “Baseline budget”, should fill the “Budget Breakdown” fields and be divided equally.
      
      "Manual" - The “Baseline budget” should become the sum of all the “Budget Breakdown” fields.

      `}</IconTooltip>
      </BaselineBudgetTitle>
      {/* <BudgetInput value={value} type={'checkbox'} onChange={handleChange} /> */}
      <AllocationSwitch>
        <AlloacationOption
          style={
            selection === "Equal"
              ? { background: "white", color: "#2a3558" }
              : { background: "#F5F6FA", color: "#707EA7" }
          }
          onClick={handleSwitch}
        >
          Equal
        </AlloacationOption>
        <AlloacationOption
          style={
            selection === "Manual"
              ? { background: "white", color: "#2a3558" }
              : { background: "#F5F6FA", color: "#707EA7" }
          }
          onClick={handleSwitch}
        >
          Manual
        </AlloacationOption>
      </AllocationSwitch>
    </BudgetAllocationWrapper>
  );
}
//@ts-ignore
const IconTooltip = styled.div((props:any)=>({
  position: 'absolute',
  display: `${props.isShown? 'flex':'none'}`,
  left: '55%',
  top: '-85px',
  width: '350px',
  background: 'linear-gradient(360deg, #fafafc 0%, #ffffff 100%)',
  border: '1px solid rgba(178, 187, 213, 0.5)',
  cursor: 'pointer',
  margin: '20px',
  zIndex: '1000',
}))

const InfoIcon = styled.div`
  position: absolute;
  left: 65%;
  top: calc(50% - 6px);
  width: 12px;
  height: 12px;
  background: url(./icons/info-icon.png);
  cursor: pointer;
`;

const AllocationSwitch = styled.div`
  display: flex;
  width: 184px;
`;

const AlloacationOption = styled.div`
  display: flex;
  width: 89px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(360deg, #fafafc 0%, #ffffff 100%);
  border: 1px solid rgba(178, 187, 213, 0.5);
  box-sizing: border-box;
  box-shadow: 0px 1px 2px #e6e8f0;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  /* identical to box height, or 150% */

  text-align: center;

  color: #2a3558;
  &:hover {
    background: #f6f7fb;
  }
`;

const BudgetAllocationWrapper = styled.div`
  dispaly: flex;
  width: 184px;
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
  color: #2f3b66;
`;