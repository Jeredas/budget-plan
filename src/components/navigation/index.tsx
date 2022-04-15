import React, { ReactElement, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink, NavWrapper } from "./style";

export default function Navigation(): ReactElement {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState("");

  useEffect(() => {
    setIsActive(document.location.pathname);
  }, [isActive]);

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
};
