import Input from "./Input.jsx";
import { useRef } from "react";
import Modal from "./Modal.jsx";

export default function NewProject({ onAdd, onCancel }) {

  // 모달 컴포넌트에 참조값을 넘겨주기 위해 사용
  const modal1 = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    const newProjectData = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    };

    // validation
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      // show the error modal
      modal1.current.open();
      return;
    }

    // save
    onAdd(newProjectData);
  };

  return (
    <>
      <Modal ref={modal1} buttonCaption="Okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">알림!</h2>
        <p className="text-stone-600 mb-4">
          필드 값을 모두 채워주세요.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          {/* 
          리액트 버전이 낮을 경우, 커스텀 컴포넌트에 참조값이 전달되지 않는다. 
          그래서 ref 속성을 사용하려면 forwardRef를 사용해야 한다.  
        */}
          <Input type="text" ref={title} label="Title" />
          <Input ref={description} label="Description" textArea />
          <Input type="date" ref={dueDate} label="DueDate" />
        </div>
      </div>
    </>
  );
}
