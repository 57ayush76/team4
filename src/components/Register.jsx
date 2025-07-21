import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Register() {
  const { role } = useParams();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h2 className="text-2xl font-semibold mb-4 capitalize">{role} Registration</h2>
      <form action={`/register/${role}`} method="POST" className="space-y-4 w-96">
        <input type="text" name="name" placeholder="Name" className="input" required />
        <input type="email" name="email" placeholder="Email" className="input" required />
        <input type="password" name="password" placeholder="Password" className="input" required />
        <button type="submit" className="btn-primary">Register</button>
        <p className="text-sm mt-2">
          Already registered?{' '}
          <button type="button" className="text-blue-600 underline" onClick={() => navigate(`/login/${role}`)}>
            Login here
          </button>
        </p>
      </form>
    </div>
  );
}

export default Register;
