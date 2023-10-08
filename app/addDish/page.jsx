"use client";

import React, { useState } from 'react'
import { useRouter } from "next/navigation";

const Page = () => {


    const [dishName,setDishName] = useState("")
    const [dishDescription,setDishDescription] = useState("")
    const [dishPrice,setDishPrice] = useState("")

    const router = useRouter()

    const empty = () =>{
        setDishName("")
        setDishDescription("")
        setDishPrice("")
    }

    const handleClick = async (e)=>{
        e.preventDefault();
        
        if(!dishName || !dishDescription || !dishPrice){
            alert("Please fill all the Details.");
            return
        }

        try {
            
            const result  = await fetch(`/api/menu`,
            {
                method : "POST",
                headers : {
                    "Content-type" : "application/json"
                },
                body : JSON.stringify({dishName,dishDescription,dishPrice})
            })

            if(result.ok){
                router.refresh()
                router.push("/")
            }else{
                throw new Error("Failed to create new Dish")
            }

        } catch (error) {
            console.log(error);
        }
        empty()
    }

    return (
        <div>
            <form className='container flex flex-col gap-4 px-5 py-5 mt-2 mb-5'>

            <h1 className="text-2xl font-extrabold">Add Your Dish.</h1>

                <input type="text"
                    className='border border-grey-300 p-3 mt-3 rounded-md'
                    placeholder='Enter Dish Name' 
                    value={dishName}
                    onChange={(e)=>setDishName(e.target.value)}
                ></input>

                <textarea type="text" rows={3}
                    className='border border-grey-300 p-3 mt-1 rounded-md'
                    placeholder='Enter Dish Name'
                    value={dishDescription}
                    onChange={(e)=>setDishDescription(e.target.value)} />

                <input type="text"
                    className='border border-grey-300 p-3 mt-1 rounded-md'
                    placeholder='Enter Dish Price'
                    value={dishPrice}
                    onChange={(e)=>setDishPrice(e.target.value)} />

                <button className="button bg-green-800 text-white
                p-2 border rounded-xl font-semibold  px-12"
                
                onClick={handleClick}>Add Dish</button>


            </form>
        </div>
    )
}

export default Page
