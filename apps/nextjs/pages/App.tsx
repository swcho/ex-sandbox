import * as React from "react";
import ComponentA from "./ComponentA";

export type Props = {};

const App = React.memo(function App() {
  return (
    <div>
      App
      <div style={{ height: "100vh" }} />
      <ComponentA />
      <div style={{ height: "100vh" }} />
    </div>
  );
});

export default App;
