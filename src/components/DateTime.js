// DateTime.js
import React, { useEffect, useState } from 'react';

const DateTime = () => {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  return <div className="date-time">{now.toLocaleString()}</div>;
};

export default DateTime;
