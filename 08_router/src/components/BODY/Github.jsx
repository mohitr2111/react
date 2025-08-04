import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/mohitr2111')
    //     .then(Response => Response.json())
    //     .then(data=>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className='bg-gray-700 text-white text-3xl p-4'>Github followers: {data.followers}
    <img className='text-center' src={data.avatar_url}
    alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubFollower = async()=>{
    const res = await fetch('https://api.github.com/users/mohitr2111') 
    return res.json();
}