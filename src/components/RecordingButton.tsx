import React, { useState } from 'react';

interface RecordingButtonProps {
  onRecordingStart: () => void;
  onRecordingStop: () => void;
}

export const RecordingButton: React.FC<RecordingButtonProps> = ({
  onRecordingStart,
  onRecordingStop,
}) => {
  const [isRecording, setIsRecording] = useState(false);

  const handleClick = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      if (!isRecording) {
        setIsRecording(true);
        onRecordingStart();
      } else {
        stream.getTracks().forEach(track => track.stop());
        setIsRecording(false);
        onRecordingStop();
      }
    } catch (err) {
      console.error('Error accessing microphone:', err);
      alert('É necessário permitir acesso ao microfone para gravar a consulta.');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-6 py-2.5 rounded-lg transition-colors text-sm font-medium ${
        isRecording
          ? 'bg-red-500 text-white animate-pulse'
          : 'border border-[#4B0082] text-[#4B0082] hover:bg-[#4B0082] hover:text-white'
      }`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
      {isRecording ? 'Gravando...' : 'Gravar consulta'}
    </button>
  );
};