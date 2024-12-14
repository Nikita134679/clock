import React, { useState } from 'react';
import Clock from './components/Clock';
import ClockForm from './components/ClockForm';
import { ClockType } from './types/clock';

const App: React.FC = () => {
  const [clocks, setClocks] = useState<ClockType[]>([]);

  const handleAddClock = (name: string, offset: number) => {
    const newClock: ClockType = {
      id: crypto.randomUUID(),
      name,
      offset,
    };
    setClocks([...clocks, newClock]);
  };

  const handleRemoveClock = (id: string) => {
    setClocks(clocks.filter((clock) => clock.id !== id));
  };

  return (
    <div className="App">
      <ClockForm onAddClock={handleAddClock} />
      <div className="clocks-container">
        {clocks.map((clock) => (
          <Clock
            key={clock.id}
            id={clock.id}
            name={clock.name}
            offset={clock.offset}
            onRemove={handleRemoveClock}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
