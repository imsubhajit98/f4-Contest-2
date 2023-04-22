
import './App.css';
// import Navbar from './component/Navbar';
import Video from './component/Video';

function App() {
  let name="Subhajit";
  return (
    <div className="App">
      <div className="App-header">
        Hello, {name}
        <Video bgColor='red' title='Web'></Video>
        <Video bgColor='green' title='App'></Video>
      </div>
    </div>
  );
}

export default App;
