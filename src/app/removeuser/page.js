'use client'

import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeUser } from '../redux/slice';

const RemoveUser = () => {

    const userData = useSelector((data)=> data.user.users);
    const dispatch = useDispatch();

    const removeSingleUser = (id) => {
        dispatch(removeUser(id));
    }

  return (
    <>
      <h1>Remove User</h1>
      {
        userData.map((user, index)=>{
            return(
                <div key={index}>
                    <h3>{user.name}</h3>
                    <button onClick={()=> removeSingleUser(user.id)}>Remove</button>
                </div>
            )
        })
      }
    </>
  )
}

export default RemoveUser;