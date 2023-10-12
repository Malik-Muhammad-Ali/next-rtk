'use client'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchApiUsers } from '../redux/slice'

const ApiUsers = () => {

    const dispatch = useDispatch();
    const apiUsers = useSelector(data => data.user.apiUsers);

    useEffect(()=>{
        dispatch(fetchApiUsers());
    }, [])

  return (
    <>
        <h1>ApiUsers</h1>
        {
            apiUsers.map((user, index)=>{
                return(
                    <div key={index}>
                        <p>{user.name}</p>
                    </div>
                )
            })
        }
    </>
  )
}

export default ApiUsers;