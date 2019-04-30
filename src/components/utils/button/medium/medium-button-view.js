import React from 'react';
import { Button } from "react-bulma-components/full";

function MediumButton(props) {
  return (
    <Button
      href="https://alligator.io"
      color="danger"
      size="medium"
      rounded
      outlined
    >
      {props.text}
    </Button>
  );
}

export default MediumButton;
