import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavWrapper = styled.div`
  display: flex;
  max-width: 1340px;
  width: 100%;
  margin: 50px;
`;

export const NavLink = styled(Link)`
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
