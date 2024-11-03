import axios from "axios";
import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { baseURL } from "../utils/constant";

function PopUp({ setShowPopup, popUpContent, setUpdateUI }) {
  const [input, setInput] = useState(popUpContent.text);

  const updateTodo = () => {
    axios
      .put(`${baseURL}/update/${popUpContent.id}`, { toDo: input })
      .then((res) => console.log(res.data));
    setUpdateUI((prevState) => !prevState);
    setShowPopup(false);
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update Todo</h1>

        <div className="popup_input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Update Todo.."
          />
          <button onClick={updateTodo}>Update</button>
        </div>
      </div>
    </div>
  );
}

export default PopUp;
