import React from "react";
import { Button } from "@nighttrax/components/button";
import MuiButton from "@ex/mui/MuiButton";
import { meaningOfLife } from "@nighttrax/foo";
import { useTest } from "@hooks/test";

import MuiButtonDirect from "@mui/material/Button";

export const App = () => {
  useTest();

  return (
    <div>
      {meaningOfLife}
      <Button />
      <MuiButton />
      <MuiButtonDirect>MuiButtonDirect</MuiButtonDirect>
    </div>
  );
};
