import React, { useContext} from "react";
import { TechContext } from "./BookingPage";
import techman from "./img/men.png";
import techwoman from "./img/girl.jpg"
import checkmark from "./img/checkmark.jpg"
export default function BookingTech(){
    const TechnicianName = ["Ann" , "Andy" , "Jenny" , "Mimi" , "Long" , "Ashley" , "Tina" , "Helen"]
    const{tech  , pageid , techclick , days} = useContext(TechContext);
    const [TechName, setTechName] = tech;
    const [PageId , SetPageId] = pageid;
    const [IsTechClick , setIsTechClick] = techclick;
    const [day , Setday] = days;
    const handleBtn = (id) => {
        setIsTechClick((lastClick) => ({
            [id]: !lastClick[id],
        }));
        if(!IsTechClick[id]){
            setTechName(TechnicianName[id]);
        }
        else{
            setTechName("");
        }
    };
    return (
        <>
            {SetPageId(3)}
            <div className="lg:py-3">
                <h1 className="text-md lg:text-3xl text-justify capitalize font-semibold tracking-wider">Choose Your Prefer Technician:</h1>
            </div>
            <hr className=" h-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500"></hr>
            <div className="grid lg:px-12 grid-cols-2 lg:grid-cols-4 justify-items-center p-2 gap-6 text-lg">  
                {TechnicianName.map((tech , index) => {
                    switch (tech){
                        case "Andy":
                            return (
                                <div onClick={() => handleBtn(index)} key={index} className="shadow-lg cursor-pointer p-4 rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">
                                    <div className="overflow-hidden">
                                        {!IsTechClick[index]? 
                                            <img src={techman} alt="#" className="w-full" /> : <img src={checkmark} alt="#" className="w-full" />
                                        }
                                    </div>
                                    <div className="text-center capitalize text-sky-500 font-bold tracking-wider">
                                        <span>{tech}</span>
                                    </div>                    
                                </div>
                            )
                            case "Long":
                                return (
                                    day !== 'Weds' &&(
                                        <div onClick={() => handleBtn(index)} key={index} className="shadow-lg cursor-pointer p-4 rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">
                                            <div className="overflow-hidden">
                                                {!IsTechClick[index]? 
                                                    <img src={techman} alt="#" className="w-full" /> : <img src={checkmark} alt="#" className="w-full" />
                                                }
                                            </div>
                                            <div className="text-center capitalize text-sky-500 font-bold tracking-wider">
                                                <span>{tech}</span>
                                            </div>                    
                                        </div>
                                    )
                                )
                            case "Jenny":
                                return (
                                    day !== 'Mon'&&(
                                        <div  onClick={() => handleBtn(index)} key={index} className="shadow-lg cursor-pointer p-4 rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">
                                            <div className="overflow-hidden">
                                                {!IsTechClick[index]? 
                                                    <img src={techwoman} alt="#" className="w-full" />: <img src={checkmark} alt="#" className="w-full" />
                                                }
                                            </div>
                                            <div className="text-center capitalize text-pink-500 font-bold tracking-wider">
                                                <span>{tech}</span>
                                            </div>                    
                                        </div>
                                    )
                                )
                            case 'Mimi':
                                return (
                                    day !== 'Tues'&&(
                                        <div  onClick={() => handleBtn(index)} key={index} className="shadow-lg cursor-pointer p-4 rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">
                                            <div className="overflow-hidden">
                                                {!IsTechClick[index]? 
                                                    <img src={techwoman} alt="#" className="w-full" />: <img src={checkmark} alt="#" className="w-full" />
                                                }
                                            </div>
                                            <div className="text-center capitalize text-pink-500 font-bold tracking-wider">
                                                <span>{tech}</span>
                                            </div>                    
                                        </div>
                                    )
                                )
                        default:
                            return (
                                <div  onClick={() => handleBtn(index)} key={index} className="shadow-lg cursor-pointer p-4 rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">
                                    <div className="overflow-hidden">
                                        {!IsTechClick[index]? 
                                            <img src={techwoman} alt="#" className="w-full" />: <img src={checkmark} alt="#" className="w-full" />
                                        }
                                    </div>
                                    <div className="text-center capitalize text-pink-500 font-bold tracking-wider">
                                        <span>{tech}</span>
                                    </div>                    
                                </div>
                            )
                    }          
                })}
            </div>
        </>
    );
};
