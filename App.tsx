
import React from 'react';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center p-8">
        <span className="text-gray-300 text-sm font-bold">Main Content</span>
      </main>
    </div>
  );
};

export default App;