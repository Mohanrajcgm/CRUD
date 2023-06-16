import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

export default function UserView() {
    let params=useParams()
    console.log(params)

    const [searchParams,setSearchParams]=useSearchParams()
    console.log(...searchParams)
  return (
    <>
    <div>{params.id}</div>
    <button onClick={()=> {
        setSearchParams({
            gender:"male",
            age:23
        })

    }} > change</button>
    </>
  );
}
