import React, {useState} from "react";
import AddModal from "./AddModal";
import TrList from "./trList";
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
        updateTableRow([...tableRowList]);
    }

    const deleteUser = (idx) => {
        tableRowList.splice(idx, 1);
        updateTableRow([...tableRowList]);
    }

    return !addView ? (
        <div className="App">
            <button onClick={() => setAddView(true)}>Add</button>
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile Number</th>
                    <th>Location Type</th>
                    <th>Location String</th>

                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {tableRowList.map((val, idx) => (
                    <TrList idx={idx} val={val} deleteUser={deleteUser}/>
                ))}
                </tbody>
            </table>
        </div>
    ) : (
        <AddModal showAdd={addView} closeModal={getModal} createNewUser={createUser}/>
    );
}

export default App;
