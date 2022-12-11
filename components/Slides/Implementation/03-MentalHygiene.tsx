import { useTranslation } from "react-i18next";

const MentalHygiene = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("implementation.3.title")}</h2>
    </section>
  );
};

export default MentalHygiene;
