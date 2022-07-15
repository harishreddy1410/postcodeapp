import './App.css';
import CodeSearchComponent from './Components/CodeSearchComponent';

function App() {
  return (
    <div className="App form-container">          
      <header className="App-header">
        <h2 className='black'>UK Postcode search</h2>
        <label>Example : NE3 1AA</label>
        <CodeSearchComponent />
      </header>
    </div>
  );
}

export default App;
