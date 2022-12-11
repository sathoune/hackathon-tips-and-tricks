import { useTranslation } from "react-i18next";

const CodingTools = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("preparation.1.title")}</h2>
    </section>
  );
};

export default CodingTools;
