import imageCute from "./assets/crying.gif";

export default function ErrorPage () {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <img src={imageCute} className="mb-4"/>
                <h1 className="text-3xl">Oopsie!</h1>
                <p className="p-3 text-xl">Sorry an unexpected error occured!</p>
            </div>
        </>
    )
}