import styled from "styled-components";

export const Hero = styled.header`
  margin-top: -100px;
  max-width: 1089px;
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  grid-gap: 66px;
  margin-left: 16px;
  margin-right: 32px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    grid-gap: 32px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-template-columns: 1fr;
    grid-gap: 12px;
  }
`;

export const Image = styled.img`
  width: 30vw;
  max-width: 384px;
  border-radius: 50%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 132px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    width: auto;
    height: auto;
    margin-right: 32px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: auto;
    height: auto;
    margin-right: 32px;
  }
`;

export const Caption = styled.div`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: initial;
`;

export const Title = styled.h1`
  font-size: 38px;
  font-weight: 900;
  letter-spacing: 5%;
  line-height: 45.99px;
  color: ${({ theme }) => theme.colors.textPrimary};
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 30px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 22px;
  }
`;

export const LeadParagraph = styled.p`
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 5%;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.site.text};
  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Button = styled.a`
  text-decoration: none;
  transition: box-shadow 0.3s;
  font-size: 20px;
  width: 154px;
  height: 49px;
  border: 1px solid ${({ theme }) => theme.colors.buttonLink.border};
  border-radius: ${({ theme }) => theme.borderRadiusSmall};
  padding: 12px 16px;
  color: ${({ theme }) => theme.colors.buttonLink.text};
  background: ${({ theme }) => theme.colors.primary};
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 10px;

  &:hover {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.buttonLink.shadow};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletVerticalMax}px) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    width: 138px;
    height: 46px;
  }
`;
