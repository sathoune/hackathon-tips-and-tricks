import { useTranslation } from "react-i18next";
import Lif from "../../Commons/Lif";

const Customer = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("ideas.4.title")}</h2>
      <ul>
        {(
          t("ideas.4.list", { returnObjects: true }) satisfies Array<string>
        ).map((item, index) => (
          <Lif key={index}>{item}</Lif>
        ))}
      </ul>
      <aside className={"notes"}>
        <ul>
          <li>What business value your product gives to the customer</li>
        </ul>
      </aside>
    </section>
  );
};

export default Customer;
