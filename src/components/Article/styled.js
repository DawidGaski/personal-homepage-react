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

export const ArticleList = styled.ul`
  padding-inline-start: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin: 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const ArticleParagraph = styled.p`
  margin: 0;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.mineShaft};
  box-shadow: 0px 16px 58px 0px ${({ theme }) => theme.color.liteViolet},
    0px -2px 50px 0px ${({ theme }) => theme.color.veryLiteViolet};
`;
