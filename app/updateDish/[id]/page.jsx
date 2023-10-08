import React from 'react'
import EditForm from '@/components/EditForm';

const getDishById = async (id)=>{
    
    const API_URL = process.env.API_URL;

    try {
        const result = await fetch(`${API_URL}/api/menu/${id}`,{
            cache : 'no-store'
        })
        if(result.ok){
            console.log(result)
            return result.json()
        }else{
            throw new Error("Dish Not Found");
        }
    } catch (error) {
        console.log(error)
    }
    
    
}


const Page = async ({ params }) => {

   const {id} = params;
   const {dish} = await getDishById(id);
   const {dishName,dishDescription,dishPrice} = dish
   console.log(dishName,dishDescription,dishPrice)
    return (
        <EditForm id={id} name={dishName} desc={dishDescription} price={dishPrice}/>
    )
}

export default Page