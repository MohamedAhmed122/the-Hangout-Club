import React, { useState } from "react";
import { Modal, Button, Divider } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/Modal/ModalAction";
import { useHistory } from "react-router-dom";
const UnAuthModal = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();
  const history = useHistory()

  const handleOpen = (modalType) => {
    dispatch(openModal({modalType}));
    setOpen(false);
    // setModelOpen(false);
  };
  return (
    <Modal size="mini" open={open} onClose={() => setOpen(false)}>
      <Modal.Header content="You need to be signed in to do that" />
      <Modal.Content>
        <p>Please either login or register to see this content</p>
        <Button.Group widths={4}>
          <Button
            fluid
            color="teal"
            content="Login"
            onClick={() => handleOpen("LoginForm")}
          />
          <Button.Or />
          <Button
            fluid
            color="green"
            content="Register"
            onClick={() => handleOpen("RegisterForm")}
          />
        </Button.Group>
        <Divider />
        <div style={{ textAlign: "center" }}>
          <p>Or Click here to continue as a guest</p>
          <Button
            onClick={
              (() => {
                setOpen(false);
              },
            //   () => setModelOpen(false),
              () => history.goBack())
            }
            content="Cancel"
          />
        </div>
      </Modal.Content>
    </Modal>
  );
};
export default UnAuthModal;
