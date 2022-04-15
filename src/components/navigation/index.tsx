import React, { ReactElement, useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Navigation(): ReactElement {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    setIsActive(document.location.pathname);
  }, [document.location.pathname]);

  const switchTabs = (route: string) => {
    navigate("/tab1");
    setIsActive(route);
  };
  return (
    <NavWrapper>
      <NavLink
        style={{
          borderBottom: `${
            isActive === "/tab1" ? "3px solid #000000" : "none"
          }`,
        }}
        to="/tab1"
        onClick={() => switchTabs("/tab1")}
      >
        Tab 1
      </NavLink>
      <NavLink
        style={{
          borderBottom: `${
            isActive === "/tab2" ? "3px solid #000000" : "none"
          }`,
        }}
        to="/tab2"
        onClick={() => switchTabs("/tab2")}
      >
        Tab 2
      </NavLink>
    </NavWrapper>
  );
}
const NavWrapper = styled.div`
  display: flex;
  max-width: 1340px;
  width: 100%;
  margin: 50px;
`;
const NavLink = styled(Link)`
  border-bottom: 3px solid #000000;
  padding-bottom: 10px;
  width: 51px;
  height: 16px;
  text-decoration: none;
  font-family: "Avenir Next";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 16px;
  /* identical to box height, or 80% */
  margin: 0 26px 40px 0;
  color: #000000;
  &:active {
    color: red;
  }
`;
