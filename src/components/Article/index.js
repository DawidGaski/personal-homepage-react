import styled from "styled-components";

export const Article = styled.article``;

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
`;

export const ArticleHeadlineParagraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin-top: 0px;
  color: ${({ theme }) => theme.color.mineShaft};
`;

export const ArticleList = styled.ul`
  padding-inline-start: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 32px;
  margin: 0;
`;

export const ArticleParagraph = styled.p`
  width: 592px;
  height: 322px;
  margin: 0;
  background: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.mineShaft};
`;
