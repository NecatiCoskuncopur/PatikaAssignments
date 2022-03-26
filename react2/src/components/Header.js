import React from 'react'
import {v4 as uuidv4} from 'uuid' // npm install uuid

function Header({ setInputText, todos, setTodos, inputText }) {

  const inputTextHandler = (e) => {
    setInputText(e.target.value) //input alanındaki değişiklikler için
  }

  const submitTodoHandler = (e) => {
    e.preventDefault();
      if(inputText === '') { // Eğer boş bir todo eklenmeye çalışılırsa alert verecek
        alert (' Please enter a todo')
        return false
      }
    setTodos([...todos, {text: inputText, completed: false, id: uuidv4() }]); //Daha önceki todoları saklayacak ve üstüne yeni eklediğimiz todoyu set edecek. uuid yardımıyla id oluşturucağız.
    setInputText('') // daha sonra input alanının içini boşaltacak
  }
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={submitTodoHandler}>
        <input
          type="text"
          className='new-todo'
          placeholder='What needs to be done?'
          onChange={inputTextHandler}
          value={inputText}
          id='new-todo'
        />
      </form>
    </header>
  )
}

export default Header