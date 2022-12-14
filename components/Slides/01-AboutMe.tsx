import { useTranslation } from "react-i18next";
import PersonalLinks from "../Commons/PersonalLinks";
import PresentationContents from "../Commons/PresentationContents";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <section>
      <h2>{t("about.title")}</h2>
      <PersonalLinks />
      <PresentationContents
        style={{ alignItems: "flex-end", flexDirection: "column" }}
      />
    </section>
  );
};

export default AboutMe;
