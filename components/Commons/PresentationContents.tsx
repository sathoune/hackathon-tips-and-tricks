import Flex from "./Flex";
import { CSSProperties } from "react";

const PresentationContents = ({ style }: { style?: CSSProperties }) => {
  return (
    <Flex
      style={{
        flexDirection: "column",
        ...style,
      }}
    >
      <h4>Content available at:</h4>
      <div>
        Hosted at: <a href="https://today.bargiel.dev">today.bargiel.dev</a>
      </div>
      <div>
        <a href={"https://github.com/sathoune/hackathon-tips-and-tricks"}>
          Presentation source code
        </a>
      </div>
    </Flex>
  );
};

export default PresentationContents;
