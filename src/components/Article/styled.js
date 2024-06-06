import styled from "styled-components";

export const Article = styled.article`
  width: auto;
  height: auto;
  margin-left: 14px;
  margin-right: 14px;
`;

export const ArticleHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArticleHeadline = styled.h2`
  font-size: 30px;
  font-weight: 900;
  margin-top: 12px;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.mineShaft};
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 24px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 18px;
  }
`;

export const ArticleHeadlineParagraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-top: 0px;
  color: ${({ theme }) => theme.color.mineShaft};
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
  }
`;
