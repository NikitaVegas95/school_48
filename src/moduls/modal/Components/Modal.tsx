import React, { FC } from "react";
import { ModalProps } from "../../../app.interface";

const Modal: FC<ModalProps> = ({modalActive, setModalActive, children}) => (
  <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
    <div className={modalActive ? 'modal__content active' : 'modal'} onClick={e => e.stopPropagation()}>
      {children}
    </div>
  </div>
);

export default Modal