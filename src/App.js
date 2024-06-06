import { Container } from "./components/Container";
import { Portfolio } from "./features/PersonalHomepage/Portfolio";
import { EndSection } from "./components/End";
import { MySkills } from "./features/PersonalHomepage/MySkills";
import { SkillsToLearn } from "./features/PersonalHomepage/SkillsToLearn";
import { Myself } from "./features/PersonalHomepage/Myself";

function App() {
  return (
    <Container>
      <Myself />
      <MySkills />
      <SkillsToLearn />
      <Portfolio />
      <EndSection />
    </Container>
  );
}

export default App;
