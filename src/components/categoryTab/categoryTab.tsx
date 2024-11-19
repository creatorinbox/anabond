"use client";
import { useState } from 'react';
import Chemistry from './chemistry';
import Application from './application';
import Industry from './industry';

type Tab = {
    id: string;
    label: string;
  };
  const CategoryTab: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('tab1');
  
    const renderContent = () => {
      switch (activeTab) {
        case 'tab1':
          return <Industry />;
        case 'tab2':
          return <Chemistry />;
        case 'tab3':
          return <Application />;
        default:
          return <p>Content not available.</p>;
      }
    };
  
    const tabs: Tab[] = [
      { id: 'tab1', label: 'Industry' },
      { id: 'tab2', label: 'Chemistry' },
      { id: 'tab3', label: 'Application' },
    ];

  return (
    <div className="flex flex-col py-10 px-0 container max-w-[1048px] m-auto">
      <h2 className="uppercase text-white text-center font-bold text-lg md:text-xl">Find your product</h2>
    <div className="flex items-center justify-center w-full py-5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`w-[130px] h-10 text-white ${activeTab === tab.id ? 'bg-red-600 hover:bg-red-800 rounded-full' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="tab-content">{renderContent()}</div>
    </div>
  )
}

export default CategoryTab
