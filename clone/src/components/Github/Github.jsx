import React, { useEffect, useState } from 'react'


function Github() {
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch('https://api.github.com/users/debasishghosh-lab')
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            
            setData(data)})
    },[])
  return (
    <>
        <div className='text-center p-4 bg-gray-700 text-fuchsia-50'>Github Followers:{data.followers}
                  <img src={data.avatar_url} alt="git_image" width={200} />

        </div>
    </>
  )
}

export default Github