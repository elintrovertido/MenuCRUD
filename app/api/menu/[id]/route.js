import connectMongoDb from "@/libs/mongodb";
import Menu from "@/models/dish";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    await connectMongoDb();
    const { id } = params;
    const { 
        newDishName : dishName,
        newDishDescription : dishDescription,
        newDishPrice : dishPrice } = await request.json();
    await Menu.findByIdAndUpdate(id, { dishName, dishDescription, dishPrice })
    return NextResponse.json({ message: "Updated." }, { status: 200 })
}


export async function GET(request, {params}){
    await connectMongoDb();
    const {id} = params;
    const dish = await Menu.findOne({_id : id});
    return NextResponse.json({dish},{status : 200});
}

export async function DELETE(request,{params}){
    await connectMongoDb();
    const {id} = params;
    await Menu.findByIdAndDelete(id);
    return NextResponse.json({message : `deleted ${id}`},{status : 200})
}