import styled from "styled-components";

export const End = styled.section`
  max-width: 691px;
  max-height: 281px;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    margin-left: 16px;
    margin-right: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    margin-left: 16px;
    margin-right: 16px;
  }
`;

export const EndCaption = styled.header`
  font-size: 12px;
  font-weight: 700;
  padding-bottom: 24px;
  color: ${({ theme }) => theme.color.slateGrey};
`;

export const EndTitle = styled.a`
  text-decoration: none;
  font-size: 32px;
  font-weight: 900;
  color: ${({ theme }) => theme.color.mineShaft};

  &:hover {
    color: ${({ theme }) => theme.color.scienceBlue};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
  }
`;

export const EndParagraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.mineShaft};
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 14px;
  }
`;
