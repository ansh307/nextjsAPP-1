import { Todo } from '@/typings'
import React from 'react'
import { notFound } from 'next/navigation'


type PageProps = {
    params: {
        todoId: string
    }
}

const fetchTodo = async (todoId: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, { next: { revalidate: 60 } })
    const todo: Todo = await res.json();
    return todo;
}

async function TodoPage({ params: { todoId } }: PageProps) {
    const todo = await fetchTodo(todoId);
    if(!todo.id) return notFound()
    return (
        <div className="rounded-lg shadow-lg p-4 m-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
          <div className="font-bold text-2xl">User ID: {todo.userId}</div>
          <div className="text-xl">ID: {todo.id}</div>
          <div className="text-gray-700 text-lg">Title: {todo.title}</div>
          <div
            className={`bg-${todo.completed ? 'red' : 'green'}-600 text-white font-semibold rounded-full p-2 mt-4`}
          >
            {todo.completed ? 'Completed' : 'Not Completed'}
          </div>
        </div>
      );
      
}

export default TodoPage

export async function generateStaticParams() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos")
    const todos: Todo[] = await res.json()

    const trimmedTodos = todos.splice(0, 10)

    return trimmedTodos.map(todo => ({
        todoId: todo.id.toString()
    }))
}