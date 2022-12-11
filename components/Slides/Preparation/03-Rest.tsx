import { useTranslation } from "react-i18next";

const Rest = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("preparation.3.title")}</h2>
    </section>
  );
};

export default Rest;
