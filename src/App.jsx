import { useState } from "react";
import PropTypes from "prop-types";
import "./App.css";
import todoimage from "./assets/todoimage1.png";

const App = () => {
  var [list, setList] = useState([]);
  return (
    <div id="container">
      <h2 id="title">List Your Tasks</h2>
      <ListTask setList={setList} list={list} />
      <AddTask setList={setList} list={list} />
    </div>
  );
};

const ListTask = ({ setList, list }) => {
  return (
    <>
      <div id="task" className="task">
        {list.map((task) => (
          <div key={task} className="taskitem">
            <input
              type="checkbox"
              onClick={() => {
                document.getElementById(task).style.textDecoration =
                  "line-through";
                setTimeout(() => {
                  var newlist = list.filter((item) => item != task);
                  setList(newlist);
                }, 500);
              }}
              className="taskitems"
            />
            <h2 className="taskitems" id={task}>
              {task}
            </h2>
          </div>
        ))}
        {list.length == 0 && (
          <img src={todoimage} alt="todoimage" id="todoimage" />
        )}
      </div>
    </>
  );
};

ListTask.propTypes = {
  setList: PropTypes.func,
  list: PropTypes.array.isRequired,
};

const AddTask = ({ setList, list }) => {
  return (
    <div id="addtask">
      <input
        type="text"
        placeholder="Add Task"
        id="input"
        onKeyDown={(event) => {
          if (event.key == "Enter") {
            console.log("enter");
            setList([...list, document.getElementById("input").value]);
            document.getElementById("input").value = "";
          }
        }}
      />
    </div>
  );
};

AddTask.propTypes = {
  setList: PropTypes.func.isRequired,
  list: PropTypes.array.isRequired,
};

export default App;
