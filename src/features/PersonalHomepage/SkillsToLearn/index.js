import {
  Section,
  Headline,
  List,
  Item,
} from "../../../components/Section/styled";
import { Icon } from "../../../components/Icon/styled";
import Rocket from "../../../images/Rocket.png";

export const SkillsToLearn = () => (
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
);
