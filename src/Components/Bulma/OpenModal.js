import React, { useState } from "react";
import { Button, Modal } from "react-bulma-components";

export default function OpenModal(props) {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button color="dark" fullwidth={true} onClick={() => setShow(true)}>
        Enroll
      </Button>
      <Modal show={show} onClose={() => setShow(false)} {...props.modal}>
        {props.children}
      </Modal>
    </div>
  );
}
