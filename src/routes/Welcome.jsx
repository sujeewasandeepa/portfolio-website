import 'tailwindcss/tailwind.css';

export default function Welcome () {

    return(
        <>
            {/* <div className="bg-gradient-to-t from-slate-200 via-slate-100 to-white h-100 mt-0 pb-5">
             */}
             <div className='flex flex-col items-center justify-center h-full'>
                <h1 className="text-9xl center font-bold text-center text-slate-500 pt-5">Hello</h1>
                <h2 className='text-9xl center font-bold text-center text-pink-400 pt-5'>Welcome</h2>
            </div>
        </>
    )
}