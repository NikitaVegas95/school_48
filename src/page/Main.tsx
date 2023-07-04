import React, { FC, useState } from "react";
import '../styles/main.scss'
import Title from "../components/Title";
import Text from "../components/Text";
import Name from "../components/Name";
import Form from "../moduls/form/components/Form";
import Modal from "../moduls/modal/Components/Modal";
import mainTitle from "../content/main-title";
import mainText from "../content/main-text";

const Main: FC = () => {
  const [modalActive, setModalActive] = useState(false)
  return (
    <div className="container">
      <div className="img"></div>
      <div className="content">
        <Name />
        <Title title={mainTitle} />
        <Text title={mainText} />
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
        <Modal modalActive={modalActive} setModalActive={setModalActive}>
          <div className='modal-wrapper'>
            <div className='modal-img'>

            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}



export default Main