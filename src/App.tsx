import React from 'react';
import DigitalCanvas from './components/DigitalCanvas';
import EffectTools from './components/EffectTools';
import PublishManager from './components/PublishManager';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500">
            NFT Art Studio
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Dashboard</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Marketplace</li>
              <li className="hover:text-cyan-400 transition-colors cursor-pointer">Profile</li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <DigitalCanvas />
          </div>
          <div>
            <EffectTools />
            <div className="mt-8">
              <PublishManager />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;