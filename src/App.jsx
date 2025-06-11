import React from 'react';

export default function App() {
  const handleSubscribe = () => {
    window.location.href = 'https://buy.stripe.com/test_4gw4jQ4tQ1yd6SAbIL';
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center text-center">
      <img src="/logo.png" alt="Reduxir Logo" className="w-32 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Bienvenido a Reduxir</h1>
      <p className="mb-6 text-gray-700">Transforma tu salud con un plan personalizado.</p>
      <button
        onClick={handleSubscribe}
        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
      >
        Suscríbete ahora
      </button>
    </div>
  );
}
