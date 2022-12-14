import { useTranslation } from "react-i18next";
import Lif from "../../Commons/Lif";

const VCS = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("implementation.1.title")}</h2>
      <ul>
        {(
          t("implementation.1.list", { returnObjects: true }) satisfies Array<string>
        ).map((item: string, index: number) => (
          <Lif key={index}>{item}</Lif>
        ))}
      </ul>
    </section>
  );
};

export default VCS;
