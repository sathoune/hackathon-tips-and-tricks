import Title from "./Presentation/00-Title";
import Sketch from "./Presentation/01-Sketch";
import Structure from "./Presentation/02-Structure";
import Notes from "./Presentation/03-Notes";
import Content from "./Presentation/04-Content";
import Rehearse from "./Presentation/05-Rehearse";

const Presentation = () => {
  return (
    <section>
      <Title />
      <Sketch />
      <Structure />
      <Notes />
      <Content />
      <Rehearse />
    </section>
  );
};

export default Presentation;
