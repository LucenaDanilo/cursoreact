import './App.css';

import FirstComponent from './components/FirstComponent';
import AnotherFunction from './components/AnotherFunction';
import Images from './components/images';
import Hooks from './components/Hooks';

function App() {
  return (
    <div className="App">
     <h2>Hello React</h2>
     <FirstComponent />
     <AnotherFunction />
     <Images />
     <Hooks />
    </div>
  );
}

export default App;
