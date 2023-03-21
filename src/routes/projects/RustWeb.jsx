export default function MySite () {
    return (
        <>
            <div className="flex flex-col my-10 items-center">
                <h1 className="mx-5 text-5xl text-slate-600">Rusty VPN</h1>

                <div className="m-10 items-center md:mx-auto md:w-2/3">

                    <span className="text-slate-600 font-bold">Description: </span>
                    <p className="text-slate-600 mb-2 w-100">
                        I am trying to make a VPN with Rust programming language. My goal is to get 
                        familiar with Rust and also to learn how VPNs work. I am planning to use the
                        OpenVPN protocol for this project. But let's see. This is subjected to change. 
                    </p>

                    <span className="text-slate-600 font-bold">Github:</span>
                    <p className="text-slate-600 mb-2">
                        <a href="" className="
                        text-slate-600 hover:text-slate-700 hover:underline
                        ">Rusty-VPN</a>
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