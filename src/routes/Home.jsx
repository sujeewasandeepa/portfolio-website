import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

export default function Home () {

    return (
        <>

            <h1 className='text-6xl md:text-8xl lg:text-9xl text-center font-bold text-slate-500 m-10'>My Projects</h1>

            
            <div className='mx-10 grid lg:grid-cols-2 gap-10 md:grid-cols-2 sm-grid-cols-1'>
                <ul className='m-auto'>
                    <Link to="/projects/attendy"><li type="disc" className='text-3xl text-slate-500'>Attendy</li></Link>
                    <Link to="/projects/attendy"><li type="disc" className='text-3xl text-slate-500'>Portfolio Website</li></Link>
                    <Link to="/projects/attendy"><li type="disc" className='text-3xl text-slate-500'>Rust Webserver</li></Link>
                </ul>
            </div>
        </>
    )
}
