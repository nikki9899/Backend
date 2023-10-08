import mongoose from "mongoose";

const  productModel=new mongoose.Schema({
    name:String,
    price:String,
    type:String,
    src:String,
    alt:String
});
export const Product = mongoose.models.products || mongoose.model("products",productModel);