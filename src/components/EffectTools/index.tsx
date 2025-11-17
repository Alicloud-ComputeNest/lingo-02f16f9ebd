import React, { useState } from 'react';
import { Sun, Cloud, Grid, Zap, Sparkles, Waves, Palette, Sliders } from 'lucide-react';

interface Effect {
  id: string;
  name: string;
  icon: string;
}

const effectsData: Effect[] = [
  { id: 'glow', name: '辉光效果', icon: 'Sun' },
  { id: 'blur', name: '模糊效果', icon: 'Cloud' },
  { id: 'pixelate', name: '像素化', icon: 'Grid' },
  { id: 'chromatic', name: '色差效果', icon: 'Zap' },
  { id: 'noise', name: '噪点纹理', icon: 'Sparkles' },
  { id: 'wave', name: '波浪扭曲', icon: 'Waves' }
];

const EffectTools: React.FC = () => {
  const [activeEffect, setActiveEffect] = useState<string | null>(null);
  const [intensity, setIntensity] = useState<number>(50);

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Sun': return <Sun size={20} />;
      case 'Cloud': return <Cloud size={20} />;
      case 'Grid': return <Grid size={20} />;
      case 'Zap': return <Zap size={20} />;
      case 'Sparkles': return <Sparkles size={20} />;
      case 'Waves': return <Waves size={20} />;
      default: return <Palette size={20} />;
    }
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">特效工具</h2>
        <button className="tool-btn">
          <Sliders size={20} />
        </button>
      </div>
      
      <div className="grid grid-cols-3 gap-3 mb-6">
        {effectsData.map((effect) => (
          <div
            key={effect.id}
            onClick={() => setActiveEffect(activeEffect === effect.id ? null : effect.id)}
            className={`tool-btn flex flex-col items-center p-4 cursor-pointer ${
              activeEffect === effect.id ? 'active' : ''
            }`}
          >
            <div className="mb-2 text-neon-purple">
              {getIconComponent(effect.icon)}
            </div>
            <span className="text-xs text-center">{effect.name}</span>
          </div>
        ))}
      </div>
      
      {activeEffect && (
        <div className="glass-panel p-4 mb-4 animate-slide-up">
          <div className="flex justify-between mb-2">
            <span className="text-sm">强度</span>
            <span className="text-sm text-neon-purple">{intensity}%</span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={intensity}
            onChange={(e) => setIntensity(parseInt(e.target.value))}
            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-neon-purple"
          />
          <div className="flex justify-between mt-4">
            <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition">
              应用
            </button>
            <button 
              className="px-4 py-2 bg-purple-900 rounded-lg hover:bg-purple-800 transition"
              onClick={() => setActiveEffect(null)}
            >
              完成
            </button>
          </div>
        </div>
      )}
      
      <div className="glass-panel p-4 flex-1">
        <h3 className="font-semibold mb-3">调色板</h3>
        <div className="grid grid-cols-6 gap-2">
          {['#6d28d9', '#ec4899', '#10b981', '#3b82f6', '#f59e0b', '#ef4444'].map((color) => (
            <div
              key={color}
              className="w-8 h-8 rounded-lg cursor-pointer border-2 border-transparent hover:border-white transition"
              style={{ backgroundColor: color }}
            />
          ))}
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 cursor-pointer border-2 border-transparent hover:border-white transition" />
        </div>
      </div>
    </div>
  );
};

export default EffectTools;