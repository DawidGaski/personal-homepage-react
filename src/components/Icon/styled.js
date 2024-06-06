import styled from "styled-components";

export const Icon = styled.img`
  vertical-align: middle;
  margin-left: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 16px;
  }
`;

export const TextIcon = styled.img`
  vertical-align: middle;
  width: 20px;
  height: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    height: 16px;
  }
`;
