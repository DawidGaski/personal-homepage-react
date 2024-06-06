import {
  Section,
  Headline,
  List,
  Item,
} from "../../../components/Section/styled";
import { Icon } from "../../../components/Icon/styled";
import Rocket from "../../../images/Rocket.png";
import { ReactComponent as Ellipse } from "../../../images/Ellipse 36.svg";

export const SkillsToLearn = () => (
  <Section>
    <Headline>
      What I want to learn next <Icon src={Rocket} alt="" />{" "}
    </Headline>
    <List>
      <Item>
        {" "}
        <Ellipse /> React Context
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Node.js
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Cypress
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Unit testing
      </Item>
      <Item>
        {" "}
        <Ellipse />
        TypeScript
      </Item>
      <Item>
        {" "}
        <Ellipse />
        JS classes
      </Item>
    </List>
  </Section>
);
