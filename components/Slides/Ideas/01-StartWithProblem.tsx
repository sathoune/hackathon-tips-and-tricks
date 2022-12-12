import { useTranslation } from "react-i18next";
import Lif from "../../Commons/Lif";

const StartWithProblem = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("ideas.1.title")}</h2>
      <ul>
        {(
          t("ideas.1.list", { returnObjects: true }) satisfies Array<string>
        ).map((item: string, index: number) => (
          <Lif key={index}>{item}</Lif>
        ))}
      </ul>
      <aside className={"notes"}>
        <ul>
          <li>Larger potential market</li>
          <li>Did somebody solve it before?</li>
          <li>Why not?</li>
        </ul>
      </aside>
    </section>
  );
};

export default StartWithProblem;
