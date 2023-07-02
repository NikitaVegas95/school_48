import React, { FC } from "react";
import '../styles/main.scss'

const Progressbar:FC = () => (
  <div className='content__progress-bar'>
    <div className='text-wrapper'>
      <span className='progress-bar-text'>Заполнено</span>
      <span className='progress-bar-value'>0%</span>
    </div>
    <div className='progress-bar'></div>
  </div>
);

export default Progressbar

