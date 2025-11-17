import React, { useRef, useEffect, useState } from 'react';
import { fabric } from 'fabric';
import { v4 as uuidv4 } from 'uuid';

interface CanvasObject {
  id: string;
  type: string;
  data: any;
}

const DigitalCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricCanvasRef = useRef<fabric.Canvas | null>(null);
  const [objects, setObjects] = useState<CanvasObject[]>([]);
  const [selectedTool, setSelectedTool] = useState<string>('select');

  useEffect(() => {
    if (canvasRef.current) {
      // 初始化Fabric.js画布
      const canvas = new fabric.Canvas(canvasRef.current, {
        width: 800,
        height: 600,
        backgroundColor: '#1a1a2e',
        selection: true,
        preserveObjectStacking: true
      });
      
      fabricCanvasRef.current = canvas;
      
      // 添加初始网格背景
      const grid = 20;
      for (let i = 0; i < (canvas.width || 0); i += grid) {
        canvas.add(new fabric.Line([i, 0, i, canvas.height || 0], {
          stroke: '#2d2d44',
          selectable: false
        }));
      }
      for (let i = 0; i < (canvas.height || 0); i += grid) {
        canvas.add(new fabric.Line([0, i, canvas.width || 0, i], {
          stroke: '#2d2d44',
          selectable: false
        }));
      }
      
      // 设置事件监听器
      canvas.on('object:added', (e) => {
        if (!e.target) return;
        const obj = e.target;
        const newObj: CanvasObject = {
          id: uuidv4(),
          type: obj.type,
          data: obj.toObject()
        };
        setObjects(prev => [...prev, newObj]);
      });
      
      canvas.on('mouse:down', (options) => {
        if (selectedTool === 'brush') {
          // 实现画笔功能
          const pointer = canvas.getPointer(options.e);
          const circle = new fabric.Circle({
            radius: 5,
            fill: '#ec4899',
            left: pointer.x,
            top: pointer.y,
            selectable: false
          });
          canvas.add(circle);
        }
      });
    }
    
    return () => {
      fabricCanvasRef.current?.dispose();
    };
  }, [selectedTool]);
  
  const handleAddShape = (shapeType: string) => {
    if (!fabricCanvasRef.current) return;
    
    let shape: fabric.Object;
    
    switch (shapeType) {
      case 'rectangle':
        shape = new fabric.Rect({
          width: 100,
          height: 100,
          fill: '#6d28d9',
          stroke: '#a855f7',
          strokeWidth: 2,
          left: 200,
          top: 200
        });
        break;
        
      case 'circle':
        shape = new fabric.Circle({
          radius: 50,
          fill: '#ec4899',
          stroke: '#f472b6',
          strokeWidth: 2,
          left: 200,
          top: 200
        });
        break;
        
      case 'triangle':
        shape = new fabric.Triangle({
          width: 100,
          height: 100,
          fill: '#10b981',
          stroke: '#34d399',
          strokeWidth: 2,
          left: 200,
          top: 200
        });
        break;
        
      default:
        return;
    }
    
    fabricCanvasRef.current.add(shape);
    fabricCanvasRef.current.setActiveObject(shape);
  };
  
  const handleClearCanvas = () => {
    if (fabricCanvasRef.current) {
      fabricCanvasRef.current.clear();
      setObjects([]);
    }
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">数字画布</h2>
        <div className="flex space-x-2">
          <button 
            onClick={() => setSelectedTool('select')}
            className={`tool-btn ${selectedTool === 'select' ? 'active' : ''}`}
          >
            选择
          </button>
          <button 
            onClick={() => setSelectedTool('brush')}
            className={`tool-btn ${selectedTool === 'brush' ? 'active' : ''}`}
          >
            画笔
          </button>
          <button 
            onClick={() => handleAddShape('rectangle')}
            className="tool-btn"
          >
            矩形
          </button>
          <button 
            onClick={() => handleAddShape('circle')}
            className="tool-btn"
          >
            圆形
          </button>
          <button 
            onClick={() => handleAddShape('triangle')}
            className="tool-btn"
          >
            三角形
          </button>
          <button 
            onClick={handleClearCanvas}
            className="tool-btn bg-red-900/50 hover:bg-red-800/50"
          >
            清空
          </button>
        </div>
      </div>
      
      <div className="flex-1 flex items-center justify-center bg-gray-900/50 rounded-xl border border-gray-700 p-4">
        <div className="relative">
          <canvas 
            ref={canvasRef} 
            className="border border-gray-700 rounded-lg shadow-lg"
          />
          <div className="absolute -bottom-8 left-0 right-0 text-center text-sm text-gray-400">
            800 × 600 px
          </div>
        </div>
      </div>
      
      <div className="mt-4 glass-panel p-4">
        <h3 className="font-semibold mb-2">图层 ({objects.length})</h3>
        <div className="max-h-32 overflow-y-auto">
          {objects.length > 0 ? (
            objects.map((obj, index) => (
              <div key={obj.id} className="flex items-center py-1 text-sm">
                <span className="mr-2">•</span>
                <span>{obj.type} #{index + 1}</span>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-sm">暂无图层</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default DigitalCanvas;