import './App.css';
import ListWithAddItem from './Components/ListWithAddItem';

function App() {
  return (
    <div className="App form-container"> 
         
      <header className="App-header">
        <h2 className='black'>UK Postcode search</h2>
        <label>Example : NE3 1AA</label>
        <ListWithAddItem />
      </header>
    </div>
  );
}

export default App;
