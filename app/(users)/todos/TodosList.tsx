import { Todo } from '@/typings'
import React from 'react'
import Link from 'next/link'

const FetchTodos = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos: Todo[] = await res.json()
    return todos
}

async function TodosList() {
    const todos = await FetchTodos()

    return (
        <>
          {todos.map((todo) => (
            <div key={todo.id} className="bg-white shadow-lg rounded-lg m-4 p-4">
              <Link href={`/todos/${todo.id}`} className="text-blue-500 hover:underline">
                <p className="text-xl font-semibold">Todo: {todo.id}</p>
              </Link>
              {/* Add more content or styling here as needed */}
            </div>
          ))}
        </>
      );
      
}

export default TodosList
