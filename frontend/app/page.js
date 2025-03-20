
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-x-4">
        <Link href="/login">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
              Login
            </button>
        </Link>
        <Link href="/register">

            <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
              Register
            </button>
        </Link>
      </div>
    </div>
  );
}


// 'use client'; 

// import axios from 'axios';
// import { useEffect, useState } from 'react';

// export default function Home() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get('http://localhost:5000/');
//       setMessage(res.data.message);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="flex justify-center items-center h-screen">
//       {message}
//       <div className="space-x-4">
//         <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
//           Login
//         </button>
//         <button className="px-6 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700">
//           Register
//         </button>
//       </div>
//     </div>
//   );
// }
