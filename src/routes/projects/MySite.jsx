export default function MySite () {
    return (
        <>
            <div className="flex flex-col my-10 items-center">
                <h1 className="text-5xl text-slate-600">Portfolio Website</h1>

                <div className="m-10 items-center">

                    <span className="text-slate-600 font-bold">Description: </span>
                    <p className="text-slate-600 mb-2">
                        My portfolio/personal website that I will use to showcase my personal
                        projects, and other content I find interesting. 
                    </p>

                    <span className="text-slate-600 font-bold">Github:</span>
                    <p className="text-slate-600 mb-2">
                        <a href="https://github.com/Team-4X" className="
                        text-slate-600 hover:text-slate-700 hover:underline
                        ">Portfolio-Website</a>
                    </p>

                    <span className="text-slate-600 font-bold">Technology Stack:</span>
                    <ul className="text-slate-600 ml-10 mb-2">
                        <li type="disc">React JS</li>
                        <li type="disc">Tailwind CSS</li>
                    </ul>

                    <span className="text-slate-600 font-bold">Features:</span>
                    <ul className="text-slate-600 ml-10 mb-2">
                        <li type="disc">Routing</li>
                        <li type="disc">Clean look</li>
                    </ul>                      
                    
                    <span className="text-slate-600 font-bold">Demonstration:</span>
                    {/* insert demonstration here */}

                </div>

            </div>
        </>
    )
}