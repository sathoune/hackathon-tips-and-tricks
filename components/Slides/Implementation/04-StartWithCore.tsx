import { useTranslation } from "react-i18next";

const StartWithCore = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("implementation.4.title")}</h2>
    </section>
  );
};

export default StartWithCore;
