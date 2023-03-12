import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from "react-router-dom";
// import { faHome, faLaptop, faUserAstronaut } from '@fortawesome/free-solid-svg-icons'

export default function HoverableButton (props) {

    const navigate = useNavigate();

    const [isOpen, setIsOpen] = useState(false);

    const openDropDown = () => {
        setIsOpen(true);
    };
    const closeDropDown = () => {
        setIsOpen(false);
    }

    const navigateTo = () => {
        navigate(`${props.link}`);
    }
    
    return (
    <div className="relative inline-block bg-transparent backdrop-blur-sm">
      {/* <button
        onClick={toggleDropdown}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      > */}
        <FontAwesomeIcon icon={props.icon} onClick={navigateTo} onMouseEnter={openDropDown} onMouseLeave={closeDropDown}
            className="text-zinc-50 hover:text-green-300 p-2"
        />

      {isOpen && (
        <div className="absolute left-20 z-0 top-0 mt-0">
            <div className="rounded-xl shadow-lg bg-gradient-to-r from-slate-300 via-slate-200 to-slate-300 ring-1 ring-black ring-opacity-5 text-slate-600 dark:bg-slate-500 dark:text-slate-300">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block w-40 px-4 py-2 text-sm">{props.label}</a>
                </div>
            </div>
      </div>
      )}
    </div>
    );

}
