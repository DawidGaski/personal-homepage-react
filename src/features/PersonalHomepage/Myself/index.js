import {
  Hero,
  Content,
  Caption,
  Title,
  LeadParagraph,
  Button,
  Image,
} from "../../../components/Header/styled";
import { Icon, TextIcon } from "../../../components/Icon/styled";
import { email } from "../email";
import Human from "../../../images/Human.png";
import Message from "../../../images/Message.png";
import Laptop from "../../../images/Laptop.png";
import Poster from "../../../images/Poster.jpg";

export const Myself = () => (
  <Hero>
    <Image src={Poster} alt="" />
    <Content>
      <Caption>THIS IS</Caption>
      <Title>Dawid Gałęski</Title>
      <LeadParagraph>
        {" "}
        <TextIcon src={Human} alt="" /> <TextIcon src={Laptop} alt="" />
        I’m a passionate Frontend Developer in love with React, currently
        looking for new job opportunities.
      </LeadParagraph>
      <Button href={`mailto:${email}`} title={email}>
        <Icon src={Message} alt="" />
        Hire Me
      </Button>
    </Content>
  </Hero>
);
