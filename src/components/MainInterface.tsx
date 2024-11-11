import { useState } from 'react';
import { Upload, Sparkles } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HypothesesTab } from './HypothesesTab';
import { RecordingButton } from './RecordingButton';
import { TranscriptionArea } from './TranscriptionArea';

interface MainInterfaceProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MainInterface = ({ isOpen, onClose }: MainInterfaceProps) => {
  const [transcription, setTranscription] = useState('');

  console.log('MainInterface render, isOpen:', isOpen);

  if (!isOpen) return null;

  const handleRecordingStart = () => {
    setTranscription('Gravando...');
  };

  const handleRecordingStop = () => {
    setTranscription('Gravação finalizada. Processando...');
  };

  return (
    <div className="fixed right-0 top-0 h-screen w-[400px] bg-white shadow-lg z-[10000] flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <img 
            src="logo.png" 
            alt="Leve Saúde" 
            className="h-8" 
          />
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>
        
        <Tabs defaultValue="clinico" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-transparent p-0">
            <TabsTrigger 
              value="clinico"
              className="data-[state=active]:bg-transparent data-[state=active]:text-[#4B0082] data-[state=active]:border-b-2 data-[state=active]:border-[#4B0082] data-[state=active]:shadow-none rounded-none text-sm font-medium"
            >
              Clínico
            </TabsTrigger>
            <TabsTrigger 
              value="hipoteses"
              className="data-[state=active]:bg-transparent data-[state=active]:text-[#4B0082] data-[state=active]:border-b-2 data-[state=active]:border-[#4B0082] data-[state=active]:shadow-none rounded-none text-sm font-medium"
            >
              Hipóteses
            </TabsTrigger>
            <TabsTrigger 
              value="protocolos"
              className="data-[state=active]:bg-transparent data-[state=active]:text-[#4B0082] data-[state=active]:border-b-2 data-[state=active]:border-[#4B0082] data-[state=active]:shadow-none rounded-none text-sm font-medium"
            >
              Protocolos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="clinico" className="mt-4">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">História Clínica</h2>
              <p className="text-sm text-gray-600 mb-6">Grave a consulta completa e deixe que a AI gere as notas para o seu prontuário.</p>
              
              <div className="flex gap-2 mb-6">
                <RecordingButton
                  onRecordingStart={handleRecordingStart}
                  onRecordingStop={handleRecordingStop}
                />
                <button className="flex items-center gap-2 px-6 py-2.5 border rounded-lg text-gray-600 hover:bg-gray-50 text-sm font-medium">
                  <Upload size={16} />
                  Upload de exames
                </button>
              </div>

              <TranscriptionArea transcription={transcription} />

              <button 
                className="fixed bottom-20 right-4 flex items-center gap-2 px-6 py-2.5 bg-[#F59E0B] text-white rounded-lg hover:bg-[#D97706] transition-colors text-sm font-medium"
              >
                <Sparkles size={16} />
                Gerar hipóteses
              </button>
            </div>
          </TabsContent>

          <TabsContent value="hipoteses">
            <HypothesesTab />
          </TabsContent>

          <TabsContent value="protocolos">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Protocolos Clínicos</h2>
              <p className="text-sm text-gray-600 mb-6">Acesse protocolos e diretrizes médicas.</p>
              <p className="text-sm text-gray-500">Em desenvolvimento...</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="mt-auto p-4 text-xs text-center text-gray-500 border-t border-gray-200">
        <a
          href="https://medhy.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#4B0082] hover:underline"
        >
          Powered by Medhy
        </a>
      </div>
    </div>
  );
};