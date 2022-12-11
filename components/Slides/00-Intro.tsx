import { useTranslation } from "react-i18next";

const Title = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <section>
      <h2>{t("title")}</h2>

      <select onChange={(e) => changeLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="pl">Polish</option>
      </select>

      <aside className={"notes"}>
        <p>{"This is a sample speaker's note"}</p>
        <p>{"This is a sample speaker's note"}</p>
        <p>{"This is a sample speaker's note"}</p>
      </aside>
    </section>
  );
};

export default Title;
