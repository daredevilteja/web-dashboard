import React from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

// import './styles.css'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Lead</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className={"add_lead_form"}>
          <label htmlFor="first_name">First name:</label>
          <br />
          <input type="text" id="first_name" name="first_name" />
          <br />
          <label htmlFor="last_name">Last name:</label>
          <br />
          <input type="text" id="last_name" name="last_name" />
          <br />
          <label htmlFor="email">Email Address:</label>
          <br />
          <input type="email" id="email" name="email" />
          <br />
          <label htmlFor="mobile">Mobile:</label>
          <br />
          <input type="number" id="mobile" name="mobile" />
          <br />
          <label htmlFor="location_type">Location Type:</label>
          <br />
          <select id="location_type" name="location_type">
            <option value="city">City</option>
            <option value="country">Country</option>
            <option value="state">State</option>
          </select>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
        <Button>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default function AddModal(props) {
  const [modalShow, setModalShow] = useState(props.showAdd);
  if (modalShow === false) {
    props.closeModal(false);
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
