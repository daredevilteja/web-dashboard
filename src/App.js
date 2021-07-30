import React, { useState } from "react";
import AddModal from "./AddModal";
import "./App.css";

function App() {
  const [tableRowList, updateTableRow] = useState([]);
  const [addView, setAddView] = useState(false);

  function getModal(val) {
    setAddView(val);
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
            <td>val.name</td>
            <td>val.email</td>
            <td>val.mobNum</td>
            <td>val.locType</td>
            <td>val.locStr</td>
            <td>
              <button>Mark Update</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  ) : (
    <AddModal showAdd={addView} closeModal={getModal} />
  );
}

export default App;
