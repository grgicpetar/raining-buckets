import styled from "styled-components/macro";

export const StatsTitle = styled.p`
  flex: 1 0 0;
  text-align: center;
  letter-spacing: 1px;
  font-size: 22px;
  padding: 5px 0px;
  border-radius: 5px;
  font-weight: bold;
  border: 2px solid #ff5e24;
  font-weight: bold;
  width: 50%;
  margin: 30px auto;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const StatsText = styled.p`
  font-size: 20px;
  text-align: center;
  margin: 10px 0px;
  font-weight: bold;
  letter-spacing: 1px;
`;
