/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "../../Dialog.css";

export default function DialogModal({isModal = true, isOpen, onClose, children}) {

  const preventBodyScroll = (preventScrolling) => {
    document.body.style.overflow = preventScrolling ? "hidden" : "auto";
  };

  useEffect(() => {
    preventBodyScroll(isModal && isOpen);
    return () => preventBodyScroll(false);
  }, [isOpen, isModal]);

  if (!isOpen) return null;

  return (
    <div className={`dialog-overlay ${isModal ? "modal" : ""}`}>
      <div className="dialog-content" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="dialog-close">
          X
        </button>
        {children}
      </div>
    </div>
  );
}
