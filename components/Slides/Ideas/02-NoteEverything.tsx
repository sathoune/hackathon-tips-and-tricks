import { useTranslation } from "react-i18next";

const clownPaths = [
  "/images/clown-4.png",
  "/images/clown-3.png",
  "/images/clown-2.png",
  "/images/clown-1.png",
  "/images/clown-0.jpg",
];

const NoteEverything = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className={"r-stack"}>
        <div>
          <h2>{t("ideas.2.title")}</h2>
          <div>{t("ideas.2.sillyIdeas")}</div>
        </div>
        {clownPaths.map((path, index) => (
          <img
            className={"fragment current-visible"}
            key={index}
            src={path}
            alt="clown"
            style={{
              width: "300px",
              height: "300px",
            }}
          />
        ))}
      </div>
      <aside className={"notes"}>
        <ul>
          <li>Process documentation.</li>
        </ul>
        <ol>
          <li>Add a magic system based on runes</li>
          <li>Magician fighting game</li>
          <li>Witches taking care of villages</li>
          <li>And avoiding the inquisition</li>
          <li>Solving problems with crafting system</li>
        </ol>
      </aside>
    </section>
  );
};

export default NoteEverything;
