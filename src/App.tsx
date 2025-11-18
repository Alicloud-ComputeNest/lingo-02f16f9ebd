import React from 'react';
import mockJson from './mock.json';
import DigitalCanvas from './components/DigitalCanvas';
import EffectTools from './components/EffectTools';
import PublishManager from './components/PublishManager';

const mockData = mockJson;

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          NFT Art Studio
        </h1>
        <p className="text-gray-400 mt-2">Create your digital masterpieces</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <DigitalCanvas />
        </div>
        <div className="space-y-6">
          <EffectTools effects={mockData.effects} />
          <PublishManager artworks={mockData.artworks} />
        </div>
      </div>
    </div>
  );
}

export default App;