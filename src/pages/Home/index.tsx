import { lazy } from "react";
import IntroContent from "../../content/IntroContent.json";
import ContactContent from "../../content/ContactContent.json";
import SkillsContent from "../../content/SkillsContent.json";
import RolesContent from "../../content/RolesContent.json";
import ToolsContent from "../../content/ToolsContent.json";

const Contact = lazy(() => import("../../components/ContactForm"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const CentredBlock = lazy(() => import("../../components/CentredBlock"));

const Home = () => {
  return (
    <Container>
      <ScrollToTop />
      <ContentBlock
        direction="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="about"
      />
      <CentredBlock
        title={RolesContent.title}
        content={RolesContent.text}
        sections={RolesContent.section}
        id="roles"
      />
      <CentredBlock
        title={SkillsContent.title}
        content={SkillsContent.text}
        sections={SkillsContent.section}
        id="skills"
      />
      <CentredBlock
        title={ToolsContent.title}
        content={ToolsContent.text}
        sections={ToolsContent.section}
        id="tools"
      />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </Container>
  );
};

export default Home;
