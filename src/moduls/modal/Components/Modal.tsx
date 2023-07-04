import React, { FC, PropsWithChildren } from "react";
import { ModalProps } from "../../../app.interface";

const Modal: FC<PropsWithChildren<ModalProps>> = ({modalActive, setModalActive, children }) => (
  <div className={modalActive ? 'modal active' : 'modal'} onClick={() => setModalActive(false)}>
    <div className={modalActive ? 'modal__content active' : 'modal'} onClick={e => e.stopPropagation()}>
      {children}
    </div>
  </div>
);

export default Modal