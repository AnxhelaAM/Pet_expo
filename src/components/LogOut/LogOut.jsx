import React, { useState } from 'react';

const LogOut = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleLogin} className="w-full max-w-md p-6 bg-white rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Login</button>
      </form>
      <div className="mt-4 text-center">
        <p>Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Create one</a></p>
      </div>
    </div>
  );
};

export default LogOut;
