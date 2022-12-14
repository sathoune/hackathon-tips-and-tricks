import { useTranslation } from "react-i18next";
import Lif from "../../Commons/Lif";

const Rest = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("preparation.2.title")}</h2>
    </section>
  );
};

export default Rest;
