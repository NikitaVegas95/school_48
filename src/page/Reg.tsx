import React, { FC } from "react";
import Title from "../components/Title";
import Progressbar from "../components/Progressbar";


const Reg: FC = () => (
  <div className={'container'}>
    <div className={'img'}></div>
    <div className={'content'}>
      <Title title={'Регистрация'}/>
      <Progressbar/>
    </div>
  </div>
)

export default Reg