import React, { FC } from "react";
import { Link } from "react-router-dom";

const Registration:FC = () => (
  <div className='content__reg-wrapper'>
    <p className='content__text content__text_gray'>Еще не зарегистрированы?</p>
    <Link to="/registration" className='content__reg'>Регистрация</Link>
  </div>
)

export default Registration