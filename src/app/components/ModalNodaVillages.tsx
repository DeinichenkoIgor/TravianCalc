import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import Icon from "./SVG/Icon";
import { ArrayProduction } from "./Planner/Arrays/ArrayProduction";

interface ModalNodaVillagesProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  position: number;
  KplLumber: number;
  KplClay: number;
  KplIron: number;
  KplCrop: number;
  serverSpeed: number;
}

const ModalNodaVillages: React.FC<ModalNodaVillagesProps> = ({ 
  isOpen, 
  onClose, 
  title, 
  position, 
  KplLumber, 
  KplClay, 
  KplIron, 
  KplCrop,
  serverSpeed 
}) => {    
  // Восстановление состояния из localStorage, если оно есть, иначе используем значения по умолчанию
  const storedNation = localStorage.getItem("selectedNation") || "";
  const storedAqueductLevel = localStorage.getItem("aqueductLevel");
  const storedLevels = localStorage.getItem("levels");
  const storedOases = localStorage.getItem("selectedOases");
  const storedFactories = localStorage.getItem("factories");
  const storedPlusCheckboxes = localStorage.getItem("plusCheckboxes");

  const [selectedNation, setSelectedNation] = useState<string>(storedNation || ""); // Состояние для выбранного народа
  const [aqueductLevel, setAqueductLevel] = useState<number>(
    storedAqueductLevel ? parseInt(storedAqueductLevel) : 0
  ); // Уровень Водопровода  
  const [levels, setLevels] = useState({
    lumber: 10,
    clay: 10,
    iron: 10,
    crop: 10,
    ...(storedLevels ? JSON.parse(storedLevels) : {}),
  }); // Уровень полей

  const [selectedOases, setSelectedOases] = useState<string[]>(
    storedOases ? JSON.parse(storedOases) : ["OasisNon", "OasisNon", "OasisNon"]
  ); // Дефолт Оазисов

  const getSelectedOptions = (oases: string[]) => {
    return oases.map((oasisValue) =>
      oasisOptions.find((option) => option.value === oasisValue) || oasisOptions[0]
    );
  };
  
    
  const [factories, setFactories] = useState<any>(
    storedFactories ? JSON.parse(storedFactories) : {
      lumber: false,
      clay: false,
      iron: false,
      crop1: false,
      crop2: false,
    }
  ); // Чекбоксы заводов 
  const [plusCheckboxes, setPlusCheckboxes] = useState<any>(
    storedPlusCheckboxes ? JSON.parse(storedPlusCheckboxes) : {
      allChecked: false,
      individual: [false, false, false, false],
    }
  ); // Добавьте состояние для чекбоксов "Плюс "
  
  useEffect(() => {
    // Сохраняем данные в localStorage при их изменении
    localStorage.setItem("selectedNation", selectedNation);
    localStorage.setItem("aqueductLevel", aqueductLevel.toString());
    localStorage.setItem("levels", JSON.stringify(levels));
    localStorage.setItem("selectedOases", JSON.stringify(selectedOases));
    localStorage.setItem("factories", JSON.stringify(factories));
    localStorage.setItem("plusCheckboxes", JSON.stringify(plusCheckboxes));
  }, [
    selectedNation,
    aqueductLevel,
    levels,
    selectedOases,
    factories,
    plusCheckboxes,
  ]);

  const toggleFactory = (resource: keyof typeof factories) => {
    setFactories((prev) => ({
      ...prev,
      [resource]: !prev[resource],
    }));
  };

  // Выпадающий список Оазисов
const oasisOptions = [
  { value: "OasisNon", label: <Icon.OasisIcons.OasisNon size="20px" /> },
  { value: "OasisL", label: <Icon.OasisIcons.OasisL size="20px" /> },
  { value: "OasisLL", label: <Icon.OasisIcons.OasisLL size="20px" /> },
  { value: "OasisLC", label: <Icon.OasisIcons.OasisLC size="20px" /> },
  { value: "OasisCl", label: <Icon.OasisIcons.OasisCl size="20px" /> },
  { value: "OasisClCl", label: <Icon.OasisIcons.OasisClCl size="20px" /> },
  { value: "OasisClC", label: <Icon.OasisIcons.OasisClC size="20px" /> },
  { value: "OasisI", label: <Icon.OasisIcons.OasisI size="20px" /> },
  { value: "OasisII", label: <Icon.OasisIcons.OasisII size="20px" /> },
  { value: "OasisIC", label: <Icon.OasisIcons.OasisIC size="20px" /> },
  { value: "OasisC", label: <Icon.OasisIcons.OasisC size="20px" /> },
  { value: "OasisCC", label: <Icon.OasisIcons.OasisCC size="20px" /> },
];

const OasisData : Record<
  string,
  { lumber: number; clay: number; iron: number; crop: number }
> = {
  OasisNon: { lumber: 0, clay: 0, iron: 0, crop: 0 },
  OasisL: { lumber: 25, clay: 0, iron: 0, crop: 0 },
  OasisLL: { lumber: 50, clay: 0, iron: 0, crop: 0 },
  OasisLC: { lumber: 25, clay: 0, iron: 0, crop: 25 },
  OasisCl: { lumber: 0, clay: 25, iron: 0, crop: 0 },
  OasisClCl: { lumber: 0, clay: 50, iron: 0, crop: 0 },
  OasisClC: { lumber: 0, clay: 25, iron: 0, crop: 25 },
  OasisI: { lumber: 0, clay: 0, iron: 25, crop: 0 },
  OasisII: { lumber: 0, clay: 0, iron: 50, crop: 0 },
  OasisIC: { lumber: 0, clay: 0, iron: 25, crop: 25 },
  OasisC: { lumber: 0, clay: 0, iron: 0, crop: 25 },
  OasisCC: { lumber: 0, clay: 0, iron: 0, crop: 50 },
};   

  if (!isOpen) return null;  

  // Считаем уровень поля * количество полей
  const calculateProduction = (count: number, level: number, serverSpeed: number) => {
    const levelKey = `lvl${level}` as keyof typeof ArrayProduction;
    const levelValue = ArrayProduction[levelKey] || 0;
    return count * levelValue * serverSpeed;
  };
  
  const handleOasisChange = (oasisIndex: number, selectedOption: any) => {
    const updatedOases = [...selectedOases];
    updatedOases[oasisIndex] = selectedOption.value; // Сохраняем только value
    setSelectedOases(updatedOases);
  
    // Обновляем localStorage сразу при изменении
    localStorage.setItem("selectedOases", JSON.stringify(updatedOases));
  };
  

  // Функция для обновления всех чекбоксов
  const handleAllPlusCheckboxChange = (checked: boolean) => {
    setPlusCheckboxes({
      allChecked: checked,
      individual: [checked, checked, checked, checked],
    });
  };

  // Функция для обновления отдельного чекбокса
  const handleIndividualPlusCheckboxChange = (index: number, checked: boolean) => {
    const updatedCheckboxes = [...plusCheckboxes.individual];
    updatedCheckboxes[index] = checked;

    setPlusCheckboxes({
      allChecked: updatedCheckboxes.every(Boolean), // Если все индивидуальные чекбоксы активны
      individual: updatedCheckboxes,
    });
  };
  
  // Значения Plus переменных зависят от состояний чекбоксов
  const PlusLumber = plusCheckboxes.individual[0] ? 25 : 0;
  const PlusClay = plusCheckboxes.individual[1] ? 25 : 0;
  const PlusIron = plusCheckboxes.individual[2] ? 25 : 0;
  const PlusCrop = plusCheckboxes.individual[3] ? 25 : 0;

  // Значение Заводов
  const FactoriesLumber = factories.lumber ? 25 : 0;
  const FactoriesClay = factories.clay ? 25 : 0;
  const FactoriesIron = factories.iron ? 25 : 0;
  const FactoriesCrop1 = factories.crop1 ? 25 : 0;
  const FactoriesCrop2 = factories.crop2 ? 25 : 0;  

  // Функция для получения бонусов оазиса
  const getOasisBonus = (oasisKey: string) => {
    return OasisData[oasisKey] || { lumber: 0, clay: 0, iron: 0, crop: 0 };
  };

  // Водопровод бонус
  const AqueductLevel = aqueductLevel * 5;

  // Получение бонусов для каждого выбранного оазиса
  const Oasis1Lumber = getOasisBonus(selectedOases[0]).lumber / 100 * AqueductLevel + getOasisBonus(selectedOases[0]).lumber;
  const Oasis1Clay = getOasisBonus(selectedOases[0]).clay / 100 * AqueductLevel + getOasisBonus(selectedOases[0]).clay;
  const Oasis1Iron = getOasisBonus(selectedOases[0]).iron / 100 * AqueductLevel + getOasisBonus(selectedOases[0]).iron;
  const Oasis1Crop = getOasisBonus(selectedOases[0]).crop / 100 * AqueductLevel + getOasisBonus(selectedOases[0]).crop;

  const Oasis2Lumber = getOasisBonus(selectedOases[1]).lumber / 100 * AqueductLevel + getOasisBonus(selectedOases[1]).lumber;
  const Oasis2Clay = getOasisBonus(selectedOases[1]).clay / 100 * AqueductLevel + getOasisBonus(selectedOases[1]).clay;
  const Oasis2Iron = getOasisBonus(selectedOases[1]).iron / 100 * AqueductLevel + getOasisBonus(selectedOases[1]).iron;
  const Oasis2Crop = getOasisBonus(selectedOases[1]).crop / 100 * AqueductLevel + getOasisBonus(selectedOases[1]).crop;

  const Oasis3Lumber = getOasisBonus(selectedOases[2]).lumber / 100 * AqueductLevel + getOasisBonus(selectedOases[2]).lumber;
  const Oasis3Clay = getOasisBonus(selectedOases[2]).clay / 100 * AqueductLevel + getOasisBonus(selectedOases[2]).clay;
  const Oasis3Iron = getOasisBonus(selectedOases[2]).iron / 100 * AqueductLevel + getOasisBonus(selectedOases[2]).iron;
  const Oasis3Crop = getOasisBonus(selectedOases[2]).crop / 100 * AqueductLevel + getOasisBonus(selectedOases[2]).crop;

  // Сумма всех ресурсов от трёх оазисов + заводы
  const OasisSumLumber = Oasis1Lumber + Oasis2Lumber + Oasis3Lumber + FactoriesLumber;
  const OasisSumClay = Oasis1Clay + Oasis2Clay + Oasis3Clay + FactoriesClay;
  const OasisSumIron = Oasis1Iron + Oasis2Iron + Oasis3Iron + FactoriesIron;
  const OasisSumCrop = Oasis1Crop + Oasis2Crop + Oasis3Crop + FactoriesCrop1 + FactoriesCrop2;

  // Результат вычисений (уровень поля * количество полей * Время)
  const prodLumber = calculateProduction(KplLumber, levels.lumber, serverSpeed);
  const prodClay = calculateProduction(KplClay, levels.clay, serverSpeed);
  const prodIron = calculateProduction(KplIron, levels.iron, serverSpeed);
  const prodCrop = calculateProduction(KplCrop, levels.crop, serverSpeed);

  // ЧВР без плюса
  const productionLumber = prodLumber / 100 * OasisSumLumber + prodLumber;
  const productionClay = prodClay / 100 * OasisSumClay + prodClay;
  const productionIron = prodIron / 100 * OasisSumIron + prodIron;
  const productionCrop = prodCrop / 100 * OasisSumCrop + prodCrop;

  // ЧВР с плюсом
  const productionLumberPL = productionLumber / 100 * PlusLumber + productionLumber;
  const productionClayPL = productionClay / 100 * PlusClay + productionClay;
  const productionIronPL = productionIron / 100 * PlusIron + productionIron;
  const productionCropPL = productionCrop / 100 * PlusCrop + productionCrop;

  // TotalProduction
  const TotalProduction = productionLumberPL + productionClayPL + productionIronPL + productionCropPL

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <div className="flex justify-between items-center mb-4">
          <select
            value={selectedNation}
            onChange={(e) => setSelectedNation(e.target.value)}
          >
            <option value="Галлы">Галлы</option>
            <option value="Римляни">Римляни</option>
            <option value="Тевтонцы">Тевтонцы</option>
            <option value="Гунны">Гунны</option>
            <option value="Египтяне">Египтяне</option>
            <option value="Спартанцы">Спартанцы</option>
            <option value="Викинги">Викинги</option>
          </select>
          <h2 className="text-lg font-semibold">{title}-{position}</h2>
          <button
            onClick={onClose}
            className="text-red-500 font-bold text-lg"
          >
            ×
          </button>
        </div>

        <table className="border-separate border-spacing-2 border border-slate-400 table-auto w-full">
          <tbody>
            <tr>
              <td>Ресурсы</td>
              <td className="text-center">
                <div className="flex justify-center">
                  <Icon.VillagesMenu.Villag4446 size="20px" />
                </div>
              </td>
              <td className="text-center">
                <div className="flex justify-center">
                  <Icon.VillagesMenu.Villag4446 size="20px" />
                </div>
              </td>
              <td className="text-center">
                <div className="flex justify-center">
                  <Icon.VillagesMenu.Villag4446 size="20px" />
                </div>
              </td>
              <td className="text-center">
                <div className="flex justify-center">
                  <Icon.VillagesMenu.Villag4446 size="20px" />
                </div>
              </td>
            </tr>
            <tr>
              <td className="">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-pink-500"
                    checked={plusCheckboxes.allChecked}
                    onChange={(e) => handleAllPlusCheckboxChange(e.target.checked)}
                  />
                  Плюс
                </div>
              </td>
              {plusCheckboxes.individual.map((isChecked, index) => (
                <td key={index} className="text-center group-2">
                  <input
                    type="checkbox"
                    className="accent-pink-500"
                    checked={isChecked}
                    onChange={(e) => handleIndividualPlusCheckboxChange(index, e.target.checked)}
                  />
                </td>
              ))}
            </tr>
            <tr>
              <td className="">Кол полей</td>
              <td className="text-center A1">{KplLumber}</td>
              <td className="text-center">{KplClay}</td>
              <td className="text-center">{KplIron}</td>
              <td className="text-center">{KplCrop}</td>
            </tr>
            <tr>
              <td>Ур полей</td>
              <td className="text-center">
                <select
                  className="w-full A2"
                  value={levels.lumber}
                  onChange={(e) => setLevels({ ...levels, lumber: Number(e.target.value) })}
                >
                  {Array.from({ length: 21 }, (_, i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </td>
              <td className="text-center">
                <select
                  className="w-full"
                  value={levels.clay}
                  onChange={(e) => setLevels({ ...levels, clay: Number(e.target.value) })}
                >
                  {Array.from({ length: 21 }, (_, i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </td>
              <td className="text-center">
                <select
                  className="w-full"
                  value={levels.iron}
                  onChange={(e) => setLevels({ ...levels, iron: Number(e.target.value) })}
                >
                  {Array.from({ length: 21 }, (_, i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </td>
              <td className="text-center">
                <select
                  className="w-full"
                  value={levels.crop}
                  onChange={(e) => setLevels({ ...levels, crop: Number(e.target.value) })}
                >
                  {Array.from({ length: 21 }, (_, i) => (
                    <option key={i} value={i}>{i}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td className="">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="accent-pink-500"
                    onChange={(e) => {
                      const checked = e.target.checked;
                      setFactories({
                        lumber: checked,
                        clay: checked,
                        iron: checked,
                        crop1: checked,
                        crop2: checked,
                      });
                    }}
                  />
                  Заводы
                </div>
              </td>
                {["lumber", "clay", "iron", "crop1", "crop2"].map((resource) => (
                  <td key={resource} className="text-center group-1">
                    <div className="flex items-center justify-center gap-2">
                      <input
                        type="checkbox"
                        className="accent-pink-500"
                        checked={factories[resource as keyof typeof factories]}
                        onChange={() => toggleFactory(resource as keyof typeof factories)}
                      />
                      <Icon.VillagesMenu.Villag4446 size="20px" />
                    </div>
                  </td>
                ))}
            </tr>
            <tr>
              <td>Производство</td>
              <td className="text-center A3">{productionLumberPL}</td>
              <td className="text-center">{productionClayPL}</td>
              <td className="text-center">{productionIronPL}</td>
              <td className="text-center">{productionCropPL}</td>
            </tr>
            <tr className="w-full">
              <td className="">ЧВР общее</td>
              <td className="text-center w-full" colSpan={4}>{TotalProduction}</td>
            </tr>
          </tbody>
        </table>

        <div>
          {selectedNation === "Египтяне" && (
            <div>
              <h2 className="font-bold text-lg mb-2">Водопровод</h2>
                <Select
                  options={Array.from({ length: 21 }, (_, i) => ({
                    value: i,
                    label: `Уровень ${i}`,
                  }))}
                  placeholder="Выберите уровень"
                  value={{ value: aqueductLevel, label: `Уровень ${aqueductLevel}` }}
                  onChange={(selectedOption: any) => setAqueductLevel(selectedOption.value)}
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      border: "1px solid #ccc",
                      borderRadius: "8px",
                      padding: "2px",
                      boxShadow: "none",
                      "&:hover": {
                        borderColor: "#888",
                      },
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      backgroundColor: state.isFocused ? "#f0f0f0" : "white",
                      color: "black",
                      "&:hover": {
                        backgroundColor: "#e0e0e0",
                      },
                    }),
                  }}
                />
            </div>
          )}
        </div>

         <table className="border-separate border-spacing-2 border border-slate-400 table-auto w-full">
          <thead>
            <tr>
              <th>Оазисы</th>
              <th>Выбор</th>
            </tr>
          </thead>
          <tbody>
            {[0, 1, 2].map((oasisNumber) => (
              <tr key={oasisNumber}>
                <td>Оазис {oasisNumber + 1}</td>
                <td>
                  <Select
                    options={oasisOptions}
                    placeholder="Выберите оазис"
                    value={getSelectedOptions(selectedOases)[oasisNumber]} // Связь с выбранным значением
                    onChange={(selectedOption) => handleOasisChange(oasisNumber, selectedOption)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <table>
          <tbody>
            <tr>
              <th>Д{FactoriesLumber}</th>
              <th>Г{FactoriesClay}</th>
              <th>Ж{FactoriesIron}</th>
              <th>З1{FactoriesCrop1}</th>
              <th>Водопровод {AqueductLevel}</th>
              <th>--{OasisSumLumber}</th>
              <th>--{OasisSumClay}</th>
              <th>--{OasisSumIron}</th>
              <th>--{OasisSumCrop}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>,
    document.body
  );
};

export default ModalNodaVillages;
