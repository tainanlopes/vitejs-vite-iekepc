import React from 'react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'clinico', label: 'Clínico' },
    { id: 'hipoteses', label: 'Hipóteses' },
    { id: 'protocolos', label: 'Protocolos' },
  ];

  return (
    <nav className="flex gap-8">
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`pb-3 -mb-[1px] text-sm font-medium ${
            activeTab === tab.id
              ? 'text-[#4B0082] border-b-2 border-[#4B0082]'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};