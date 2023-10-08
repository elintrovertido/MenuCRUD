import connectMongoDb from "@/libs/mongodb";
import Menu from "@/models/dish";
import { NextResponse } from "next/server";

export async function POST(request){
    const {dishName, dishDescription, dishPrice} = await request.json();
    await connectMongoDb();
    await Menu.create({dishName, dishDescription, dishPrice});
    return NextResponse.json({message : "Created."}, {status : 200})

};

export async function GET(){
    await connectMongoDb();
    const menu = await Menu.find();
    return NextResponse.json({menu});
};

