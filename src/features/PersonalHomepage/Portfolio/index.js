import { useEffect } from "react";
import { githubUsername } from "./githubUsername";
import { useDispatch } from "react-redux";
import { fetchRepositories } from "../../personalHomepageSlice";
import {
  Article,
  ArticleHeader,
  ArticleHeadline,
  ArticleHeadlineParagraph,
} from "../../../components/Article";
import { Content } from "./Content";
import GitLogo from "../../../images/GitLogo.png";
import { Icon } from "../../../components/Icon";

export const Portfolio = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepositories(githubUsername));
  }, [dispatch]);

  return (
    <Article>
      <ArticleHeader>
        <Icon src={GitLogo} alt="" />
        <ArticleHeadline>Portfolio</ArticleHeadline>
        <ArticleHeadlineParagraph>My recent Projects</ArticleHeadlineParagraph>
      </ArticleHeader>
      <Content />
    </Article>
  );
};
