import { Container } from "./components/Container";
import { Portfolio } from "./features/PersonalHomepage/Portfolio";
import { MySkills } from "./features/PersonalHomepage/MySkills";
import { SkillsToLearn } from "./features/PersonalHomepage/SkillsToLearn";
import { Myself } from "./features/PersonalHomepage/Myself";
import { Footer } from "./features/PersonalHomepage/Footer";

function App() {
  return (
    <Container>
      <Myself />
      <MySkills />
      <SkillsToLearn />
      <Portfolio />
      <Footer />
    </Container>
  );
}

export default App;
