import React from "react";
import {Modal, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";

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
                <h2>Communication</h2>
                <input type={"text"}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide}>Close</Button>
              <Button>Save</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default function EditModal(props) {
    const [modalShow, setModalShow] = useState(props.showAdd);
    if (modalShow === false) {
        props.closeModal(false);
    }

    return (
        <>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                createNewUser={props.createNewUser}
            />
        </>
    );
}
