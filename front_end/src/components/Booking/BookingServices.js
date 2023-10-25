import React, { useContext, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faPlus , faXmark } from "@fortawesome/free-solid-svg-icons";
import {faCircle} from "@fortawesome/free-regular-svg-icons"
import { ServiceContext } from "./BookingPage";
export default function BookingServices(){
    const{service , click , pageid , clicksub} = useContext(ServiceContext);
    const [IsClick , setIsClick] = click;
    const [ServiceVal , setServiceVal] = service;
    const [IsSubClick , setIsSubClick] = clicksub;
    const [PageId , SetPageId] = pageid;
    const Services = [
        {
            name: "Manicure",
            service: ["Mani Basic" , "Mani Silver" ,"Mani Platinum" ,"Mani Diamond"]
        },
        {
            name: "Pedicure",
            service: ["Pedi Basic" ,"Pedi Silver" , "Pedi Gold" ,"Pedi Platinum" ,"Pedi Diamond" ,"Pedi Luxury"]
        },
        {
            name:"Facial",
            service: ['Mini Facial (30mins)','Facial- gold facial (45mins)','Facial  daimond ( 60mins)',]
        },
        {
            name: "Waxing",
            service: ['Eyebrows Wax','Lip Wax','Chin Wax','Full Face Wax','Under Arm Wax','Half Arm Wax','Full Arm Wax','Half Leg Wax','Full Leg Wax','Back Wax','Chest Wax','Bikini Wax']
        },
        {
            name: "Nail Enhancements",
            service: ["Acrylic Full set","Fill", "Dip Powder on Real Nails","Dip Powder w/Tip","Full set Powder Color","Full set Pink White", "Full set Ombre Pink White","Pink & White Fill-in"]
        },
        {
            name: "Kid Services",
            service: ["Princess Manicure","Princess Pedicure","Kid Hands Color","Kid Toes Color"]
        }

    ];
    const handleBtn = (id) => {
        setIsClick((lastClick) => ({
            ...lastClick,
            [id]: !lastClick[id],
        }));
        if(IsClick[id]){
            setServiceVal([""]);
            setIsSubClick({});
        }
    };

    const handleSub = (id , index) =>{
        setIsSubClick((lastClick) => ({
            ...lastClick,
            [id]: {
                ...lastClick[id],
                [index]: !lastClick[id]?.[index],
            },
        }));
        if (!IsSubClick[id]?.[index]) {
            setServiceVal([...ServiceVal, Services[id].service[index]]);
        } 
        else {
            setServiceVal(ServiceVal.filter((service) => service !== Services[id].service[index]));
        }
    };

    return (
        <>
            {SetPageId(1)}
            <div className="lg:py-3">
                <h1 className="text-md lg:text-3xl text-justify capitalize font-semibold tracking-wider">to get start, What Services Do You Want?</h1>
            </div>
            <hr className=" h-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500"></hr>
            <div className="grid lg:grid-cols-1 lg:p-4 gap-6 justify-items-center">
                {Services.map((ser , id) => (
                    <>
                        <div className="w-full cursor-pointer hover:scale-105 ease-in-out transition-all duration-1000 py-3 shadow-lg font-semibold tracking-wide uppercase text-center border-ser-color border-4" key={id} onClick={() => handleBtn(id)}>
                            <div className="grid grid-cols-3">
                                <span className="col-span-2 tracking-wider text-sm lg:text-lg">{ser.name}</span>
                                <div>
                                    {!IsClick[id]?
                                        <FontAwesomeIcon className="text-sm lg:text-lg" icon={faPlus} />:<FontAwesomeIcon className="text-sm lg:text-lg" icon={faXmark} />
                                    }
                                </div>
                            </div>
                        </div>
                        {IsClick[id] && (
                            <div className="grid grid-cols-1 gap-4">
                                {ser.service.map((s, index) => (
                                    <div onClick={() => handleSub(id , index)} key={index} className="lg:px-8 lg:py-3 px-4 py-2 cursor-pointer shadow-lg font-semibold tracking-wide text-center border-gray-400 border-2">
                                        <div className="grid grid-cols-3">
                                            <span className="col-span-2 text-gray-500 tracking-wider text-sm lg:text-lg">{s}</span>
                                            <div>
                                                {!IsSubClick[id]?.[index] ? (
                                                    <FontAwesomeIcon className="text-sm lg:text-lg " icon={faCircle} />
                                                ) : (
                                                    <FontAwesomeIcon className="text-green-400 w-5 h-5" icon={faCheckCircle} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                ))}
            </div>
        </>
    );
}