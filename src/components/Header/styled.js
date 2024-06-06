import styled from "styled-components";

export const Hero = styled.article`
  max-width: 1089px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 66px;
  margin-left: 16px;
  margin-right: 32px;
  border: 1px, ${({ theme }) => theme.color.liteIron};
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 380px;
  height: 380px;
  border-radius: 50%;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: 254px;
    height: 254px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: 128px;
    height: 128px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    width: auto;
    height: auto;
    margin-right: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    width: auto;
    height: auto;
    margin-right: 32px;
  }
`;

export const Caption = styled.header`
  font-size: 12px;
  font-weight: 700;
  line-height: 15.6px;
  color: ${({ theme }) => theme.color.slateGrey};
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 5%;
  line-height: 45.99px;
  color: ${({ theme }) => theme.color.mineShaft};
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 22px;
  }
`;

export const LeadParagraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 5%;
  line-height: 28px;
  color: ${({ theme }) => theme.color.slateGrey};
  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Button = styled.a`
  text-decoration: none;
  transition: box-shadow 0.3s;
  font-size: 20px;
  width: 154px;
  height: 49px;
  border: 1px solid ${({ theme }) => theme.color.iron};
  border-radius: 4px;
  padding: 12px 16px;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.scienceBlue};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.color.liteViolet};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.tabletMax}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
    font-size: 16px;
    width: 138px;
    height: 46px;
  }
`;
