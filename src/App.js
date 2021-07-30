import React, {useState} from "react";
import AddModal from "./AddModal";
import "./App.css";

function App() {
    const [tableRowList, updateTableRow] = useState([]);
    const [addView, setAddView] = useState(false);

    function getModal(val) {
        setAddView(val);
    }

    const createUser = (val) => {
        let newUser = val;
        tableRowList.push(newUser);
        updateTableRow(tableRowList);
    }

    return !addView ? (
        <div className="App">
            <button onClick={() => setAddView(true)}>Add</button>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Location Type</th>
                    <th>Location String</th>

                    <th>Action</th>
                </tr>
                {tableRowList.map((val, idx) => (
                    <tr>
                        <td>{val.firstName + " " + val.lastName}</td>
                        <td>{val.email}</td>
                        <td>{val.mobile}</td>
                        <td>{val.locationType}</td>
                        <td>{val.locationString}</td>
                        <td>
                            <button>Mark Update</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                ))}
            </table>
        </div>
    ) : (
        <AddModal showAdd={addView} closeModal={getModal} createNewUser={createUser}/>
    );
}

export default App;
