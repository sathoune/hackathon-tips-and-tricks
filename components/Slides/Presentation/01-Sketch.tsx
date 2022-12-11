import { useTranslation } from "react-i18next";

const Sketch = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("presentation.1.title")}</h2>
    </section>
  );
};

export default Sketch;
