import * as React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import App from "./App";

const Index = React.memo(function Index() {
  return (
    <ParallaxProvider>
      <div>
        <App />
      </div>
    </ParallaxProvider>
  );
});

export default Index;
