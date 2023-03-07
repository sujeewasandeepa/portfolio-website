import 'tailwindcss/tailwind.css';
import Card from '../components/Card';
import pic1 from "../assets/dashboard-not-logged-in.png";
export default function Home () {
    return (
        <>
            <div className="bg-gradient-to-t from-slate-400 via-slate-200 to-white h-100 mt-0 pb-5">
                <h1 className="text-7xl font-bold text-center text-slate-500 pt-5">My Projects</h1>
                <div className='px-10 mt-10 flex sm:mx-0 lg:mx-8'>
                    <Card
                        title="Attendy"
                        link="https://github.com/Team-4X"
                        description="A web based attendance management system. Our goal is to digitalize
                        the process of attendance management in educational institutes (mainly schools). To
                        save the valuable time of students and teachers. So they can focus on more important
                        tasks."
                        myRole="Project Manager / developer"
                        myRoleDesc="I managed the git repository, assigned tasks to my team members and implemented
                        many parts of system."
                        workList={['Authentication', 'Marking Attendance', 'Managing Staff members', 'side bar']}
                        imageSrc={pic1}
                    />

                </div>
                <div className='px-10 mx-10 flex sm:flex-col sm:mx-0 lg:mx-8 lg:flex-row'>
                    <Card
                        title="Portfolio Website"
                        link=""
                        description="fdfd"
                        myRole="fdfd"
                        myRoleDesc="fdfd"
                        workList={["ffddf", "fdfd"]}
                        imageSrc={pic1}
                    />
                    <Card
                        title="Attendy"
                        link="https://github.com/Team-4X"
                        description="A web based attendance management system. Our goal is to digitalize
                        the process of attendance management in educational institutes (mainly schools). To
                        save the valuable time of students and teachers. So they can focus on more important
                        tasks."
                        myRole="Project Manager / developer"
                        myRoleDesc="I managed the git repository, assigned tasks to my team members and implemented
                        many parts of system."
                        workList={['Authentication', 'Marking Attendance', 'Managing Staff members', 'side bar']}
                        imageSrc={pic1}
                    />

                </div>
                

            </div>
        </>
    )
}
