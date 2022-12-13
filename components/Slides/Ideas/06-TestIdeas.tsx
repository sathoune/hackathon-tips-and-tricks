import { useTranslation } from "react-i18next";

const TestIdeas = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("ideas.6.title")}</h2>
      <ul>
        <li>{t("ideas.6.askWhy")}</li>
      </ul>
      <aside className={"notes"}>
        <ul>
          <li>Getting to the core of the ideas</li>
        </ul>
      </aside>
    </section>
  );
};

export default TestIdeas;
