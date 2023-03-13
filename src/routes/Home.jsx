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
                    <Card></Card>
                </div>
                
                <div className=''>
                    <Card></Card>
                </div>

                <div className=''>
                    <Card></Card>
                </div>

            </div>
        </>
    )
}
