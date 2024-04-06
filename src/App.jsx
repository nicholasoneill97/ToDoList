import { useState } from "react"

export default function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState ([])
  
  function handleSubmit(e) {
    e.preventDefault()

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title: newItem, completed:false },
      ]
    })
    setNewItem('')
  }

  function toggleTodo (id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed}
        }
        return todo
      })
    })
    deleteTodo()
}
    function deleteTodo(id) {
      setTodos(currentTodos => {
        return currentTodos.filter(todo => todo.id !== id)
      })
    }
  

  return (
  <>
  <form onSubmit={handleSubmit} className="new-item-form flex flex-row gap-4 justify-start mt-20 px-3">
    <div className="form-row">
      <label htmlFor="item">New Task:</label>
      <input type="text" value={newItem} onChange={e => setNewItem(e.target.value)} id="text" className="bg-slate-300 rounded ml-3 border border-black text-center"/>
    </div>
    <button className="border border-black w-12">Add</button>
  </form>
  
  <ul className="flex flex-col justify-center align-middle mt-6 px-4">

    {todos.length === 0 && 'No Tasks on List'}
    {todos.map(todo => {
      return (
      <li key={todo.id} className= "">
      <label className="mr-2 w-6">
        <input type="checkbox" checkbox={todo.completed} onChange={e =>toggleTodo(todo.id, e.target.checked)} className="mr-2" />
        {todo.title}
       </label>
       <button onClick={() => deleteTodo(todo.id)} className="border px-1 py-1">Delete</button>
    </li> )
    })}
  </ul>
  </>
  )
}