import './App.css';
import Header from './components/home/header/Header';
import HomePage from './components/pagecontent/HomePage';

import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <>

        <Header />
      <Routes>
 
          <Route path='/' element={<HomePage />} /> 
     
      </Routes>
    </>
  );
}

export default App;
