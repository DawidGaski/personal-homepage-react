import { End, EndCaption, EndTitle, EndParagraph } from "./styled";
import { Icon } from "../Icon/styled";
import { SocialIcons } from "./SocialLinks";
import { email } from "./../../features/PersonalHomepage/email";
import Hand from "./../../images/Hand.png";

export const EndSection = () => (
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
