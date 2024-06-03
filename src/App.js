import { Container } from "./components/Container";
import { End, EndCaption, EndParagraph, EndTitle } from "./components/End";
import {
  Button,
  Caption,
  Content,
  Hero,
  Image,
  LeadParagraph,
  Title,
} from "./components/Header";
import { Headline, Item, List, Section } from "./components/Section";
import { Portfolio } from "./features/PersonalHomepage/Portfolio";
import Poster from "./images/Poster.jpg";

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
            I'm a passionate Frontend Developer in love with React, currently
            looking for new job opportunities.
          </LeadParagraph>
          <Button> Hire Me</Button>
        </Content>
      </Hero>
      <Section>
        <Headline>My skillset includes</Headline>
        <List>
          <Item>HTML</Item>
          <Item>Teamwork</Item>
          <Item>Markdown</Item>
          <Item>CSS Bem Convention</Item>
          <Item>CSS Flexbox</Item>
          <Item>Css Grid</Item>
          <Item>Immutability</Item>
          <Item>React</Item>
          <Item>Redux</Item>
          <Item>HTML</Item>
          <Item>Teamwork</Item>
          <Item>Markdown</Item>
          <Item>CSS Bem Convention</Item>
          <Item>CSS Flexbox</Item>
          <Item>Css Grid</Item>
          <Item>Immutability</Item>
          <Item>React</Item>
          <Item>Redux</Item>
          <Item>HTML</Item>
          <Item>Teamwork</Item>
          <Item>Markdown</Item>
          <Item>CSS Bem Convention</Item>
          <Item>CSS Flexbox</Item>
          <Item>Css Grid</Item>
          <Item>Immutability</Item>
          <Item>React</Item>
          <Item>Redux</Item>
        </List>
      </Section>
      <Section>
        <Headline>What I want to learn next</Headline>
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
      <End>
        <EndCaption>LET'S TALK</EndCaption>
        <EndTitle>dawidgaski@gmail.com</EndTitle>
        <EndParagraph>
          I’m always open to new projects whenever I have the time. If you have
          a website, dashboard or mobile app in mind and need some help to make
          your ideas come to life, feel free to contact me
        </EndParagraph>
      </End>
    </Container>
  );
}

export default App;
