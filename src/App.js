import logo from './logo.svg';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faQuestionCircle, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AppHeader from './components/AppHeader';
import Main from './components/Main';

library.add(faGlobe, faQuestionCircle, faUser)

function App() {
  return (
    <div className="App">
      <AppHeader logo={logo}/>
      <Main />
    </div>
  );
}

export default App;
