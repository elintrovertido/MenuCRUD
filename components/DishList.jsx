import React from 'react';
import Link from 'next/link'
import { FiEdit } from 'react-icons/fi';
import { RemoveBtn } from './RemoveBtn';


const getMenu = async () => {

    const API_URL = process.env.URL;

    try {
        const result = await fetch(`${API_URL}/api/menu`,{cache: 'no-store'});
        return result.json();
    } catch (error) {
        console.log(error);
    }

}

const DishList = async () => {

    const {menu} = await getMenu();
    return (

        <div className="pt-4">

            {menu.map((dish) => (

                <div key={dish._id} className='display-list p-4 border border-slate-300
                    flex justify-between gap-4 m-2 '>
                    <div className='flex-row gap-1 mr-2 ml-2'>
                        <h2 className='dish-name font-bold text-lg'>{dish.dishName}</h2>
                        <div className='dish-desc'>{dish.dishDescription}</div>
                        <div className='font-bold font-mono text-lg'>${dish.dishPrice}</div>
                    </div>
                    <div className='flex gap-2 items-start'>
                        <RemoveBtn id={dish._id}/>
                        <Link href={`/updateDish/${dish._id}`}>
                            <FiEdit size={20}></FiEdit>
                        </Link>
                    </div>
                </div>

            ))}


        </div>

    )
}

export default DishList;