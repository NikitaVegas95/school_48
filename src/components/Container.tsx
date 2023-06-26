import React, { FC } from 'react';
import '../styles/main.scss'
import Title from "./Title";
import Text from "./Text";
import Name from "./Name";
import Form from "../moduls/Form";
import Registration from "./Registration";

const Container: FC = () => (
  <div className={'container'}>
    <div className={'img'}></div>
    <div className={'content'}>
      <Name/>
      <Title/>
      <Text/>
      <Form/>
      <Registration/>
    </div>
  </div>
);

export default Container