import { useTranslation } from "react-i18next";

const Content = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("presentation.4.title")}</h2>
    </section>
  );
};

export default Content;
