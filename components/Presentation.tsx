// @ts-ignore
import Reveal from "reveal.js";
import { useEffect } from "react";
import RevealRemote from "../remote/plugin";

const Presentation = () => {
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
    <div className="reveal">
      <div className="slides">
      <section>Section 1</section>
      <section>Section 2</section>
      <section>Section 3</section>
      </div>
    </div>
  );
};

export default Presentation;
