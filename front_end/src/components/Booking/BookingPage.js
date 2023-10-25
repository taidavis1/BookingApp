import React , {createContext, useState} from "react";
import {Outlet , Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft , faArrowRight} from "@fortawesome/free-solid-svg-icons"
import axios from "axios";

export const ServiceContext = createContext("");
export const DateContext = createContext("");
export const InfoContext = createContext("");
export const TechContext = createContext("");
export default function Booking(){
    const [ServiceVal , SetServiceVal] = useState([]);
    const [DateVal , SetDateVal] = useState('');
    const [IsSubClick , setIsSubClick] = useState({});
    const [orginalVal , setoriginalVal] = useState('');
    const [IsClick , setIsClick] = useState(false);
    const[day , Setday] = useState('');
    const [isSelect , SetisSelect] = useState(false);
    const [PageId , SetPageId] = useState(1);
    const [isTime , SetTime] = useState('');
    const [BGColor , setBGColor] = useState({});
    const [Phone , setPhone] = useState('');
    const [Name , setName] = useState('');
    const [TechName, setTechName] = useState('');
    const [IsTechClick , setIsTechClick] = useState(false);
    const sendInfo = (e) => {
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/book` , {
            name: Name,
            phone: Phone,
            service: ServiceVal,
            date: DateVal,
            time: isTime,
            technician: TechName,
        }).then(function (resp) {
            alert(resp.data.messages);
            window.location.href = "/";
        })
        .catch(function (error) {
            console.log(error , 'error');
        });
    };

    return (
        <ServiceContext.Provider value = {{service: [ServiceVal , SetServiceVal] , click: [IsClick , setIsClick] , pageid: [PageId , SetPageId] , clicksub: [IsSubClick , setIsSubClick]}}>
            <DateContext.Provider value={{pageid: [PageId , SetPageId] , date: [DateVal , SetDateVal] , original: [orginalVal , setoriginalVal] , days: [day , Setday] , select: [isSelect , SetisSelect] , time: [isTime , SetTime] , color: [BGColor , setBGColor]}}>
                <TechContext.Provider value={{days: [day , Setday] , tech:[TechName, setTechName] , pageid:[PageId , SetPageId] , techclick:[IsTechClick , setIsTechClick]}}>
                        <InfoContext.Provider value={{ pageid:[PageId , SetPageId] , phone: [Phone , setPhone] , name: [Name , setName]}}>
                            <section className="space-y-6 lg:space-y-12">
                                <div className=" bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% pt-56 md:pb-40 relative">
                                    <div className="test1 border-b-2 tracking-wide border-b-yellow-400 cursor-pointer text-white md:text-4xl italic uppercase font-Roboto font-semibold">
                                        <h2>Book Appointment</h2>
                                    </div>
                                </div>
                                <div className="lg:px-24">
                                    <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 px-6 ">
                                        <div className="lg:px-12 lg:col-span-6 space-y-6">
                                            <Outlet/>
                                            {PageId === 1 && (
                                                <div className="flex justify-center">
                                                    <Link className="shadow-md ease-in-out transition duration-100 hover:scale-105 text-sm md:text-2xl cursor-pointer p-16 md:px-16 py-2 border-black/30 border-2 font-serif tracking-wider" to="/Booking/datetime">Continue</Link>
                                                </div>
                                            )}
                                            {PageId === 2 && (
                                                <div className="flex justify-center space-x-12 py-4">
                                                    <Link to="/Booking/services" className = "shadow-md ease-in-out transition duration-100 hover:scale-105 text-sm md:text-2xl cursor-pointer px-16 py-2 border-black/30 border-2 font-serif tracking-wider">
                                                        <FontAwesomeIcon className="" icon={faArrowLeft} />
                                                    </Link>
                                                    <Link to="/Booking/bookingtechnician" className = "shadow-md ease-in-out transition duration-100 hover:scale-105 text-sm md:text-2xl cursor-pointer px-16 py-2 border-black/30 border-2 font-serif tracking-wider">
                                                        <FontAwesomeIcon className="" icon={faArrowRight} />     
                                                    </Link>
                                                </div>
                                            )}
                                            {PageId === 3 && (
                                                <div className="flex justify-center space-x-12 py-4">
                                                    <Link to="/Booking/datetime" className = "shadow-md ease-in-out transition duration-100 hover:scale-105 text-sm md:text-2xl cursor-pointer px-16 py-2 border-black/30 border-2 font-serif tracking-wider">
                                                        <FontAwesomeIcon className="" icon={faArrowLeft} />
                                                    </Link>
                                                    <Link to="/Booking/info" className = "shadow-md ease-in-out transition duration-100 hover:scale-105 text-sm md:text-2xl cursor-pointer px-16 py-2 border-black/30 border-2 font-serif tracking-wider">
                                                        <FontAwesomeIcon className="" icon={faArrowRight} />     
                                                    </Link>
                                                </div>
                                            )}
                                            {PageId === 4 &&(
                                                <div className="flex justify-center space-x-12 py-4">
                                                    <Link to="/Booking/bookingtechnician" className = "shadow-md ease-in-out transition duration-100 hover:scale-105 text-sm md:text-2xl cursor-pointer lg:px-16 px-10 py-2 border-black/30 border-2 font-serif tracking-wider">
                                                        <FontAwesomeIcon className="" icon={faArrowLeft} />
                                                    </Link>
                                                    <button onClick={(e) => sendInfo(e)} type="submit" className = "shadow-md ease-in-out transition duration-100 hover:scale-105 text-sm md:text-2xl lg:px-16 cursor-pointer px-6 py-2 border-black/30 border-2 font-serif tracking-wider">
                                                        <span>Submit</span>                                                   
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                        <div className="hidden lg:block p-6 col-span-2 space-y-6">
                                            <div className="flex justify-center">
                                                <span className="font-serif text-lg">Appointment Details</span>
                                            </div>
                                            <hr className=" bg-green-300 h-1"></hr>
                                            <div>
                                                <nav className="flex flex-col space-y-6 p-2">
                                                    <div className="px-2">
                                                        <div className="flex space-x-4">
                                                                <div className="border-2 w-7 h-7 rounded-full  text-center">
                                                                    <span className="">1</span>
                                                                </div>
                                                                <div className="">
                                                                    <div>Services:</div>
                                                                    <ul className="ml-2 font-bold space-y-2 list-inside">
                                                                        {ServiceVal.map((s , index)=> (
                                                                            <li key={index}>{s}</li>
                                                                        ))}
                                                                    </ul>
                                                                </div>
                                                        </div>
                                                    </div>
                                                    <div className="px-2">
                                                        <div className="flex space-x-4">
                                                                <div className="border-2  w-7 h-7 rounded-full  text-center">
                                                                    <span className="">2</span>
                                                                </div>
                                                                <div className="flex flex-col space-x-2">
                                                                    <div>Date:</div>
                                                                    <span className="font-bold">{DateVal}</span>
                                                                    <span className="font-bold">{isTime}</span>
                                                                </div>
                                                        </div>
                                                    </div>
                                                    <div className="px-2">
                                                        <div className="flex space-x-4">
                                                                <div className="border-2  w-7 h-7 rounded-full  text-center">
                                                                    <span className="">3</span>
                                                                </div>
                                                                <div className="flex flex-col space-x-2 space-y-1">
                                                                    <div>Nail Technician:</div>
                                                                    <span className="font-bold">{TechName}</span>
                                                                </div>
                                                        </div>
                                                    </div>
                                                    <div className="px-2">
                                                        <div className="flex space-x-4">
                                                                <div className="border-2  w-7 h-7 rounded-full  text-center">
                                                                    <span className="">4</span>
                                                                </div>
                                                                <div className="flex flex-col space-x-2 space-y-1">
                                                                    <div>Info:</div>
                                                                    <span className="font-bold">{Name}</span>
                                                                    <span className="font-bold">{Phone}</span>
                                                                </div>
                                                        </div>
                                                    </div>
                                                    
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </InfoContext.Provider>
                </TechContext.Provider>
            </DateContext.Provider>
        </ServiceContext.Provider>
    );
};