import React, { useEffect, useState } from 'react';
import { ClockType } from '../types/clock';

interface ClockProps extends ClockType {
  onRemove: (id: string) => void;
}

const Clock: React.FC<ClockProps> = ({ id, name, offset, onRemove }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeWithOffset = () => {
    const localTime = new Date();
    const utcTime = localTime.getTime() + localTime.getTimezoneOffset() * 60000;
    return new Date(utcTime + offset * 3600000);
  };

  return (
    <div className="clock">
      <h3>{name}</h3>
      <p>{getTimeWithOffset().toLocaleTimeString()}</p>
      <button onClick={() => onRemove(id)}>Удалить</button>
    </div>
  );
};

export default Clock;