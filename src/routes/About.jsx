import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMastodon } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function About () {
    return (
        <>
            <div className="bg-gradient-to-t from-slate-300 via-slate-100 to-white mb-0 pb-20 h-100">
                <h2 className="text-4xl lg:text-6xl text-center text-slate-800 mt-5 font-bold">About Me</h2>
                <h1 className="text-6xl lg:text-8xl my-5 text-center text-slate-400 font-bold">Hello, I'm Sujeewa</h1>
                <div className="md:w-1/2 md:m-auto mx-10">
                    <p className="mt-5 mb-3 text-slate-600">
                        Hi there, I'm Sujeewa - a software engineering undergraduate from Sri Lanka 
                        with a passion for all things tech and beyond.
                    </p>
                    <p className="mb-3 text-slate-600">
                        I'm an avid nature enthusiast and enjoy exploring the great outdoors. 
                        When I'm not out in the wilderness, you can find me curled up with a book of poetry or 
                        catching up on my favorite anime series.
                    </p>
                    <p className="mb-3 text-slate-600">
                        Currently, I'm pursuing my studies in software engineering 
                        at the Open University of Sri Lanka. 
                        My main focus at the moment is full stack development, 
                        but I'm always looking to expand my horizons and explore 
                        new fields - like artificial intelligence and the decentralized web - in the future.
                    </p>
                    <p className="mb-3 text-slate-600">
                        As a software developer, open source software holds a special place in my heart. 
                        I'm fascinated by the idea of people from all walks of life coming together 
                        to contribute their time and effort for the benefit of strangers - a 
                        true testament to the power of community.
                    </p>
                    <p className="mb-3 text-slate-600">
                        And I love Linux! Since 2019,
                        I've been using Linux as my daily driver and have experimented 
                        with various distributions, including Debian, Ubuntu, Manjaro, Fedora, 
                        Nitrux OS, Hanthana Linux, Kali Linux, Linux Mint, and many more.
                    </p>
                    <p className="mb-3 text-slate-600">
                        Join me on my journey of discovery as I navigate the ever-changing world 
                        of software engineering and beyond.
                    </p>
                    <p className="mb-3 text-slate-600 italic">
                        You can find me on,
                    </p>

                    {/* Make this ul inline */}
                    
                    <ul className='my-5 flex flex-row mx-auto text-2xl'>
                        <li><a href="https://twitter.com/sujeewasandeepa"><FontAwesomeIcon icon={faTwitter} className="mr-5 text-slate-500 hover:text-slate-800"/></a></li>
                        <li><a href="https://github.com/sujeewasandeepa"><FontAwesomeIcon icon={faGithub} className="mr-5 text-slate-500 hover:text-slate-800"/></a></li>
                        <li><a href="#"><FontAwesomeIcon icon={faMastodon} className="mr-5 text-slate-500 hover:text-slate-800"/></a></li>
                        <li><a href="mailto://sandeepasujeewa@gmail.com"><FontAwesomeIcon icon={faGoogle} className="mr-5 text-slate-500 hover:text-slate-800"/></a></li>
                    </ul>

                    <hr />

                    <p className="m-3 text-slate-600">
                        I will leave links to different things I really enjoy. Have a greay day! 🤍
                    </p>
                    <hr/>
                    <ul className="list-disc ml-10">
                        <li>
                            <a className="text-slate-600 hover:text-slate-800" href="https://www.youtube.com/@ScienceWithRuchira">
                                Science With Ruchira
                            </a>
                        </li>
                        <li>
                            <a className="text-slate-600 hover:text-slate-800" href="https://www.youtube.com/@myHubLK">
                                MyHubLK
                            </a>
                        </li>
                        <li>
                            <a className="text-slate-600 hover:text-slate-800" href="https://np.ironhelmet.com">
                                Neptune's Pride (One of the best games ever)
                            </a>
                        </li>
                        <li>
                            <a className="text-slate-600 hover:text-slate-800" href="https://politicsandwar.com/nation/id=528124">
                                Politics and War
                            </a>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </>
    )
}
