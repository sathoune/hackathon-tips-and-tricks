import { useTranslation } from "react-i18next";

const PhysicalTools = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("preparation.2.title")}</h2>
    </section>
  );
};

export default PhysicalTools;
