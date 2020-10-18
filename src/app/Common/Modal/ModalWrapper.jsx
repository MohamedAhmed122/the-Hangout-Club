import React from 'react'
import { useDispatch } from 'react-redux'
import { Modal, ModalContent, ModalHeader } from 'semantic-ui-react'
import { closeModal } from '../../redux/Modal/ModalAction'

export default function ModalWrapper({children , header , size}) {
    const dispatch  = useDispatch()
    return (
        <Modal open={true} onClose={() => dispatch(closeModal())} size={size}>
            {
                header &&
                <ModalHeader>{header}</ModalHeader>
            }
            <ModalContent>
                {children}
            </ModalContent>
        </Modal>
    )
}
