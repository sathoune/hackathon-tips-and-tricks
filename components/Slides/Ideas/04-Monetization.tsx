import { useTranslation } from "react-i18next";

const Monetization = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("ideas.4.title")}</h2>
    </section>
  );
};

export default Monetization;
