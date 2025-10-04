"use client"
import { useEffect, useState } from "react"
import axios from 'axios';

export default function (){
    const [loading , setLoading] = useState(true);
    const [data , setData] = useState();

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => {
                setData(response.data);
                setLoading(false);
            })
    } ,[] );

    if(loading){
        return <div>
            Loading ...
        </div>
    }
    return (
        <>
        {/* Make it a card */}
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center border border-gray-50 rounded-lg p-8 pb-20 gap-16 sm:p-20">
            <h1 className="text-2xl font-bold">Todo's of the User : </h1>
            <p className="text-lg"> UserId : {data.userId} </p>
            <p className="text-lg"> Title : {data.title} </p>
        </div>
        </>
    )
} 