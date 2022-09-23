import Counter from './Counter';
import './App.css';

const MyName = (props) => {
  return (
<div>My name is {props.name}</div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <MyName name = "Manisha"/>
      <MyName name = "Chirag"/>
      <MyName name = "Sachi"/>
      <MyName name = "Jiaan"/>
      <Counter countFrom = {0} />
      <Counter countFrom = {0} />
      <Counter countFrom = {0} />
      <Counter countFrom = {0} />
      <Counter countFrom = {0} />
      <Counter countFrom = {0} />
    </div>
  );
}

export default App;
