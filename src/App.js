import './App.css';
import Main from './components/Main';
import Model3 from './components/Model3';
import ModelS from './components/ModelS';
import ModelX from './components/ModelX';
import ModelY from './components/ModelY';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faGlobe, faQuestionCircle, faUser)

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="tesla-website" exact element={<Main/>}/>
          <Route path="/model3" element={<Model3/>}/>
          <Route path="/models" element={<ModelS/>}/>
          <Route path="/modelx" element={<ModelX/>}/>
          <Route path="/modelY" element={<ModelY/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
