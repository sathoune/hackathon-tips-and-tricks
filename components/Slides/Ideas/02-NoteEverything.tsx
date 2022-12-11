import { useTranslation } from "react-i18next";

const NoteEverything = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("ideas.2.title")}</h2>
    </section>
  );
};

export default NoteEverything;
