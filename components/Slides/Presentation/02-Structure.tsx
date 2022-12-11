import { useTranslation } from "react-i18next";

const Structure = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("presentation.2.title")}</h2>
    </section>
  );
};

export default Structure;
