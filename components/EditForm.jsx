"use client"

import { useRouter } from "next/navigation";
import React,{useState} from 'react'

const EditForm = (props) => {

    const {id,name,desc,price} = props;

    const [newDishName, setnewDishName] = useState(name)
    const [newDishDescription, setnewDishDescription] = useState(desc)
    const [newDishPrice, setnewDishPrice] = useState(price)
    
    const router = useRouter()

    const empty = () => {
        setnewDishName("")
        setnewDishDescription("")
        setnewDishPrice("")
    }

    
    const handleClick = async (e) => {
        e.preventDefault();

        if (!newDishName || !newDishDescription || !newDishPrice) {
            alert("Please fill all the Details.");
            return
        }

        try {

            const result = await fetch(`/api/menu/${id}`,
                {
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({ newDishName, newDishDescription, newDishPrice })
                })

            if (result.ok) {
                router.refresh()
                router.push("/")
            } else {
                throw new Error("Failed to create new Dish")
            }

        } catch (error) {
            console.log(error);
        }

        empty()
    }

    return (
        <div>
            <form className='container flex flex-col gap-4 px-5 py-5 mt-2 mx-2 mb-5'>

                <h1 className="text-2xl font-extrabold">Edit Your Dish.</h1>

                <input type="text"
                    className='border border-grey-300 p-3 mt-3 rounded-md'
                    placeholder='Enter Dish Name'
                    value={newDishName}
                    onChange={(e) => setnewDishName(e.target.value)}
                ></input>

                <textarea type="text"
                    className='border border-grey-300 p-3 mt-1 rounded-md'
                    placeholder='Enter Dish Name'
                    value={newDishDescription}
                    onChange={(e) => setnewDishDescription(e.target.value)} />

                <input type="text"
                    className='border border-grey-300 p-3 mt-1 rounded-md'
                    placeholder='Enter Dish Price'
                    value={newDishPrice}
                    onChange={(e) => setnewDishPrice(e.target.value)} />

                <button className="button bg-green-800 text-white
        p-2 border rounded-xl font-semibold  px-12"

                    onClick={handleClick}>Update Dish</button>


            </form>
        </div>
    )
}

export default EditForm