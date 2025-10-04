import axios from "axios";


export default async function Page() {
    {/*Using our own backend to fetch data on the server side */}
    const response  = await axios.get("http://localhost:3000/api/vi/user/todo");
    const data = response.data;

    return (
        <>
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center border border-gray-50 rounded-lg p-8 pb-20 gap-16 sm:p-20">
            <h1 className="text-2xl font-bold">Todo's of the User : </h1>
            <p className="text-lg"> UserId : {data.userId} </p>
            <p className="text-lg"> Title : {data.title} </p>
        </div>
        </>
    )
};
