import Input from "./Input.jsx";
import { useRef } from "react";

export default function NewProject({ onAdd }) {
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
    }

    // validation
    onAdd(newProjectData);
  };

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-stone-800 hover:text-stone-950">
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
        <Input type='text' ref={title} label="Title" />
        <Input ref={description} label="Description" textArea />
        <Input type='date' ref={dueDate} label="DueDate" />
      </div>
    </div>
  );
}
