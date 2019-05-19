import React from "react";
import Button from "@material-ui/core/Button";

function Caja(props) {
  const { classes } = props;

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
      >{'-'}
      </Button>
    </div>
  );
}

export default Caja;
