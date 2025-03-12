'use client'; 

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:5000/api');
      setMessage(res.data.message);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}
