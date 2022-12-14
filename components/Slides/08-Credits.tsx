import PersonalLinks from "../Commons/PersonalLinks";

import Flex from "../Commons/Flex";
import PresentationContents from "../Commons/PresentationContents";

const Credits = () => {
  return (
    <section>
      <h2>{"Rolling the credits"}</h2>
      <Flex
        style={{
          marginTop: "10%",
        }}
      >
        <PersonalLinks />
        <PresentationContents />
        <Flex
          style={{
            flexDirection: "column",
            alignItems: "flex-end",
            justifyContent: "flex-start",
          }}
        >
          <h4>Made with:</h4>
          <div>
            <a href="https://revealjs.com/">Reveal.js</a>
          </div>
          <div>
            <a href="https://nextjs.org/">Next.js</a>
          </div>
          <div style={{ textAlign: "right" }}>
            <a href="https://github.com/cologneintelligence/reveal.js-remote">
              Remote plugin
            </a>
          </div>
        </Flex>
      </Flex>
    </section>
  );
};

export default Credits;
