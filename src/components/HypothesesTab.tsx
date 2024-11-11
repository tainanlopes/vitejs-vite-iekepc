import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Síndrome Hemolítico-Urêmica (SHU)', value: 45, color: '#00A3C4' },
  { name: 'Púrpura Trombocitopênica Idiopática (PTI)', value: 25, color: '#6366F1' },
  { name: 'Trombose da veia porta', value: 15, color: '#D946EF' },
  { name: 'Doença Hepática Aguda (ex: Hepatite Viral)', value: 15, color: '#F59E0B' }
];

export const HypothesesTab = () => {
  return (
    <div className="p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">Hipóteses Geradas</h2>
      <p className="text-sm text-gray-600 mb-6">Com base em exames e sintomas</p>
      
      <div className="h-[300px] relative mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-3xl font-bold text-gray-900">16</span>
          <p className="text-sm text-gray-600">Hipóteses</p>
        </div>
      </div>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-sm text-gray-700">{item.name}</span>
            </div>
            <span className="text-sm font-medium text-gray-900">{item.value}%</span>
          </div>
        ))}
        <div className="flex items-center justify-between text-sm text-gray-500 pt-2 border-t">
          <span>E mais 12 hipóteses</span>
          <span>9%</span>
        </div>
      </div>
    </div>
  );
};