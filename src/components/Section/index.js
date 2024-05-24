import styled from "styled-components";

export const Section = styled.section`
  max-width: 1216px;
  max-height: 404px;
  padding: 32px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
`;

export const Headline = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin-top: 0px;
  margin-left: 24px;
  color: ${({ theme }) => theme.color.mineShaft};
`;

export const List = styled.ul`
  padding-inline-start: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const Item = styled.li`
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 5%;
  padding: 4px;
  color: ${({ theme }) => theme.color.slateGrey};
`;
