import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <a href="http://localhost:5000/auth/google" className="bg-blue-500 text-white px-4 py-2 rounded">
        Sign in with Google
      </a>
    </div>
  );
}
