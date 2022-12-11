import { useTranslation } from "react-i18next";

const Collaboration = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("implementation.2.title")}</h2>
    </section>
  );
};

export default Collaboration;
