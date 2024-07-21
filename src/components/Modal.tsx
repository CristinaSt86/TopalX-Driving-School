// import React from "react";

// interface ModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children: React.ReactNode;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center h-1/5 md:h-1/3 z-50"
//       onClick={onClose}
//     >
//       <div
//         className="bg-transparent p-2 max-w-lg w-full"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Modal;
import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  top: number;  // New prop for top position
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, top }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-start z-50"
      style={{ top: `${top}px` }}  // Set top position
      onClick={onClose}
    >
      <div
        className=" p-2 max-w-lg w-full rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
