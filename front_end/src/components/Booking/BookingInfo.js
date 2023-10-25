// import axios from "axios";
import React , {useContext} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { InfoContext } from "./BookingPage";
import {Link} from 'react-router-dom';
export default function BookingInfo(){
    const {pageid , name , phone} = useContext(InfoContext);
    const [Phone , setPhone] = phone;
    const [Name , setName] = name;
    const [PageId , SetPageId] = pageid;
    return (
        <>
            {SetPageId(4)}
            <div className="lg:py-3">
                <h1 className="text-md lg:text-3xl text-justify capitalize font-semibold tracking-wide">Please Enter Your Information </h1>
            </div>
            <hr className=" h-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500"></hr>
            <div className="col-span-2 p-0 lg:p-4 lg:space-y-8">
                <form className="">
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={(e) => setName(e.target.value)} value = {Name} name="name" id="name" className="block indent-2 py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-ser-color peer" placeholder=" " required />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-black-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={(e) => setPhone(e.target.value)} value = {Phone} name="phone" id="phone" className="block indent-2 py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-ser-color peer" placeholder=" " />
                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-black-500  duration-300  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                    </div>
                </form>
            </div>
        </>
    );
};