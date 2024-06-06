import styled from "styled-components";

export const Section = styled.section`
  max-width: 1216px;
  padding: 32px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  margin-left: 14px;
  margin-right: 14px;
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.color.liteViolet},
    0px -2px 50px 0px ${({ theme }) => theme.color.veryLiteViolet};
`;

export const Headline = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin-top: 0;
  margin-left: 16px;
  padding-bottom: 17px;
  color: ${({ theme }) => theme.color.mineShaft};
  border-bottom: solid 1px ${({ theme }) => theme.color.liteIron};
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-left: 16px;
  margin-right: 32px;
  padding-inline-start: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-left: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
    margin-left: 16px;
  }
`;

export const Item = styled.li`
  font-size: 18px;
  font-weight: 400;
  padding: 4px;
  color: ${({ theme }) => theme.color.slateGrey};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 16px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }
`;
