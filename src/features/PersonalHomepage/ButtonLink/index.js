import styled from "styled-components";

export const ButtonLink = styled.a`
  text-decoration: none;
  padding: 12px 16px;
  font-weight: 600;
  font-size: 20px;
  border: 1px solid ${({ theme }) => theme.colors.iron};
  color: ${({ theme }) => theme.colors.mineShaft};
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.mineshaft};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.liteViolet};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;
