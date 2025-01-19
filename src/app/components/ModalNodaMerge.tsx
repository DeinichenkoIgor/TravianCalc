import React from "react";
import ReactDOM from "react-dom";
import Icon from "./SVG/Icon";

interface ModalNodaMergeProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  position: number;
}

const ModalNodaMerge: React.FC<ModalNodaMergeProps> = ({ isOpen, onClose, title, position}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <span>Обьеденить</span>
          <h2 className="text-lg font-semibold">{title}-{position}</h2>
          <button
            onClick={onClose}
            className="text-red-500 font-bold text-lg"
          >
            ×
          </button>
        </div>
        
      </div>
    </div>,
    document.body
  );
};

export default ModalNodaMerge;
