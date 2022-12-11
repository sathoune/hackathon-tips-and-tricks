import { useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t("about.title")}</h2>
    </section>
  );
};

export default AboutMe;
