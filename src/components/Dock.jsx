import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLaptop, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'
import HoverableButton from './HoverableButton'

export default function Dock () {
    return (
        <>
            <div className="shadow-lg ml-2 w-15 left-0 top-1/2 transform -translate-y-1/2 fixed px-2 py-5 bg-zinc-500/[0.5] rounded-2xl dark:bg-zinc-400  hover:backdrop-blur-sm">
                <ul className="text-center px-3 text-xl">
                    <li className='pb-4'><HoverableButton icon={faHome} label={"Home"} link="/"/></li>
                    <li className='pb-4'><HoverableButton icon={faLaptop} label={"Projects"} link="/projects"/></li>
                    <li><HoverableButton icon={faUserAstronaut} label={"About Me"} link="/about"/></li>
                </ul>
            </div>
        </>
    )
}