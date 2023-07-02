import React, { FC } from "react";
import '../styles/main.scss'
import { RegProps } from "../app.interface";

const Text: FC<RegProps> = ({ title }) => (
  <p className="content__text">{title}</p>
);

export default Text