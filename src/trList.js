import React, {useState} from 'react';
import EditModal from "./EditModal"

export default function TrList(props) {
    const [editMode, setEditMode] = useState(false);

    function getModal(val) {
        setEditMode(val);
    }

    return(
        !editMode ?
            (<tr>
            <td>{props.val.firstName + " " + props.val.lastName}</td>
            <td>{props.val.email}</td>
            <td>{props.val.mobile}</td>
            <td>{props.val.locationType}</td>
            <td>{props.val.locationString}</td>
            <td>
                <button onClick={() => setEditMode(true)}>Mark Update</button>
                <button onClick={() => props.deleteUser(props.idx)}>Delete</button>
            </td>
        </tr>) : <EditModal showAdd={editMode} closeModal={getModal}/>
    );
}