import { connectionSrt } from "@/lib/db";
import mongoose from "mongoose";
import { Product } from "@/lib/model/product";
import { NextResponse } from "next/server";

export  async function GET(req, res) {
  let data = [];
  let success = true;
  try{
      await mongoose.connect(connectionSrt);
      data = await Product.find();
  }catch(error){
      data = {result:"error"}
      success = false
  }
  return NextResponse.json({result:data,success})
}
export async function postHandler(req, res) {
    try {
      await mongoose.connect(connectionSrt);
  
      const products = [
        {
           
            name: 'Gulmohar Suit',
            type: 'Printed Flared Kurta',
            price: '5000 INR',
            src: "https://m.media-amazon.com/images/I/511unZchV5L._AC_UL480_FMwebp_QL65_.jpg",
            alt: 'Image1',
        },
        {
           
           name: 'Choice it',
            type: 'Embriodery A-Line Suit',
            price: '8000 INR',
            src: 'https://m.media-amazon.com/images/I/61RZVR99JDL._AC_UL480_FMwebp_QL65_.jpg',
            alt: 'Image2',
        },
        {
           
            name: 'Natural Tradition',
            type: 'floral print Kurta',
           price: '3000 INR',
            src: "https://m.media-amazon.com/images/I/612MK5U7faL._AC_UL480_FMwebp_QL65_.jpg",
            alt: 'Image3',
        },
        {
            
            name: 'Libas',
           type: 'ethnic wear',
            price: '6000 INR',
            src: "https://m.media-amazon.com/images/I/51LfzsMZAWL._AC_UL480_FMwebp_QL65_.jpg",
            alt: 'Image4',
        },
        {
            
            name: 'Libas',
           type: 'full body suit',
            price: '5000 INR',
            src: "https://m.media-amazon.com/images/I/71mpj2x9uaL._AC_UL480_FMwebp_QL65_.jpg",
            alt: 'Image1',
        },
        {
            
            name: 'Sakura',
          type: 'Embriodery Suit',
            price: '8000 INR',
            src: "https://m.media-amazon.com/images/I/61q-JREtrAL._AC_UL480_FMwebp_QL65_.jpg",
            alt: 'Image2',
        },
        {
            
            name: 'Fashor',
            type: 'Embhellished Straight Kurta',
            price: '3000 INR',
            src: "https://m.media-amazon.com/images/I/71AVWq2YADL._AC_UL480_FMwebp_QL65_.jpg",
            alt: 'Image3',
        },
        {
            
            name: 'ASHLEE',
            type: 'full body suit',
            rice: '6000 INR',
            src: "https://m.media-amazon.com/images/I/71T-yPIj-sL._AC_UL480_FMwebp_QL65_.jpg",
            alt: 'Image4',
        },
       
      ];
  
      const results = await Product.insertMany(products);
  
      mongoose.connection.close(); 
  
      res.status(201).json({ results, success: true });
    } catch (error) {
      console.error("Error saving products:", error);
      res.status(500).json({ success: false, error: "Internal server error" });
    }
  }