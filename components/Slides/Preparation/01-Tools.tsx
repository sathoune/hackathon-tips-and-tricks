import { useTranslation } from "react-i18next";
import Lif from "../../Commons/Lif";

const Tools = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("preparation.1.title")}</h2>
      <ul>
        {(
          t("preparation.1.list", { returnObjects: true }) satisfies Array<string>
        ).map((item: string, index: number) => (
          <Lif key={index}>{item}</Lif>
        ))}
      </ul>
    </section>
  );
};

export default Tools;
