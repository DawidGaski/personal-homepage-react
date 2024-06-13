import {
  Section,
  Headline,
  List,
  Item,
} from "../../../components/Section/styled";
import { Icon } from "../../../components/Icon/styled";
import Tools from "../../../images/Tools.png";
import { ReactComponent as Ellipse } from "../../../images/Ellipse 36.svg";

export const MySkills = () => (
  <Section>
    <Headline>
      My skillset includes <Icon src={Tools} alt="" />
    </Headline>
    <List>
      <Item>
        {" "}
        <Ellipse />
        Semantic & Request HTML
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Markdown
      </Item>
      <Item>
        {" "}
        <Ellipse />
        CSS Bem Convention
      </Item>
      <Item>
        {" "}
        <Ellipse />
        CSS Flexbox
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Css Grid
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Immutability
      </Item>
      <Item>
        {" "}
        <Ellipse />
        JavaScript: ES6+
      </Item>
      <Item>
        {" "}
        <Ellipse />
        React
      </Item>
      <Item>
        {" "}
        <Ellipse />
        React Hooks
      </Item>
      <Item>
        {" "}
        <Ellipse />
        React Router
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Redux
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Redux-saga
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Promises, Async/Await
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Working with API (fetch, axios)
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Debbuging
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Error handling
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Git
      </Item>
      <Item>
        {" "}
        <Ellipse />
        NPM
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Responsive Web Design
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Github Pull Request & Review
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Scrum
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Trello
      </Item>
      <Item>
        {" "}
        <Ellipse />
        Teamwork
      </Item>
    </List>
  </Section>
);
