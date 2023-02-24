import * as React from "react";
import Button from "@mui/material/Button";

export type Props = {
  className?: string;
  children?: React.ReactNode;
};

const MuiButton = React.memo(function MuiButton(props: Props) {
  const { className, children } = props;

  return (
    <div className={className}>
      <Button>MuiButton</Button>
      {children}
    </div>
  );
});

export default MuiButton;
