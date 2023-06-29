import React from "react";
import '../styles/main.scss'
import { RegProps } from "../app.interface";



const Title = (props: RegProps) => (
  <h2 className={'content__title'}>{props.title}</h2>
);

export default Title