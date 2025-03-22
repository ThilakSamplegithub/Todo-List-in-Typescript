import React, { useState } from "react";
interface TodoType {
  task: string;
  id: number;
  isStatus: boolean;
}
type Props = {
  el: TodoType;
  handleStatus: any;
  handleDelete: any;
  handleEdit: any;
};
const TodoList = ({ el, handleStatus, handleDelete, handleEdit }: Props) => {
  const { task, id, isStatus } = el;
  const [updateValue, setUpdated] = useState("");
  const [isInput, setInput] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdated(e.target.value);
  };
  function handleUpdate() {
    handleEdit(updateValue, id);
    setInput(false);
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        border: "1px solid",
        margin: 10,
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"
      }}
    >
      {isInput ? (
        <div>
          <input
            style={{ height: "100%" }}
            onChange={handleChange}
            type="text"
          />
          {/* <button onClick={handleUpdate}>update</button> */}
        </div>
      ) : (
        <p
          style={{
            textAlign: "center",
            border: "1px solid black",
            width: "40%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {task}
        </p>
      )}
      <div
        style={{
          display: "flex",
          width: "40%",
          border: "0px solid red",
          justifyContent: "space-evenly",
        }}
      >
        <input
          onChange={() => handleStatus(id)}
          type="checkbox"
          style={{ padding: "5px 10px" }}
        />
        {isInput&&<button onClick={handleUpdate}>update</button>}
        {isInput==false&&<button style={{ padding: "5px 10px" }} onClick={() => setInput(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 19h1.425L16.2 9.225L14.775 7.8L5 17.575zm-2 2v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM19 6.4L17.6 5zm-3.525 2.125l-.7-.725L16.2 9.225z"
            />
          </svg>
        </button>}
        <button
          onClick={() => handleDelete(id)}
          style={{ padding: "5px 10px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
              <path
                fill="currentColor"
                d="M20 5a1 1 0 1 1 0 2h-1l-.003.071l-.933 13.071A2 2 0 0 1 16.069 22H7.93a2 2 0 0 1-1.995-1.858l-.933-13.07L5 7H4a1 1 0 0 1 0-2zm-6-3a1 1 0 1 1 0 2h-4a1 1 0 0 1 0-2z"
              />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default TodoList;
