import React from 'react';

interface TranscriptionAreaProps {
  transcription: string;
}

export const TranscriptionArea: React.FC<TranscriptionAreaProps> = ({ transcription }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-6">
      <h3 className="text-sm font-medium text-gray-700 mb-3">Transcrição da consulta</h3>
      <div className="h-[calc(100vh-480px)] bg-white rounded-lg border border-gray-200 p-4 overflow-y-auto">
        {transcription || 'A transcrição aparecerá aqui...'}
      </div>
    </div>
  );
};