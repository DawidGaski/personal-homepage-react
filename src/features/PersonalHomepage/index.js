import { Container } from "../../components/Container/styled";
import { ThemeSwitch } from "../../common/ThemeSwitch";
import { Myself } from "./Myself";
import { MySkills } from "./MySkills";
import { SkillsToLearn } from "./SkillsToLearn";
import { Portfolio } from "./Portfolio";
import { Footer } from "./Footer";

export const PersonalHomepage = () => (
  <Container>
    <ThemeSwitch />
    <Myself />
    <main>
      <MySkills />
      <SkillsToLearn />
      <Portfolio />
    </main>
    <Footer />
  </Container>
);
