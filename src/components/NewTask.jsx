import { useState, useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");
  const modal2 = useRef();
  const handleChange = (e) => {
    setEnteredTask(e.target.value);
  };
  const handleClick = () => {
    if (enteredTask.trim() === "") {
      modal2.current.open();
      return;
    }
    onAdd(enteredTask);
    setEnteredTask("");
  };

  return (
    <div className="flex items-center gap-4">
      <Modal ref={modal2} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">알림!</h2>
        <p className="text-stone-600 mb-4">
          빈 값은 입력할 수 없습니다.
        </p>
      </Modal>
      <input
        onChange={(e) => handleChange(e)}
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        value={enteredTask}
      />
      <button
        onClick={handleClick}
        className="text-stone-700 hover:text-stone-950"
      >
        add Task
      </button>
    </div>
  );
}
