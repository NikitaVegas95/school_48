import React, { FC } from 'react';
import '../styles/main.scss'
import Title from "../components/Title";
import Text from "../components/Text";
import Name from "../components/Name";
import Form from "../moduls/Form";
import Registration from "../components/Registration";

const Main: FC = () => (
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

export default Main