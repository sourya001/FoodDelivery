import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://2023ugee048:JVJebDmwY2FFQaUj@cluster0.2bqmly3.mongodb.net/Project 0').then(()=>console.log("DB Connected"));
}
