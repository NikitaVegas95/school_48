import React, { FC } from 'react';
import '../styles/main.scss'
import { Link } from "react-router-dom";

const Fpass: FC = () => (
  <div className={'reset-wrapper'}>
    <Link to=" " className={"reset-pass"}>Забыли пароль?</Link>
  </div>
);

export default Fpass