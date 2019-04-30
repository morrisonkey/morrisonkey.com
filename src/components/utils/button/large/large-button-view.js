import React from 'react';
import { Button } from "react-bulma-components/full";

const LargeButton = (props) => {
  return (
    <Button
      renderAs="a"
      href={props.url}
      color="dark"
      size="large"
      outlined
      rounded
    >
      {props.text}
    </Button>
  );
}

export default LargeButton;
