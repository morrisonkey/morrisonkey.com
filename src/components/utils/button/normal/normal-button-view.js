import React from 'react';
import { Button } from "react-bulma-components/full";

function NormalButton(props) {
  return (
    <Button
      href="https://alligator.io"
      color="danger"
      size="normal"
      rounded
      outlined
    >
      {props.text}
    </Button>
  );
}

export default NormalButton;
