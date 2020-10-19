import React from "react";
import { useSelector } from "react-redux";
import LoginForm from '../../Components/LoginForm/LoginForm'

const ModalManger = () => {
  const modalLookUp = {
    LoginForm
  };
  const currentModal = useSelector((state) => state.modals);
  let renderModal;
  if (currentModal) {
      const { modalType, modalProps} = currentModal;

      const ModalComponent = modalLookUp[modalType];

      renderModal= <ModalComponent {...modalProps} />
  }
  return <span>{renderModal}</span>
};
export default ModalManger;