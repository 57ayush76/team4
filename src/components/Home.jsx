import React from 'react';
import { useNavigate } from 'react-router-dom';

const roles = ['supplier', 'manufacturer', 'distributor', 'pharma'];

function Home() {
  const navigate = useNavigate();

  const handleSelect = (e) => {
    const role = e.target.value;
    if (role) {
      navigate(`/register/${role}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Medicine Supply Chain</h1>
      <select
        onChange={handleSelect}
        className="p-3 rounded-md border border-gray-300 shadow-sm w-72"
        defaultValue=""
      >
        <option value="" disabled>Select Role to Register/Login</option>
        {roles.map(role => (
          <option key={role} value={role}>{role.charAt(0).toUpperCase() + role.slice(1)}</option>
        ))}
      </select>
    </div>
  );
}

export default Home;
