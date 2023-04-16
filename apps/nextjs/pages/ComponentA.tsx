import * as React from "react";
import { Parallax } from "react-scroll-parallax";

export type Props = {};

const ComponentA = React.memo(function ComponentA(props: Props) {
  const {} = props;

  return (
    <>
      <Parallax
        translateX={["-100px", "200px"]}
        startScroll={0}
        endScroll={400}
      >
        This is first text.
      </Parallax>
      <Parallax
        translateX={["-400px", "0px"]}
        scale={[0.75, 1]}
        easing="easeInQuad"
        startScroll={0}
        endScroll={400}
      >
        This is second text.
        <div>HEY</div>
      </Parallax>
      <Parallax speed={-10} translateY={["-20px", "-20px"]}>
        This is third text.
        <div>ComponentA</div>
      </Parallax>
    </>
  );
});

export default ComponentA;
