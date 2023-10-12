'use client'

import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { removeUser } from '../app/redux/slice';

const DisplayUser = () => {

  const dispatch = useDispatch();

  const removeSingleUser = (id)=>{
    dispatch(removeUser(id));
  }

  const userData = useSelector(data => data.user.users);
  return (
    <div className='displayuser'>
      <h1>Display Users</h1>
      {
        userData.map(((user, index)=>{
          return(
            <div key={index}>
              <p>{user.name}</p>
              <button onClick={()=> removeSingleUser(user.id)}>Remove User</button>
            </div>
          )
        }))
      }
    </div>
  )
}

export default DisplayUser;