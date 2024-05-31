import styled from "styled-components";

export const End = styled.section`
  width: 691px;
  height: 281px;
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
  color: ${({ theme }) => theme.color.slateGrey};
`;

export const EndTitle = styled.h1`
  font-size: 32px;
  font-weight: 900;
  color: ${({ theme }) => theme.color.mineShaft};
`;

export const EndParagraph = styled.p`
  font-size: 18 px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.mineShaft};
`;
