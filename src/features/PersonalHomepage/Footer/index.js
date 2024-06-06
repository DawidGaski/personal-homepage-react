import {
  End,
  EndCaption,
  EndTitle,
  EndParagraph,
} from "../../../components/End/styled";
import { email } from "../email";
import { Icon } from "../../../components/Icon/styled";
import { SocialIcons } from "./SocialLinks/index";
import Hand from "./../../../images/Hand.png";

export const Footer = () => (
  <End>
    <EndCaption>LET'S TALK</EndCaption>
    <EndTitle href={`mailto:${email}`} title={email}>
      dawidgaski@gmail.com
    </EndTitle>
    <EndParagraph>
      I’m always open to new projects whenever I have the time. If you have a
      website, dashboard or mobile app in mind and need some help to make your
      ideas come to life, feel free to contact me. <Icon src={Hand} alt="" />
    </EndParagraph>
    <SocialIcons />
  </End>
);
