import React, { useState } from 'react';

interface ClockFormProps {
  onAddClock: (name: string, offset: number) => void;
}

const ClockForm: React.FC<ClockFormProps> = ({ onAddClock }) => {
  const [name, setName] = useState('');
  const [offset, setOffset] = useState(0);

  const handleSubmit = () => {
    if (!name.trim()) {
      alert('Поле обязательно для заполнения.');
      return;
    }
    onAddClock(name, offset);
    setName('');
    setOffset(0);
  };

  return (
    <div className="form">
      <div className="form-group">
        <label htmlFor="clock-name">Название</label>
        <input
          id="clock-name"
          type="text"
          placeholder="Введите название"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="clock-offset">Временная зона</label>
        <input
          id="clock-offset"
          type="number"
          placeholder="Часовой пояс (± от GMT)"
          value={offset}
          onChange={(e) => setOffset(Number(e.target.value))}
        />
      </div>
      <button onClick={handleSubmit}>Добавить</button>
    </div>
  );
};

export default ClockForm;
