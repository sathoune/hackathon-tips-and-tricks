import { useTranslation } from "react-i18next";

const Customer = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("ideas.5.title")}</h2>
    </section>
  );
};

export default Customer;
