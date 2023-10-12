'use client'

import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../app/redux/slice';
import { removeAllUsers } from '../app/redux/slice';
import Link from 'next/link';

const AddUser = () => {

   const [name, setName] = useState('');
   const dispatch = useDispatch();

   const userDispatch = () => {
      dispatch(addUser(name));
   }

   const removeUsers = () => {
    dispatch(removeAllUsers());
   }

  return (
    <div className='adduser'>
        <h1>Add Users</h1>
        <input 
            type="text"
            placeholder='Enter User Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <button onClick={userDispatch}>Add User</button>
        <button onClick={removeUsers}>Remove All Users</button>
        <Link href='/removeuser'>Remove user Page</Link>
    </div>
  )
}

export default AddUser;