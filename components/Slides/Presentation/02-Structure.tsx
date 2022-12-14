import { useTranslation } from "react-i18next";
import Lif from "../../Commons/Lif";

const Structure = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("presentation.2.title")}</h2>
            <ul>
        {(
          t("presentation.2.list", { returnObjects: true }) satisfies Array<string>
        ).map((item: string, index: number) => (
          <Lif key={index}>{item}</Lif>
        ))}
      </ul>

    </section>
  );
};

export default Structure;
