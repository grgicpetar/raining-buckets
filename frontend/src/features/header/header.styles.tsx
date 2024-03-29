import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
  height: 50px;
  background-color: black;
`;

export const Wrapper = styled.div`
  margin: 0px 15% auto;
  line-height: 50px;
`;

export const HeaderText = styled(Link)`
  margin: 0;
  font-size: 25px;
  text-decoration: none;
  color: #e9e6e2;
`;
