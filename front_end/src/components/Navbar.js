import {React , useState} from "react";
import Logo from "../img/Logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF , faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faBarsStaggered ,faXmark} from "@fortawesome/free-solid-svg-icons"

function Navbar(){
    const [Click , setClick] = useState(false);
    const [Scroll , SetScroll] = useState(false);
    const Change_color = () => {
        if(window.scrollY >= 10){
            SetScroll(true);
        }
        else{SetScroll(false);}
    };
    window.addEventListener('scroll' , Change_color)
    const Icon_Style = {fontSize: '22',};
    return (
        <div className="">
            <nav className= {Scroll?"bg-gray-300/20  flex justify-between p-4 lg:justify-around lg:py-4  backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10 ":"flex justify-between p-4 lg:justify-around lg:py-4 bg-white/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10"}>
                <div className="flex items-center cursor-pointer">
                    <img src={Logo} alt="" className="w-14 md:w-24"/>
                </div>
                <div onClick={() => setClick(!Click)} className="lg:hidden blkock text-4xl cursor-pointer flex items-center">
                {!Click? 
                    <FontAwesomeIcon className="" icon = {faBarsStaggered}/> : 
                    <FontAwesomeIcon className="" icon={faXmark} />
                }
                </div>
                <div className="lg:flex text-md hidden items-center space-x-8 font-new-font text-lg uppercase">
                    <a className="flex text-black t-underline t-underline-black border-b-yellow-500 " href = "/">
                        Home
                    </a>
                    <a className="flex text-black t-underline t-underline-black border-b-yellow-500 transition ease-in-out delay-150 duration-200" href = "/Services">
                        Services
                    </a>
                    <a className="flex text-black t-underline t-underline-black border-b-yellow-500  transition ease-in-out delay-150 duration-200" href = "/Gallery">
                        Gallery
                    </a>
                    <a className="flex text-black t-underline t-underline-black border-b-yellow-500  transition ease-in-out delay-150 duration-200" href = "/Contact">
                        Contact Us
                    </a>
                </div>
                <div className="hidden lg:flex items-center space-x-10 ">
                    <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.instagram.com/luxurynsws/">
                        <FontAwesomeIcon className="hover:text-rose-300 transition ease-in-out delay-150 duration-200" style={Icon_Style}  icon={faInstagram}></FontAwesomeIcon>
                    </a>
                    <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.facebook.com/profile.php?id=61550651454544">
                        <FontAwesomeIcon className="hover:text-sky-300 transition ease-in-out delay-150 duration-200" style={Icon_Style} icon={faFacebookF}></FontAwesomeIcon>
                    </a>
                    <a className="cursor-pointer flex" target="_blank"  rel="noreferrer" href = "mailto:nguyenthuyan1706@gmail.com">
                        <FontAwesomeIcon className="hover:text-green-300" style={Icon_Style} icon={faEnvelope}></FontAwesomeIcon>
                    </a>
                    <button onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/Booking/services';
                        }} className="hover:bg-black group cursor-pointer px-4 py-3 border-black border-2 uppercase font-serif tracking-wide">
                        <a className = "group-hover:text-white">Book Now</a>
                    </button>
                </div>
            </nav>
            {Click?
                <nav className="overflow-hidden space-y-12 md:space-y-24 top-16 md:top-24 fixed p-6 w-screen h-screen bg-white transition duration-700 ease-out lg:hidden left-0 right-0 z-20  mx-auto  text-black">
                    <div className=" space-y-16 font-new-font md:space-y-24 flex uppercase flex-col text-lg mt-12">
                        <a onClick={() => setClick(!Click)} className="" href="/">Home</a>
                        <a onClick={() => setClick(!Click)} className="" href="/Services">Services</a>
                        <a onClick={() => setClick(!Click)} className=" " href="/Gallery">Gallery</a>
                        <a onClick={() => setClick(!Click)} className="" href="/Contact">Contact us</a>
                        <button onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/Booking/services';
                            }} className="hover:bg-black group  transition ease-out duration-200 cursor-pointer px-4 py-3 border-black border-2 uppercase font-serif tracking-wide">
                            <a className = "group-hover:text-white">Book Now</a>
                        </button>
                    </div>
                    <div className="flex space-x-10 text-2xl justify-center">
                        <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.instagram.com/luxurynsws/">
                            <FontAwesomeIcon className="hover:text-rose-300 transition ease-in-out delay-150 duration-200"  icon={faInstagram}></FontAwesomeIcon>
                        </a>
                        <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.facebook.com/profile.php?id=61550651454544">
                            <FontAwesomeIcon className="hover:text-sky-300 transition ease-in-out delay-150 duration-200"  icon={faFacebookF}></FontAwesomeIcon>
                        </a>
                        <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "mailto:nguyenthuyan1706@gmail.com">
                            <FontAwesomeIcon className="hover:text-green-300"  icon={faEnvelope}></FontAwesomeIcon>
                        </a>
                    </div>
                </nav>
                :null
            }
        </div>
    );
};

export default Navbar;
