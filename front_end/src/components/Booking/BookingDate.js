import React , {useContext, useEffect, useState} from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { DateContext } from "./BookingPage";
import axios from "axios";

export default function BookingDate(){
    const [value, setValue] = useState({ 
        startDate: null,
        startWeekOn: "Sun",
    });
    const DaysList = ['Sun' , 'Mon' , 'Tues' , 'Weds' , 'Thrus' , 'Fri' , 'Sat'];
    const [Hours , setHours] = useState([])
    const [HoursSun , setHoursSun] = useState([])
    const {pageid , date , original , days , select , time , color} = useContext(DateContext);
    const [DateVal , SetDateVal] = date;
    const [orginalVal , setoriginalVal] = original;
    const[day , Setday] = days;
    const [isSelect , SetisSelect] = select;
    const [isTime , SetTime] = time;
    const [BGColor , setBGColor] = color;
    const [PageId , SetPageId] = pageid;
    const generatetime = async (day , date) => {
        try{
            const resp = await axios.get(`${process.env.REACT_APP_API_URL}/generatehours/${day}/${date}`);
            if (day === 'Sun'){
                setHoursSun(resp.data.hours);
            }
            else{
                setHours(resp.data.hours)
            }
        }catch(error){
            console.log("Error: " , error);
        }
    }
    const handleValueChange = (newValue) => {
        if (newValue.startDate != null){
            SetisSelect(true)
            setValue(newValue);
            SetDateVal(newValue.startDate);
            setoriginalVal(newValue);
            const cleanup = new Date(newValue.startDate.replace(/-/g, '\/'));
            Setday(DaysList[cleanup.getDay()]);
            generatetime(day , DateVal);
        }
        else{
            SetDateVal("");
            setoriginalVal("");
            SetisSelect(false);
            SetTime("");
        }
    }
    const ChangeBG = (id) => {
        setBGColor((lastClick) => ({
            [id]: !lastClick[id],
        }));
    }

    const handlebtn = (id,  h) => {
        if (!BGColor[id]){
            SetTime(h);
        }
        else{
            SetTime('');
        }
    }

    useEffect(() => {
        if (isSelect) {
            generatetime(day, DateVal);
        }
    }, [day, DateVal, isSelect]);

    return (
        <>
        {SetPageId(2)}
            <div className="lg:py-3">
                <h1 className="text-md lg:text-3xl text-justify capitalize font-semibold tracking-wider">Choose Your Date And Time: </h1>
            </div>
            <hr className=" h-1 bg-gradient-to-r from-indigo-500 from-10% via-sky-500"></hr>
            <div>
                <Datepicker
                    inputClassName="w-full focus:outline-0 rounded-md text-md lg:text-lg font-normal bg-white border-2 border-ser-color px-4 py-4"
                    containerClassName="relative bg-white"
                    popoverDirection="down"
                    primaryColor={"indigo"}
                    displayFormat={"MM/DD/YYYY"}
                    minDate={new Date()}
                    useRange={false}
                    asSingle={true} 
                    value={orginalVal}
                    onChange={handleValueChange} 
                /> 
            </div>
            {isSelect?
                <div className=" max-w-screen-lg lg:px-4">
                    {day === 'Sun'? (
                            <div className="grid lg:px-12 grid-cols-3 lg:grid-cols-12 p-2 gap-6 text-lg">
                                {HoursSun.map((h, index) => (
                                    <div onClick={() => {
                                        handlebtn(index , h)
                                        ChangeBG(index);
                                    }} key={index} style={{backgroundColor: BGColor[index]? 'black': 'white' , color: BGColor[index]? 'white': 'black'}} className="ease-in-out transition duration-100 hover:scale-105 lg:text-lg text-sm lg:col-span-3 group shadow-lg cursor-pointer font-Roboto font-semibold tracking-wide border-2 border-black/50 text-center py-2">
                                        <span className="">{h}</span>
                                    </div>
                                ))}
                            </div>
                    ) : (
                        <div className="grid lg:px-12 grid-cols-3 lg:grid-cols-12 p-2 gap-6 text-lg">
                        {Hours.map((h, index) => (
                                    <div onClick={() => {
                                        handlebtn(index , h)
                                        ChangeBG(index);
                                    }} key={index} style={{backgroundColor: BGColor[index]? 'black': 'white' , color: BGColor[index]? 'white': 'black'}} className="ease-in-out transition duration-100 hover:scale-105 lg:text-lg text-sm lg:col-span-3 group shadow-lg cursor-pointer font-Roboto font-semibold tracking-wide border-2 border-black/50 text-center py-2">
                                    <span className="">{h}</span>
                                    </div>
                                ))}
                        </div>
                    ) }
                </div>:null
            }
        </>
    );
}