import { CLOSE_MODAL, OPEN_MODAL } from "./ModalType";

export const openModal = payload =>({
    type: OPEN_MODAL,
    payload,
})

export const closeModal = () =>({
    type: CLOSE_MODAL,

})