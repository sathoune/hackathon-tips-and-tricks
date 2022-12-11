import { useTranslation } from "react-i18next";

const StartWithProblem = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("ideas.1.title")}</h2>
    </section>
  );
};

export default StartWithProblem;
