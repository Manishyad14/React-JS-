import {useState} from 'react' ;

function App() {
  return (
    <div className="App">
     <h1>Counters that Update seperately</h1>

     <MyButton/>
     <MyButton/>
    </div>
  );
}

export default App;

function MyButton() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}
