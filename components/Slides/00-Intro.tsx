import { titleText } from "../utils/titleText";

const Title = () => {
  return (
    <section>
      <h2>{titleText}</h2>
      <aside className={"notes"}>
        <p>{"This is a sample speaker's note"}</p>
        <p>{"This is a sample speaker's note"}</p>
        <p>{"This is a sample speaker's note"}</p>
      </aside>
    </section>
  );
};

export default Title;
