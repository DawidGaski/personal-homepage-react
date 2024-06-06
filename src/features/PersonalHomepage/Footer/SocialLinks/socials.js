import { styledIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./socialIcons/GithubIcon.svg";
import { ReactComponent as FaceBookIcon } from "./socialIcons/FacebookIcon.svg";

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
];
