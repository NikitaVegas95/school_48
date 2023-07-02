import React, { FC, useState } from "react";
import '../styles/main.scss'
import Title from "../components/Title";
import Text from "../components/Text";
import Name from "../components/Name";
import Form from "../moduls/form/components/Form";
import Modal from "../moduls/modal/Components/Modal";
import { ModalProps } from "../app.interface";




const Main: FC<ModalProps> = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="container">
      <div className="img"></div>
      <div className="content">
        <Name />
        <Title title={'Авторизация'} />
        <Text title={'Только для зарегистрированных пользователей'} />
        <Form />
        <div className="content__reg-wrapper">
          <p className="content__text content__text_gray">Еще не зарегистрированы?</p>
          <button
            type="button"
            className="content__reg btn-reset"
            onClick={() => setModalActive(true)}
          >
            Регистрация
          </button>
        </div>
        <Modal modalActive={modalActive} setModalActive={setModalActive}  active={false} setActive={false}/>
      </div>
    </div>
  );
}



export default Main