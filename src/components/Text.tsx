import React from "react";
import '../styles/main.scss'
import { RegProps } from "../app.interface";

const Text = (props: RegProps) => (
  <p className={'content__text'}>{props.title}</p>
);

export default Text
