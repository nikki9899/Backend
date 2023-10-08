import { connectionSrt } from "@/lib/db";
import { User } from "@/lib/model/user";
import mongoose from "mongoose"
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';



export async function POST(req,res){
    try{
        const reqData = await req.json();
        console.log(reqData);
        await mongoose.connect(connectionSrt);
        console.log(reqData.email);
        const reqEmail = reqData.email;
        const password = reqData.password;
        const user = await User.findOne({email : reqEmail});
        if(user === null)
        return NextResponse.json({success:false});
        const flag = await bcrypt.compare(password,user.password)
        console.log(flag);
        if(flag)
        return NextResponse.json({user,success:true});
        else
        return NextResponse.json({success:false});
    }catch(error){
        console.log(error);
        return NextResponse.json({status:500,success:false});

    }
}