import { useState } from "react";
import DialogModal from "./DialogModal";
import "../../Dialog.css";

export default function Dialog() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenDialog, setIsOpenDialog] = useState(false);

  return (
    <div>
      <h2>Dialog Use Cases</h2>
      <button onClick={() => setIsOpenModal(true)}>Open Modal</button>
      <button onClick={() => setIsOpenDialog(true)}>Open Dialog</button>

      <DialogModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        isModal={true}
      >
        <h2>Modal</h2>
        <span>This is the content of the modal part.</span><br />
        <button onClick={() => setIsOpenModal(false)}>Close</button>
      </DialogModal>

      <DialogModal isOpen={isOpenDialog} onClose={()=> setIsOpenDialog(false)} isModal={false}>
        <h2>Dialog</h2>
        <span>This is the content of the dialog part.</span><br />
        <button onClick={()=> setIsOpenDialog(false)}>Close</button>
      </DialogModal>
    </div>
  );
}
