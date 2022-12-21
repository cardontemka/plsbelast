import './App.css';
import { Tank } from './components/Tank';

function App() {
  return (
    <div className="App">
      {console.log('re-render')}
      <Tank/>
    </div>
  );
}

export default App;
