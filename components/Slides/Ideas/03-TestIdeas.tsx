import { useTranslation } from "react-i18next";

const TestIdeas = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("ideas.3.title")}</h2>
    </section>
  );
};

export default TestIdeas;
