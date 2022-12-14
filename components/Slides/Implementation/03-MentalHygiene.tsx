import { useTranslation } from "react-i18next";
import Lif from "../../Commons/Lif";

const MentalHygiene = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("implementation.3.title")}</h2>
      <ul>
        {(
          t("implementation.3.list", { returnObjects: true }) satisfies Array<string>
        ).map((item: string, index: number) => (
          <Lif key={index}>{item}</Lif>
        ))}
      </ul>
    </section>
  );
};

export default MentalHygiene;
