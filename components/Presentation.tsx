// @ts-ignore
import Reveal from "reveal.js";
import { useEffect } from "react";
import RevealRemote from "../remote/plugin";
import SlidesContainer from "./SlidesContainer";
import { useTranslation } from "react-i18next";

const Presentation = () => {
  const { i18n } = useTranslation();
  const changeLanguageOnKeyPress = (event: KeyboardEvent) => {
    if (event.key === "t") {
      const l = i18n.language;
      if (l === "en") {
        i18n.changeLanguage("pl");
      } else {
        i18n.changeLanguage("en");
      }
    }
  };

  useEffect(() => {
    // To avoid reinitialization with react strict mode
    if (Reveal.hasPlugin && Reveal.hasPlugin("RevealRemote")) {
      return;
    }
    Reveal.initialize({
      controls: true,
      progress: true,
      history: true,
      center: true,
      transition: "slide",
      remote: {
        remote: true,
        path: "/api/socket",
      },
      plugins: [RevealRemote()],
    });
  }, []);
  return (
    <div
      className="reveal"
      // @ts-ignore
      onKeyDown={changeLanguageOnKeyPress}
      tabIndex={-1}
    >
      <SlidesContainer />
    </div>
  );
};

export default Presentation;
