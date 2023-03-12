import 'tailwindcss/tailwind.css';

export default function Welcome () {

    return(
        <>
            {/* <div className="bg-gradient-to-t from-slate-200 via-slate-100 to-white h-100 mt-0 pb-5">
             */}
             <div className='flex flex-col items-center justify-center h-full sm:m-5'>
                <h1 className="sm:text-5xl center font-bold text-center text-slate-500 pt-5 lg:text-9xl ">Hello</h1>
                <h2 className='text-9xl center font-bold text-center text-green-400 pt-5'>Welcome</h2>
                <h1 className='text-9xl center font-bold text-center text-slate-800'>I<span className='text-slate-400 hover:text-green-400'>'</span>m 
                    <span className='text-slate-800 hover:bg-gradient-to-r hover:from-blue-600 hover:via-red-400 hover:to-indigo-400 hover:text-transparent bg-clip-text'> Sujeewa</span>
                </h1>
                <p className='text-3xl font-bold mt-10 text-slate-500'>
                    Thank you for visiting my little corner in the internet.
                </p>
                <p className='text-2xl font-bold mt-5 text-slate-500 italic'>
                    Use the dock in the left hand side for navigation.
                </p>
            </div>
        </>
    )
}