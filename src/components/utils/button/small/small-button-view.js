import React from 'react';
import { Button } from "react-bulma-components/full";
import './small-button.scss'

function SmallButton(props) {
  return (
    <Button
      className="small-button"
      size="small"
      rounded
      outlined
      onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}

export default SmallButton;
