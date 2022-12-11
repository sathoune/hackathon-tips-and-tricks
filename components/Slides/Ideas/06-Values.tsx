import { useTranslation } from "react-i18next";

const Values = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("ideas.6.title")}</h2>
    </section>
  );
};

export default Values;
