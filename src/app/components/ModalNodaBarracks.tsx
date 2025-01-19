import React from "react";
import ReactDOM from "react-dom";
import Icon from "./SVG/Icon";

interface ModalNodaBarracksProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  position: number;
}

const ModalNodaBarracks: React.FC<ModalNodaBarracksProps> = ({ isOpen, onClose, title, position}) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <span>Народ</span>
          <h2 className="text-lg font-semibold">{title}-{position}</h2>
          <button
            onClick={onClose}
            className="text-red-500 font-bold text-lg"
          >
            ×
          </button>
        </div>
        <table className="table-auto">
            <tbody>
                <tr>
                    <td className="text-center"></td>
                    <td className="text-center">lvl</td>
                    <td className="text-center">kpl</td>
                    <td className="text-center">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="flex items-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />
                            <span>B</span>
                        </div>
                    </td>
                    <td className="text-center">
                        <select className="w-full" defaultValue={20}>
                            {Array.from({ length: 21 }, (_, i) => (
                                <option key={i} value={i}>
                                {i}
                                </option>
                            ))}
                        </select>
                    </td>
                    <td className="text-center">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        999
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="flex items-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />
                            <span>S</span>
                        </div>
                    </td>
                    <td className="text-center">
                        <select className="w-full" defaultValue={20}>
                            {Array.from({ length: 21 }, (_, i) => (
                                <option key={i} value={i}>
                                {i}
                                </option>
                            ))}
                        </select>
                    </td>
                    <td className="text-center">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        999
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="flex items-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />
                            <span>GB</span>
                        </div>
                    </td>
                    <td className="text-center">
                        <select className="w-full" defaultValue={20}>
                            {Array.from({ length: 21 }, (_, i) => (
                                <option key={i} value={i}>
                                {i}
                                </option>
                            ))}
                        </select>
                    </td>
                    <td className="text-center">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        999
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="flex items-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />
                            <span>GS</span>
                        </div>
                    </td>
                    <td className="text-center">
                        <select className="w-full" defaultValue={20}>
                            {Array.from({ length: 21 }, (_, i) => (
                                <option key={i} value={i}>
                                {i}
                                </option>
                            ))}
                        </select>
                    </td>
                    <td className="text-center">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        999
                    </td>
                </tr>
                <tr>
                    <td>
                        <div className="flex items-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />
                            <span>W</span>
                        </div>
                    </td>
                    <td className="text-center">
                        <select className="w-full" defaultValue={20}>
                            {Array.from({ length: 21 }, (_, i) => (
                                <option key={i} value={i}>
                                {i}
                                </option>
                            ))}
                        </select>
                    </td>
                    <td className="text-center">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        99999
                    </td>
                    <td className="text-center border-2 border-green-200">
                        999
                    </td>
                </tr>
            </tbody>            
        </table>

        <table className="border-separate border border-green-400">
            <tbody>
                <tr>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="text-center border-2 border-green-200">
                        unit
                    </td>
                    <td className="text-center border-2 border-green-200">
                        unit
                    </td>
                    <td className="text-center border-2 border-green-200">
                        unit
                    </td>
                    <td className="text-center border-2 border-green-200">
                        unit
                    </td>
                    <td className="text-center border-2 border-green-200">
                        unit
                    </td>
                    <td className="text-center border-2 border-green-200">
                        unit
                    </td>
                    <td className="text-center border-2 border-green-200">
                        unit
                    </td>
                    <td className="text-center border-2 border-green-200">
                        unit
                    </td>
                </tr>
            </tbody>
        </table>

        <table className="border-separate border border-green-400">
            <tbody>
                <tr>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>                    
                </tr>
                <tr>
                    <td className="text-center border-2 border-green-200">
                        9Lumber
                    </td>
                    <td className="text-center border-2 border-green-200">
                        9Clay
                    </td>
                    <td className="text-center border-2 border-green-200">
                        9Iron
                    </td>
                    <td className="text-center border-2 border-green-200">
                        9Crop
                    </td>
                    <td className="text-center border-2 border-green-200">
                        9ollres
                    </td>
                    <td className="text-center border-2 border-green-200">
                        9cropun
                    </td>                    
                </tr>
            </tbody>
        </table>

        <table className="border-separate border border-green-400">
            <tbody>
                <tr>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>
                    <td className="text-center border-2 border-green-200">
                        <div className="flex items-center justify-center gap-2">                        
                            <Icon.VillagesMenu.Villag4446 size="20px" />                            
                        </div>
                    </td>                    
                </tr>
                <tr>
                    <td className="text-center border-2 border-green-200">
                        ат.пех
                    </td>
                    <td className="text-center border-2 border-green-200">
                        ат.кон
                    </td>
                    <td className="text-center border-2 border-green-200">
                        ат.общ
                    </td>
                    <td className="text-center border-2 border-green-200">
                        деф.пех
                    </td>
                    <td className="text-center border-2 border-green-200">
                        деф.кон
                    </td>
                    <td className="text-center border-2 border-green-200">
                        деф.средн
                    </td>                    
                </tr>
            </tbody>
        </table>
      </div>
    </div>,
    document.body
  );
};

export default ModalNodaBarracks;
