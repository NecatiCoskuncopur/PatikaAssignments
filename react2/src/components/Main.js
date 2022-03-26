import React from 'react'
import Todo from './Todo';

function Main({ todos, setTodos, filteredTodos }) {


  return (
    <section className='main'>
      <ul className='todo-list'>
        {filteredTodos.map((todo) => (
          <Todo //Her bir todos da bulunan text ve id prop olarak Todo componentine yollanıyor
            text={todo.text} 
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            todo={todo}
          />

        ))

        }
      </ul>
    </section>
  )
}

export default Main