import { useTranslation } from "react-i18next";

const Rehearse = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("presentation.5.title")}</h2>
    </section>
  );
};

export default Rehearse;
