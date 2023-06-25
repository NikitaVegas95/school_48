import React from 'react';
import '../styles/main.scss'
import Title from "./Title";
import Text from "./Text";
import Name from "./Name";

export default function Container() {
  return (
    <div className={'container'}>
      <div className={'img'}>

      </div>
      <div className={'content'}>
        <Name/>
        <Title/>
        <Text/>
      </div>
    </div>
  );
}