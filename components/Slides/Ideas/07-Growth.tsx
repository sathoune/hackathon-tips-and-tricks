import { useTranslation } from "react-i18next";
import Lif from "../../Commons/Lif";

const Growth = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("ideas.7.title")}</h2>
            <ul>
        {(
          t("ideas.7.list", { returnObjects: true }) satisfies Array<string>
        ).map((item, index) => (
          <Lif key={index}>{item}</Lif>
        ))}
      </ul>
    </section>
  );
};

export default Growth;
