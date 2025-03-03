import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button';

const Modal = forwardRef(function Modal({children, buttonCaption}, ref) {

  const dialog = useRef();

  /* 
    useImperativeHandle 를 사용하여 참조값을 전달하여 
    return 내 함수(open)를 다른 컴포넌트에서 호출 가능하게 한다. 
  */
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    }
  })

  /**
   * ref={dialog} 가 렌더링된 후, const dialog 값은 dialog 태그가 된다. 
   * dialog.current 로 접근 가능하다.
   */
  return createPortal(
    <dialog ref={dialog} className='backdrop:bg-stone-900/90 p-4 rounded-md shadow-md'>
      {children}
      <form method="dialog" className='mt-4 text-right'>
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>
    , document.getElementById('modal-root')
  );
});

export default Modal;