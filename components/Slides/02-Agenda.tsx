import Lif from "../Commons/Lif";
import { useTranslation } from "react-i18next";

const Agenda = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2>Agenda</h2>
      <ol>
        {
          // @ts-ignore
          t("agenda.points", { returnObjects: true }).map((item, index) => (
            <Lif key={index}>{item}</Lif>
          ))
        }
      </ol>
    </section>
  );
};

export default Agenda;
