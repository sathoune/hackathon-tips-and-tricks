import { useTranslation } from "react-i18next";

const VCS = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("implementation.1.title")}</h2>
    </section>
  );
};

export default VCS;
