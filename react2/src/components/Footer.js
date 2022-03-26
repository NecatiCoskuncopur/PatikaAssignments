import React from 'react'

function Footer({ setStatus, status, todos, setTodos }) {

  const CompletedTodos = todos.filter(item => item.completed === true);

  const removeCompletedTodo = () => {
    const filtered = todos.filter(item => item.completed === false)
    setTodos(filtered)
  } //Tamamlanmış todoları siler.
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong> {CompletedTodos.length} </strong>
        item completed
      </span>
      {/* Tamamlanmış todoları ekrana dinamik olarak yazdırmamızı sağlayacak */}
      <ul className="filters">
        <li>
          <button onClick={(e) => { setStatus("All") }} className={status === "All" ? 'selected' : null}>All</button>
        </li>
        <li>
          <button onClick={(e) => { setStatus("Active") }} className={status === "Active" ? 'selected' : null}>Active</button>
        </li>
        <li>
          <button onClick={(e) => { setStatus("Completed") }} className={status === "Completed" ? 'selected' : null}>Completed</button>
        </li>
      </ul>
      {/* Tıkladığımız butona göre bütün todoları - aktif todoları - tamamlanmış todoları gösterecek */}
      {
        CompletedTodos.length > 0
          ? <button className="clear-completed" onClick={() => removeCompletedTodo()}>Clear completed</button>
          : null
      }
      {/* Eğer tamamlanmış todoların sayısı 0'dan büyükse buton aktif olacak ve bu butonla tamamlanmış todoları silebileceğiz. */}
    </footer>
  )
}

export default Footer