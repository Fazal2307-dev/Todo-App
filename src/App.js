
import './App.css';
import Button from './components/Button';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import "./style.css"

function App() {
  return (
    <div className="todo-contaainer">
        <Header />
        <TodoItem />
        <Button />
    </div>
  );
}

export default App;
