import React, { useEffect, useState } from "react";
import Todo from "./component/Todo";
import "./App.css";
import axios from "axios";
import { baseURL } from "./utils/constant";
import PopUp from "./component/PopUp";
function App() {
  const [ToDos, setToDos] = useState([]);
  const [input, setInput] = useState("");
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popUpContent, setPopUpContent] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => {
        setToDos(res.data);
      })
      .catch((e) => {
        console.log("someThing went Wrong", e);
      });
  }, [updateUI]);

  const saveTodo = () => {
    axios
      .post(`${baseURL}/save`, { toDo: input })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setInput("");
      })
      .catch((e) => {
        console.log("someThing went Wrong", e);
      });
  };

  return (
    <main>
      <div className="container">
        <h1 className="title">Todo App</h1>

        <div className="input_holder">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Add a Todo.."
          />
          <button onClick={saveTodo}>Add</button>
        </div>

        <div className="list">
          {ToDos.map((item) => (
            <Todo
              text={item.toDo}
              key={item._id}
              id={item._id}
              setUpdateUI={setUpdateUI}
              setShowPopup={setShowPopup}
              setPopUpContent={setPopUpContent}
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <PopUp setShowPopup={setShowPopup} popUpContent={popUpContent}  setUpdateUI={setUpdateUI}/>
      )}
    </main>
  );
}

export default App;
