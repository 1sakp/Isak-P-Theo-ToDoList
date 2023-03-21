import logo from './logo.svg';
import './App.css';

function Header(){
  return(
    <div> 
      <h1>Todo Matic</h1>
    </div>
  )
}

function Subheading(){
  return(
    <div>
      <h2>What needs to be done</h2>
    </div>
  )
}

function Input(){
  return(
    <div>
      <input></input>
      <button>Add</button>
    </div>
  )
}

function Buttons(){
  return(
    <div>
      <button>Show all tasks</button>
      <button>Show active tasks</button>
      <button>Show completed tasks</button>
    </div>
  )
}

function Subheading2(){
  return(
    <div>
      <h2>3 Tasks Remaining</h2>
    </div>
  )
}

function List(){
  return(
    <list>
      <ul>
        <li>
          <input type="checkbox" name="checkbox"/>
          <label for="checkbox">Eat</label>
          <br></br>
          <button>Edit Eat</button>
          <button>Delete Eat</button>
          <br></br>
          <input type="checkbox" name="checkbox"/>
          <label for="checkbox">Sleep</label>
          <br></br>
          <button>Edit Sleep</button>
          <button>Delete Sleep</button>
          <br></br>
          <input type="checkbox" name="checkbox"/>
          <label for="checkbox">Repeat</label>
          <br></br>
          <button>Edit Repeat</button>
          <button>Delete Repeat</button>
          <br></br>
        </li>
      </ul>
    </list>
  )
}

function App() {
  return (
    <div className="">
      <Header />
      <Subheading />
      <Input/>
      <Buttons/>
      <Subheading2/>
      <List/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;