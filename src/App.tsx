import React, { useState } from 'react';
import DigitalCanvas from './components/DigitalCanvas';
import EffectTools from './components/EffectTools';
import PublishManager from './components/PublishManager';
import { Palette, Zap, Upload, User, Menu, X } from 'lucide-react';

const App: React.FC = () => {
  const [activePanel, setActivePanel] = useState<'canvas' | 'effects' | 'publish'>('canvas');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen bg-dark">
      {/* Header */}
      <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-3">
            <Palette className="text-white" size={20} />
          </div>
          <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            NFT Studio
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="hidden md:flex items-center px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
            <User size={18} className="mr-2" />
            <span>创作者账户</span>
          </button>
          <button 
            className="md:hidden tool-btn p-2"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className={`${sidebarOpen ? 'w-64' : 'w-0 md:w-20'} transition-all duration-300 bg-gray-900/50 border-r border-gray-800 flex flex-col overflow-hidden`}>
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => setActivePanel('canvas')}
                  className={`w-full flex items-center p-3 rounded-lg transition-all ${
                    activePanel === 'canvas'
                      ? 'bg-purple-900/50 text-neon-purple border border-neon-purple/30'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  <Palette size={20} className="mr-3" />
                  <span className={`${sidebarOpen ? 'inline' : 'hidden md:inline'}`}>数字画布</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePanel('effects')}
                  className={`w-full flex items-center p-3 rounded-lg transition-all ${
                    activePanel === 'effects'
                      ? 'bg-purple-900/50 text-neon-purple border border-neon-purple/30'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  <Zap size={20} className="mr-3" />
                  <span className={`${sidebarOpen ? 'inline' : 'hidden md:inline'}`}>特效工具</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActivePanel('publish')}
                  className={`w-full flex items-center p-3 rounded-lg transition-all ${
                    activePanel === 'publish'
                      ? 'bg-purple-900/50 text-neon-purple border border-neon-purple/30'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  <Upload size={20} className="mr-3" />
                  <span className={`${sidebarOpen ? 'inline' : 'hidden md:inline'}`}>发布管理</span>
                </button>
              </li>
            </ul>
          </nav>
          
          <div className="p-4 border-t border-gray-800">
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-3">
              <div className="text-sm font-medium mb-1">存储空间</div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full w-3/4"></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">75% 已使用</div>
            </div>
          </div>
        </aside>
        
        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="h-full">
            {activePanel === 'canvas' && <DigitalCanvas />}
            {activePanel === 'effects' && <EffectTools />}
            {activePanel === 'publish' && <PublishManager />}
          </div>
        </main>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-md border-t border-gray-800 p-3 text-center text-sm text-gray-500">
        NFT Studio © 2023 - 数字艺术创作平台
      </footer>
    </div>
  );
};

export default App;