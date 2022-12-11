import { useTranslation } from "react-i18next";

const Notes = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("presentation.3.title")}</h2>
    </section>
  );
};

export default Notes;
