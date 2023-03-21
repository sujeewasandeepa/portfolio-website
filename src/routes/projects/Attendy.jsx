export default function Attendy () {
    
    return (
        <>
            <div className="flex flex-col my-10 items-center">
                <h1 className="text-5xl text-slate-600">Attendy</h1>
                <div className="m-10 items-center md:mx-auto md:w-2/3">

                    <span className="text-slate-600 font-bold">Description: </span>
                    <p className="text-slate-600 mb-2">
                        Attendy is a web based attendance management system for schools. 
                    </p>

                    <span className="text-slate-600 font-bold">Github:</span>
                    <p className="text-slate-600 mb-2">
                        <a href="https://github.com/Team-4X" className="
                        text-slate-600 hover:text-slate-700 hover:underline
                        ">Team-4X</a>
                    </p>

                    <span className="text-slate-600 font-bold">Technology Stack:</span>
                    <ul className="text-slate-600 ml-10 mb-2">
                        <li type="disc">React JS</li>
                        <li type="disc">Express JS</li>
                        <li type="disc">MongoDB</li>
                        <li type="disc">Mongoose</li>
                        <li type="disc">Bulma CSS</li>
                    </ul>

                    <span className="text-slate-600 font-bold">Features:</span>
                    <ul className="text-slate-600 ml-10 mb-2">
                        <li type="disc">Authentication using passport</li>
                        <li type="disc">A dashboard</li>
                        <li type="disc">User management (<span className="italic">admins only</span>)</li>
                            <li type="square" className="ml-10">Remove students/teachers</li>
                            <li type="square" className="ml-10">Add students/teachers</li>
                            <li type="square" className="ml-10">Edit students/teachers</li>
                        <li type="disc">Mark student attendance</li>
                        <li type="disc">Mark teacher attendance</li>
                            <li type="square" className="ml-10">
                                Attendance is marked automatically when
                                the teacher first logs into the system every day.
                            </li>
                        <li type="disc">Student and Teacher Attendance Reports</li>
                    </ul>

                    <span className="text-slate-600 font-bold">Demonstration:</span>
                    {/* insert demonstration here */}
                    

                </div>
            </div>
        </>
    )
}