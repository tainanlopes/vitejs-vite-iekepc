import { useState } from 'react';
import { SideLabel } from './components/SideLabel';
import { MainInterface } from './components/MainInterface';

const App = () => {
  console.log('App component rendering');
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    console.log('Opening interface');
    setIsOpen(true);
  };

  const handleClose = () => {
    console.log('Closing interface');
    setIsOpen(false);
  };

  return (
    <>
      <SideLabel onClick={handleOpen} />
      <MainInterface isOpen={isOpen} onClose={handleClose} />
    </>
  );
};

export default App;