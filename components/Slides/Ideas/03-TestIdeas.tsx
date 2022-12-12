import { useTranslation } from "react-i18next";

const TestIdeas = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("ideas.3.title")}</h2>
      <ul>
        <li>{t("ideas.3.askWhy")}</li>
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
