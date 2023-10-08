import { connectionSrt } from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose"
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

export async function POST(req,res){
    console.log(req);
    try{
        await mongoose.connect(connectionSrt)
        const request = await req.json();
        
        const hashedPassword = await bcrypt.hash(request.password,10);
        const newUser = await User.create({
            name : request.name,
            email : request.email,
            password : hashedPassword
        })
        await newUser.save();
        return NextResponse.json({newUser,success:true});
    }catch(error){
        return NextResponse.json({error,success:false})
    }

}