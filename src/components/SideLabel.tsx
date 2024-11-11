interface SideLabelProps {
  onClick: () => void;
}

export const SideLabel = ({ onClick }: SideLabelProps) => {
  console.log('Rendering SideLabel');
  
  return (
    <div 
      className="fixed right-0 top-1/3 bg-[#4B0082] w-16 h-32 rounded-l-lg cursor-pointer z-[9999] flex flex-col items-center justify-center gap-2"
      onClick={onClick}
    >
      <div className="text-white font-bold text-2xl">IA</div>
      <div className="text-white font-medium text-xl rotate-180" style={{ writingMode: 'vertical-rl' }}>
        Leve
      </div>
    </div>
  );
};