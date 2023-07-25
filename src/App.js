import logo from './logo.svg';
import './App.css';
import { Header } from './components';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { MainContainer, CreateContainer } from './components';

function App() {
  return (
    <AnimatePresence>
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />
        <main className='mt-24 p-8 w-full'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>

  );
}

export default App;