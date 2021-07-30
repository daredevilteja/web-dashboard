import React from "react";
import {Modal, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";

// import './styles.css'

function MyVerticallyCenteredModal(props) {
    const submitHandler = (event) => {
        event.preventDefault();
        const newUser = {
            firstName: event.target[0].value,
            lastName: event.target[1].value,
            email: event.target[2].value,
            mobile: event.target[3].value,
            locationType: event.target[4].value,
            locationString: event.target[5].value,
        };

        props.createNewUser(newUser);
        props.onHide();
    };
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
                <form className={"add_lead_form"} onSubmit={(event) => submitHandler(event)}>
                    <label htmlFor="first_name">First name:</label>
                    <br/>
                    <input type="text" id="first_name" name="first_name"/>
                    <br/>
                    <label htmlFor="last_name">Last name:</label>
                    <br/>
                    <input type="text" id="last_name" name="last_name"/>
                    <br/>
                    <label htmlFor="email">Email Address:</label>
                    <br/>
                    <input type="email" id="email" name="email"/>
                    <br/>
                    <label htmlFor="mobile">Mobile:</label>
                    <br/>
                    <input type="number" id="mobile" name="mobile"/>
                    <br/>
                    <label htmlFor="location_type">Location Type:</label>
                    <br/>
                    <select id="location_type" name="location_type">
                        <option value="city">City</option>
                        <option value="country">Country</option>
                        <option value="state">State</option>
                    </select>
                    <label htmlFor="location_string">Location String:</label>
                    <br/>
                    <input type="text" id="location_string" name="location_string"/>
                    <br/>
                    <Button onClick={props.onHide}>Close</Button>
                    <button type="submit" className={"add_lead_btn"}>Save</button>
                </form>
            </Modal.Body>
            {/*<Modal.Footer>*/}
            {/*  <Button onClick={props.onHide}>Close</Button>*/}
            {/*  <Button>Save</Button>*/}
            {/*</Modal.Footer>*/}
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
                createNewUser={props.createNewUser}
            />
        </>
    );
}
