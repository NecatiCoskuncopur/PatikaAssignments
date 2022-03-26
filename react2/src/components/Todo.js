import React from 'react'

function Todo({ text, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter(el => el.id !== todo.id))
  } //Todo silme işlemini yapacak

  const completeHandler = () => {
    setTodos(todos.map((item) => {
      if (item.id === todo.id) {
        return {
          ...item, completed: !item.completed
        }
      }
      return item;
    }))
  }//Todonun tamamlanıp tamamlanmadığında dair işlemleri yapacak.


  return ( //Eğer Todo tamamlanmışsa className olarak completed ekleyecek yoksa null dönecek
    <li
      className={todo.completed ? 'completed' : null}>

      <div className="view">
        <input type="checkbox" className='toggle' checked={todo.complete} onChange={() => completeHandler(todo.id)} />
        <label>   {text}</label>
        <button className="destroy" onClick={() => deleteHandler(todo.id)} /> {/*Butona tıkladığımızda ilgili todoyu silecek */}
      </div>
    </li>
  )
}

export default Todo