export default function MySite () {
    return (
        <>
            <div className="flex flex-col my-10 items-center">
                <h1 className="ml-10 text-5xl text-slate-600">Rust Webserver</h1>

                <div className="m-10 items-center">

                    <span className="text-slate-600 font-bold">Description: </span>
                    <p className="text-slate-600 mb-2">
                         
                    </p>

                    <span className="text-slate-600 font-bold">Github:</span>
                    <p className="text-slate-600 mb-2">
                        <a href="" className="
                        text-slate-600 hover:text-slate-700 hover:underline
                        ">Rust-Webserver</a>
                    </p>

                    <span className="text-slate-600 font-bold">Technology Stack:</span>
                    <ul className="text-slate-600 ml-10 mb-2">
                        <li type="disc">stuff 01</li>
                        <li type="disc">stuff 02</li>
                    </ul>

                    <span className="text-slate-600 font-bold">Features:</span>
                    <ul className="text-slate-600 ml-10 mb-2">
                        <li type="disc">stuff </li>
                        <li type="disc">stuff here as well</li>
                    </ul>                      
                    
                    <span className="text-slate-600 font-bold">Demonstration:</span>
                    <p className="text-slate-600"> -- insert a video of me doing stuff -- </p>
                    {/* insert demonstration here */}

                </div>

            </div>
        </>
    )
}