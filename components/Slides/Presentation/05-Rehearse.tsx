import { useTranslation } from "react-i18next";
import Lif from "../../Commons/Lif";

const Rehearse = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("presentation.5.title")}</h2>
            <ul>
        {(
          t("presentation.5.list", { returnObjects: true }) satisfies Array<string>
        ).map((item: string, index: number) => (
          <Lif key={index}>{item}</Lif>
        ))}
      </ul>

    </section>
  );
};

export default Rehearse;
