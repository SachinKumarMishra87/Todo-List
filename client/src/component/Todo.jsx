import axios from "axios";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { baseURL } from "../utils/constant";

function Todo({ text, id, setUpdateUI, setShowPopup, setPopUpContent }) {
  const deleteTodo = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateTodo = () => {
    setPopUpContent({ text, id });
    setShowPopup(true);
  };

  return (
    <div className="toDo">
      {text}
      <div className="icons">
        <FaEdit className="icon" onClick={updateTodo} />
        <FaDeleteLeft className="icon" onClick={deleteTodo} />
      </div>
    </div>
  );
}

export default Todo;
