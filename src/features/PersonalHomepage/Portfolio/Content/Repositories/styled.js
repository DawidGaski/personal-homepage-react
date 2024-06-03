import styled from "styled-components";

export const List = styled.ul`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  padding: 0;
  grid-gap: 32px;

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 24px;
  }
`;

export const Tile = styled.li`
  padding: 56px;
  margin: 0;
  background: ${({ theme }) => theme.color.liteIron};
  border: 6px solid ${({ theme }) => theme.color.iron};
  transition: border-color 0.3s;
  box-shadow: ${({ theme }) => theme.color.liteViolet};
  border-radius: 4px;

  &:hover {
    border-color: ${({ theme }) => theme.color.iron};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    padding: 20px;
  }
`;

export const Name = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.color.mineShaft};
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Description = styled.p`
  margin-top: 24px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-top: 16px;
    font-size: 14px;
  }
`;

export const Links = styled.dl`
  margin-top: 24px;
  margin-bottom: 0;
  display: grid;
  grid-gap: 8px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
    margin-top: 16px;
  }
`;

export const LinksRow = styled.div`
  display: grid;
  grid-template-columns: 4em 1fr;
`;

export const LinksValue = styled.dd`
  margin: 0;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.mineShaft};
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.liteIron};
  padding-bottom: 1px;

  &:hover {
    border-color: unset;
  }
`;
