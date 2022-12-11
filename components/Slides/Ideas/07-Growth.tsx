import { useTranslation } from "react-i18next";

const Growth = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("ideas.7.title")}</h2>
    </section>
  );
};

export default Growth;
