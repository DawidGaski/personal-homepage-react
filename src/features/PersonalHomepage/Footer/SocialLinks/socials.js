import { styledIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./socialIcons/GithubIcon.svg";
import { ReactComponent as FaceBookIcon } from "./socialIcons/FacebookIcon.svg";
import { ReactComponent as LinkedinIcon } from "./socialIcons/LinkedIN.svg";

export const socials = [
  {
    name: "GitHub",
    url: "https://github.com/DawidGaski",
    Icon: styledIcon(GithubIcon),
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/dawid.galeski",
    Icon: styledIcon(FaceBookIcon),
  },

  {
    name: "Linkedin",
    url: "https://www.linkedin.com/in/dawid-ga%C5%82%C4%99ski-74585a313/",
    Icon: styledIcon(LinkedinIcon),
  },
];
