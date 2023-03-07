import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faMastodon } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

export default function About () {
    return (
        <>
            <div className="bg-gradient-to-t from-slate-300 via-slate-100 to-white mb-0 pb-20 h-100">
                <h2 className="text-4xl text-center text-slate-800 mt-5 font-bold">About Me</h2>
                <h1 className="text-8xl my-5 text-center text-slate-400 font-bold">Hello, I'm Sujeewa</h1>
                <div className="w-1/2 m-auto">
                    <p className="mt-5 mb-3 text-slate-600">
                        I'm Sujeewa, a software engineering undergraduate
                        from Sri Lanka.
                    </p>
                    <p className="mb-3 text-slate-600">
                        I enjoy being with the nature, poetry, hiking, philosophy, anime and programming.
                    </p>
                    <p className="mb-3 text-slate-600">
                        These days I learn software engineering in the Open University of Sri Lanka.
                        I mainly focus on full stack development for now. Later in life I hope to explore fields
                        like artificial intelligence and the decentralized web.
                    </p>
                    <p className="mb-3 text-slate-600">
                        When it comes to the world of software, I have a special place for open source
                        software in my heart, it fascinates me to see, how many people there are that
                        are willing to contribute their valuable time for the benefit of strangers that
                        they will probably never even see.
                    </p>
                    <p className="mb-3 text-slate-600">
                        Speaking of open source software, I should talk about linux, I love linux.
                        I have been daily driving a linux computer since 2019, and I have zero regrets.
                        I have tried a lot of different linux distributions including Debian, Ubuntu,
                        Manjaro, Fedora, Nitrux OS, Hanthana Linux, Kali Linux, Linux mint and many more.
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

                    </ul>
                </div>
            </div>
        </>
    )
}
