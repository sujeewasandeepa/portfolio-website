import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

export default function Home () {

    return (
        <>

            <h1 className='text-5xl md:text-6xl lg:text-7xl text-center font-bold text-slate-500 m-10'>My Projects</h1>

            
            <div className='mx-10 grid lg:grid-cols-2 gap-10 md:grid-cols-2 sm-grid-cols-1'>
                <ul className='m-auto'>
                    <a
                    className='text-2xl text-slate-500 hover:text-slate-600 underline italic mb-10' 
                    href="https://drive.google.com/file/d/1BmCT0UWX-ZftVVNpjzLquxNGMXy9JgW-/view?usp=share_link">Download my CV
                    </a>

                    <Link to="/projects/attendy"><li type="disc" className='text-2xl text-slate-500 hover:text-slate-600 hover:underline'>Attendy</li></Link>
                    <Link to="/projects/portfolio-site"><li type="disc" className='text-2xl text-slate-500 hover:text-slate-600 hover:underline'>Portfolio Website</li></Link>
                    <Link to="/projects/rust-web"><li type="disc" className='text-2xl text-slate-500 hover:text-slate-600 hover:underline'>Rusty VPN</li></Link>
                </ul>

            </div>
        </>
    )
}
