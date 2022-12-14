import Intro from "./Slides/00-Intro";
import AboutMe from "./Slides/01-AboutMe";
import Agenda from "./Slides/02-Agenda";
import Ideas from "./Slides/03-Ideas";
import Implementation from "./Slides/04-Implementation";
import Presentation from "./Slides/05-Presentation";
import Preparation from "./Slides/06-Preparation";
import Thanks from "./Slides/07-Thanks";
import Credits from "./Slides/08-Credits";

const SlidesContainer = () => {
  return (
    <div className="slides">
      <Intro />
      <AboutMe />
      <Agenda />
      <Ideas />
      <Implementation />
      <Presentation />
      <Preparation />
      <Thanks />
      <Credits />
    </div>
  );
};

export default SlidesContainer;
