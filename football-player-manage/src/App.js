import './App.css';
import { useSelector } from 'react-redux';
import SearchInput from './components/SearchInput';

function App() {
  const players = useSelector((state) => state.players);
  return (
    <div className="App">
      <button style={{marginBottom: "15px"}}
        onClick={(e) => {
            console.log(players);
          }}>Test</button>

        <br/>
        
      <SearchInput/>

    </div>
  );
}

export default App;
