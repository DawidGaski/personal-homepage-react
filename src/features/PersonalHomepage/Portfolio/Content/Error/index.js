import { ButtonLink } from "../../../ButtonLink";
import { githubUsername } from "../../githubUsername";
import { Header, Paragraph, Wrapper } from "./styled";
import { ReactComponent as Danger } from "./Danger.svg";

export const Error = () => (
  <Wrapper>
    <Danger />
    <Header> Ooops! Something went&nbsp;wrong...</Header>
    <Paragraph>
      Sorry, failed to load Github&nbsp;projects.
      <br />
      You can check them directly&nbsp;on&nbsp;Github.
    </Paragraph>
    <ButtonLink href={`https://github.com/${githubUsername}`} target="_blank">
      Go to Github
    </ButtonLink>
  </Wrapper>
);
