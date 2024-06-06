import { Container } from "./components/Container";
import {
  Button,
  Caption,
  Content,
  Hero,
  Image,
  LeadParagraph,
  Title,
} from "./components/Header";
import { Headline, Item, List, Section } from "./components/Section/styled";
import { Icon, TextIcon } from "./components/Icon";
import { Portfolio } from "./features/PersonalHomepage/Portfolio";
import { EndSection } from "./components/End";
import Poster from "./images/Poster.jpg";
import Rocket from "./images/Rocket.png";
import Message from "./images/Message.png";
import Human from "./images/Human.png";
import Laptop from "./images/Laptop.png";
import { email } from "./features/PersonalHomepage/email";
import { MySkills } from "./features/PersonalHomepage/MySkills";

function App() {
  return (
    <Container>
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
      <MySkills />
      <Section>
        <Headline>
          What I want to learn next <Icon src={Rocket} alt="" />{" "}
        </Headline>
        <List>
          <Item>React Context</Item>
          <Item>Node.js</Item>
          <Item>Cypress</Item>
          <Item>Unit testing</Item>
          <Item>TypeScript</Item>
          <Item>JS classes</Item>
        </List>
      </Section>
      <Portfolio />
      <EndSection />
    </Container>
  );
}

export default App;
