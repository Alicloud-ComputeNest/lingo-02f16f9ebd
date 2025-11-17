import React, { useState } from 'react';
import { mockData } from '../../mock.json';
import { Eye, Heart, Share2, Download, Upload, Settings, Tag, Globe } from 'lucide-react';

interface Artwork {
  id: string;
  title: string;
  creator: string;
  price: string;
  likes: number;
  views: number;
  image: string;
}

const PublishManager: React.FC = () => {
  const [artworks] = useState<Artwork[]>(mockData.artworks);
  const [activeTab, setActiveTab] = useState<'publish' | 'manage'>('publish');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [royalties, setRoyalties] = useState(10);

  return (
    <div className="h-full flex flex-col">
      <div className="flex border-b border-gray-700 mb-4">
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'publish'
              ? 'text-neon-purple border-b-2 border-neon-purple'
              : 'text-gray-400 hover:text-white'
          }`}
          onClick={() => setActiveTab('publish')}
        >
          发布作品
        </button>
        <button
          className={`py-2 px-4 font-medium ${
            activeTab === 'manage'
              ? 'text-neon-purple border-b-2 border-neon-purple'
              : 'text-gray-400 hover:text-white'
          }`}
          onClick={() => setActiveTab('manage')}
        >
          作品管理
        </button>
      </div>

      {activeTab === 'publish' ? (
        <div className="flex-1 flex flex-col">
          <div className="glass-panel p-4 mb-4">
            <h3 className="font-semibold mb-3">作品信息</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-1">标题</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="为您的作品命名"
                />
              </div>
              
              <div>
                <label className="block text-sm mb-1">描述</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="描述您的创作灵感和过程"
                  rows={3}
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">价格 (ETH)</label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="0.00"
                  />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">版税 (%)</label>
                  <input
                    type="number"
                    min="0"
                    max="50"
                    value={royalties}
                    onChange={(e) => setRoyalties(parseInt(e.target.value) || 0)}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-4 mb-4">
            <h3 className="font-semibold mb-3">属性设置</h3>
            <div className="flex flex-wrap gap-2">
              {['抽象', '赛博朋克', '极简主义', '未来主义', '数字艺术'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-purple-900/50 rounded-full text-sm cursor-pointer hover:bg-purple-800/50 transition"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-auto">
            <button className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 animate-pulse-slow">
              发布到区块链
            </button>
            <div className="text-center text-xs text-gray-500 mt-2">
              预估Gas费用: 0.012 ETH
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1">
          <h3 className="font-semibold mb-3">已发布作品</h3>
          <div className="space-y-4">
            {artworks.map((artwork) => (
              <div key={artwork.id} className="glass-panel p-4 flex">
                <div className="w-16 h-16 rounded-lg bg-gray-800 mr-4 flex-shrink-0" />
                <div className="flex-1">
                  <h4 className="font-medium">{artwork.title}</h4>
                  <p className="text-sm text-gray-400">{artwork.creator}</p>
                  <div className="flex items-center mt-2 text-sm">
                    <div className="flex items-center mr-4">
                      <Eye size={16} className="mr-1" />
                      {artwork.views}
                    </div>
                    <div className="flex items-center mr-4">
                      <Heart size={16} className="mr-1" />
                      {artwork.likes}
                    </div>
                    <div className="text-neon-purple font-medium">{artwork.price}</div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button className="tool-btn p-2">
                    <Share2 size={16} />
                  </button>
                  <button className="tool-btn p-2">
                    <Settings size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PublishManager;