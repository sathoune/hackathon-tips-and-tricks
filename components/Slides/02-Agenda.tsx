import Lif from "../Commons/Lif";
import { useTranslation } from "react-i18next";

const Agenda = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2>Agenda</h2>
      <ol>
        {(
          t("agenda.points", { returnObjects: true }) satisfies Array<string>
        ).map((item, index) => (
          <Lif key={index}>{item}</Lif>
        ))}
      </ol>
    </section>
  );
};

export default Agenda;
