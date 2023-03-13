import 'tailwindcss/tailwind.css';
import Card from '../components/Card';
import pic1 from "../assets/dashboard-not-logged-in.png";
export default function Home () {
    return (
        <>

            {/* <h1 className='sm:text-5xl md:text-8xl lg:text-9xl text-center font-bold text-slate-500 m-10'>My Projects</h1>
             */}
            <h1 className='text-6xl md:text-8xl lg:text-9xl text-center font-bold text-slate-500 m-10'>My Projects</h1>

            
            <div className='mx-10 grid lg:grid-cols-2 gap-10 md:grid-cols-2 sm-grid-cols-1'>

                <div className=''>
                    <Card 
                        title="Attendy"
                        description="Attendy is a web application that will manage attendance for a school."
                        imageSrc={pic1}
                        myRole={"Project Manager and Developer"}
                        myRoleDesc="I was the project manager and a developer for this project. I was in charge of managing the project and developing some parts of it."
                        workList={["Implement authentication", "Implement a dashboard", "Manage the code base", "Assign group members to tasks"]}
                        link="https://github.com/Team-4X"
                    ></Card>
                </div>


            </div>
        </>
    )
}
