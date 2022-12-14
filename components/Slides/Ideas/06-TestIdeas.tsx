import { useTranslation } from "react-i18next";
import Lif from "../../Commons/Lif";

const TestIdeas = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("ideas.6.title")}</h2>
       <ul>
        {(
          t("ideas.6.list", { returnObjects: true }) satisfies Array<string>
        ).map((item, index) => (
          <Lif key={index}>{item}</Lif>
        ))}
      </ul>
      <aside className={"notes"}>
        <ul>
          <li>Getting to the core of the ideas</li>
        </ul>
      </aside>
    </section>
  );
};

export default TestIdeas;
