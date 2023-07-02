import React, { FC } from "react";
import '../styles/main.scss'
import { RegProps } from "../app.interface";



const Title:FC<RegProps> = ({ title }) => (
  <h2 className='content__title'>{title}</h2>
);

export default Title