"use client"

import { useRouter } from "next/navigation";
import React from 'react';
import { AiOutlineDelete } from "react-icons/ai";

export const RemoveBtn = (props) => {

  const { id } = props;
  const router = useRouter();

  const handleSubmit = async (e)=>{
    const result = await fetch(`/api/menu/${id}`,
    {
      method : "DELETE"
    })
    if(result.ok){
      router.refresh()
    }
  }

  

  return (

    <button className='text-red-700' onClick={handleSubmit}>
      <AiOutlineDelete size={24}></AiOutlineDelete>
    </button>

  )
}
