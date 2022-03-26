import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);


  useEffect(() => {
    getLocalTodos()
  }, []) //Sayfa yüklendiğinde bir kere çalışacak ve local storagedan todoları almamızı sağlayacak.

  useEffect(() => { // bir switch case yapısı kurarak todoların durumlarını kontrol ediyoruz.
    const filterHandler = () => {
      switch (status) {
        case 'Completed':
          setFilteredTodos(todos.filter(todo => todo.completed === true));
          break;
        case 'Active':
          setFilteredTodos(todos.filter(todo => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    }

    const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos)) //Todoları local storage a ekler.
    }


    filterHandler()
    saveLocalTodos()
  }, [todos, status])



  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    }
    else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  } //Todoları local storagedan çekmemizi sağlıyor.
  return (
    <>
      <section className="todoapp">
        <Header
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          inputText={inputText}
        />
        <Main
          todos={todos}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
        />

        <Footer
          setStatus={setStatus}
          status={status}
          todos={todos}
          setTodos={setTodos}
        />

      </section>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://github.com/NecatiCoskuncopur">Necati Coşkunçopur</a></p>

      </footer>
    </>
  );
}

export default App;
