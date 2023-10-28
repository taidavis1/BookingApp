// import axios from "axios";
import React , {useContext, useState} from "react";
import { InfoContext } from "./BookingPage";
import Datepicker from "react-tailwindcss-datepicker";
export default function BookingInfo(){
    const {pageid , name , phone , birthday , check , original} = useContext(InfoContext);
    const [Phone , setPhone] = phone;
    const [Name , setName] = name;
    const [PageId , SetPageId] = pageid;
    const [orginalVal , setoriginalVal] = original;
    const [isChecked, setIsChecked] = check;
    const [dob , setDob] = birthday
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        setoriginalVal("");
        setDob("");
    };
    const [value, setValue] = useState({ 
        startDate: null,
        startWeekOn: "Sun",
    });

    const handleValueChange = (newValue) => {
        if (newValue.startDate != null){
            setValue(newValue);
            setoriginalVal(newValue);
            setDob(newValue.startDate);
        }
        else{
            setoriginalVal("");
            setDob("");
        }
    }

    return (
        <>
            {SetPageId(4)}
            <div className="lg:py-3">
                <h1 className="text-md lg:text-3xl text-justify capitalize font-semibold tracking-wide">Please Enter Your Information </h1>
            </div>
            <hr className=" h-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500"></hr>
            <div className="col-span-2 p-0 lg:p-4">
                <form className="lg:space-y-6">
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={(e) => setName(e.target.value)} value = {Name} name="name" id="name" className="block indent-2 py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-ser-color peer" placeholder=" " required />
                        <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-black-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input onChange={(e) => setPhone(e.target.value)} value = {Phone} name="phone" id="phone" className="block indent-2 py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-ser-color peer" required placeholder=" " />
                        <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-black-500  duration-300  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                    </div>
                    <div class="mb-[0.125rem]  block min-h-[1.5rem] pl-[1.5rem]">
                        <input className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem]"
                            type="checkbox"
                            checked = {isChecked}
                            onChange={handleCheckboxChange}
                            value=""
                            id="checkboxDefault" 
                        />
                        <label className="inline-block font-bold italic capitalize pl-[0.15rem] hover:cursor-pointer" for="checkboxDefault">
                            To Be consider for Reward
                        </label>
                    </div>
                    {isChecked?
                        <div className="relative w-full space-y-3 mt-3 md:space-y-2 group">
                            <label className=" italic text-red-400 text-lg">Your Date of Birth: </label>
                            <Datepicker
                                inputClassName="w-full focus:outline-0 rounded-md text-md lg:text-lg font-normal bg-white border-2 border-ser-color px-4 py-4"
                                containerClassName="relative bg-white"
                                popoverDirection="down"
                                primaryColor={"indigo"}
                                displayFormat={"MM/DD/YYYY"}
                                useRange={false}
                                maxDate={new Date().setFullYear(2020)}
                                asSingle={true} 
                                value={orginalVal}
                                onChange={handleValueChange} 
                            /> 
                        </div>
                        : 
                        null
                    }
                </form>
            </div>
        </>
    );
};