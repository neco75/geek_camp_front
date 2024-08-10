import React, { useState } from 'react';

interface Option {
  value: string;
  label: string;
}

const DropdownList: React.FC = () => {

  const options: Option[] = [
      { value: '0', label: '日本全国' },
      { value: '1', label: '北海道' },
      { value: '2', label: '東北' },
      { value: '3', label: '関東' },
      { value: '4', label: '中部' },
      { value: '5', label: '近畿' },
      { value: '6', label: '中国' },
      { value: '7', label: '四国' },
      { value: '8', label: '九州' },
    ];
    
  const [selectedOption, setSelectedOption] = useState<Option | null>(options[0]);
  const [isArrowActive, setArrowActive] = useState(false);


  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selected = options.find((option) => option.value === selectedValue);
    setSelectedOption(selected || null);
  };

  const arrowClassName = `select-arrow ${isArrowActive ? 'active' : ''}`;

  return (
    <div className="container mb-5 w-full tect-container">
      <h2>行きたい地方を選択してください</h2>
      <div className="mt-2 rounded-lg shadow w-40 flex justify-center mx-auto">
    
        <select
          value={selectedOption?.value || ''}
          onChange={handleSelectOption}
          onFocus={() => setArrowActive(true)}
          onBlur={() => setArrowActive(false)}
          className='w-40 text-center '
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className={arrowClassName}></div>
        
      </div>
    </div>
  );
};

export default DropdownList;