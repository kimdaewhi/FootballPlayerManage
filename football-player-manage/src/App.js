import './App.css';
import { useSelector } from 'react-redux';
import SearchInput from './components/SearchInput';
import PlayerInformation from './components/DetailInfo/PlayerInformation';

function App() {
  const players = useSelector((state) => state.players);
  return (
    <div className="App">
      <SearchInput/>
      <hr/>
      <PlayerInformation/>
    </div>
  );
}

export default App;
