
import './App.css';
import Button from './components/Button';
import CounterComponent from './components/CounterComponent';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

import "./style.css";
function App() {
  return (
    <div className='todo-container'> 
            <CounterComponent />

            <Header tent="Today Work" />
            <TodoItem completed={true} text="Eat" />
            <TodoItem completed={true} text="code"/>
            <TodoItem text="GYM"/>
            <TodoItem text="Sleep" />
            <Button /> 
    </div>
  );
}

export default App;
