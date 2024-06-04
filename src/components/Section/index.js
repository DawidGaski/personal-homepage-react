import styled from "styled-components";

export const Section = styled.section`
  max-width: 1216px;
  padding: 32px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 4px;
  margin-left: 14px;
  margin-right: 14px;
`;

export const Headline = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin-top: 0px;
  margin-left: 16px;
  color: ${({ theme }) => theme.color.mineShaft};
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
  }
`;

export const List = styled.ul`
  margin-left: 32px;
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
  letter-spacing: 5%;
  padding: 4px;
  color: ${({ theme }) => theme.color.slateGrey};
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }
`;

export const Icon = styled.img`
  vertical-align: middle;
  margin-left: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 16px;
  }
`;
