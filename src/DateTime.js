import React, { useState, useEffect } from 'react';

const DateTime = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Update the date and time every second

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="date-time">
      {dateTime.toLocaleString()}
    </div>
  );
};

export default DateTime;
