import styled from "styled-components";

export const End = styled.section`
  max-width: 691px;
  max-height: 281px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    margin-left: 16px;
    margin-right: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const EndCaption = styled.header`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: initial;
  font-weight: 700;
  padding-bottom: 24px;
`;

export const EndTitle = styled.a`
  text-decoration: none;
  font-size: 32px;
  font-weight: 900;
  transition: color 0.3s;
  color: ${({ theme }) => theme.colors.textPrimary};

  &:hover {
    color: ${({ theme }) => theme.colors.Primary};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 18px;
  }
`;

export const EndParagraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.textPrimary};
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;
