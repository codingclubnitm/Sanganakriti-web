import Hero from 'components/HomeHero';
import './App.css';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Hero/>} />
          
       </Routes>

    </>
  )
  
}

export default App;
