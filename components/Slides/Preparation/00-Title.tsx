import { useTranslation } from "react-i18next";

const Title = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("preparation.0.title")}</h2>
    </section>
  );
};

export default Title;
