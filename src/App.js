import { Router } from "@reach/router";
import styled from "styled-components";
import * as styles from "./styles";
import StoryBoardForm from "./componets/StoryBoardForm/StoryBoardForm.jsx";
import VideoPlayer from "./componets/VideoPlay/VideoPlay";

const App = ({ className }) => {
  return (
    <div className={className}>
      <Router>
        <StoryBoardForm {...{ path: "/" }} />
        <VideoPlayer {...{ path: "/watch" }} />
      </Router>
    </div>
  );
};

export default styled(App)`
  ${styles.Container}
`;
