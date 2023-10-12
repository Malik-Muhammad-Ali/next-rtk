'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addTodo, removeTodo } from '../redux/todoSlice';
import Link from 'next/link';

const Todos = () => {

    const [todo, setTodo] = useState('');
    const dispatch = useDispatch();
    const todoData = useSelector((data)=> data.todo.todos);

    const todoDispatch = () => {
        dispatch(addTodo(todo));
    }

    const removeTodoData = (id) => {
        dispatch(removeTodo(id));
    }

  return (
    <>
        <Link href='/'>Users</Link>
        <h1>Todo List</h1>
        <input 
            type="text"
            placeholder='Add Todo'
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}
        />
        <button onClick={todoDispatch}>Add Todo</button>
        {
            todoData.map((data, index)=>(
                <div key={index}>
                    <h3>{data.title}</h3>
                    <button onClick={()=> removeTodoData(data.id)}>Remove</button>
                </div>
            ))
        }
    </>
  )
}

export default Todos;