import React from 'react';

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl">Welcome to the Ticketing System</h1>
      <p className="mt-4 text-lg">Please log in or view your tickets.</p>
      <a href="/login" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
        Go to Login
      </a>
    </div>
  );
}
