import { useTranslation } from "react-i18next";
import React from "react";
import Lif from "../../Commons/Lif";

const Monetization = () => {
  const { t } = useTranslation();

  return (
    <section>
      <h2>{t("ideas.3.title")}</h2>
      <ul>
        {(
          t("ideas.3.list", { returnObjects: true }) satisfies Array<string>
        ).map((item: string, index: number) => (
          <Lif key={index}>{item}</Lif>
        ))}
      </ul>
      <aside className={"notes"}>
        <ul>
          <li>No knowledge about the product</li>
          <li>Companies look for opportunities to save money</li>
          <li>Ads need scale</li>
          <li>People are willing to pay not to see ads</li>
        </ul>
      </aside>
    </section>
  );
};

export default Monetization;
