import axios from "axios";

{/* Using async/await to fetch data on the server side */}
export default async function Page() {
    const response  = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    const data = response.data;

    return (
        <>
        {/* Correct Way to hit the backend */}
        {/* Go in the network tab and see the first request and it is the data directly */}
        { /* It is good for SEO also */ }
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center border border-gray-50 rounded-lg p-8 pb-20 gap-16 sm:p-20">
            <h1 className="text-2xl font-bold">Todo's of the User : </h1>
            <p className="text-lg"> UserId : {data.userId} </p>
            <p className="text-lg"> Title : {data.title} </p>
        </div>
        </>
    )
};
