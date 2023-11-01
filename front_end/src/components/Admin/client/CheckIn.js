import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

export default function Checkin(props) {
    const [data, setData] = useState([]);

    useEffect(() => {
        generateData();
    }, []);

    const generateData = () => {
        axios.get(`${process.env.REACT_APP_API_URL_LOCAL}/checking`, {
            withCredentials: true,
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${props.token}`
            },
        })
            .then((resp) => {
                const res = resp.data;
                res.access_token && props.setToken(res.access_token);
                setData(res.data);
            })
            .catch((error) => {
                window.location.href = '/Admin/Login';
            });
    };

    const DeleteBtn = (name, id) => {
        const isConfirmed = window.confirm('Are you sure you want to delete this item?');
        if (isConfirmed) {
            axios.delete(`${process.env.REACT_APP_API_URL_LOCAL}/delete/${name}/${id}`, { // Updated method to delete
                withCredentials: true,
                headers: {
                    "Content-Type": 'application/json',
                    Authorization: `Bearer ${props.token}`
                },
            })
                .then((resp) => {
                    alert(resp.data.message);
                    setData(data.filter(item => item.id !== id));
                })
                .catch(() => {
                    window.location.href = '/Admin/Login';
                });
        }
    };

    return (
        <div className="flex flex-col p-6 bg-white min-h-screen">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 mb-4">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                    <div className="text-start justify-start ml-6">
                        <span className="text-yellow-500 text-6xl" style={{ fontFamily: 'Tangerine' }}>Check in list</span>
                    </div>
                    <div className="overflow-hidden">
                        <table className="min-w-full text-left">
                            <thead className="bg-gray-100 border-b-2 border-b-black font-medium">
                                <tr className="text-md" style={{ fontFamily: 'Roboto' }}>
                                    <th scope="col" className="px-6 py-4">Id</th>
                                    <th scope="col" className="px-6 py-4">Name</th>
                                    <th scope="col" className="px-6 py-4">Customer Phone</th>
                                    <th scope="col" className="px-6 py-4">
                                        <FontAwesomeIcon icon={faClock} />
                                        <span className="ml-2">Check in Time</span>
                                    </th>
                                    <th scope="col" className="px-6 py-4">Point</th>
                                    <th scope="col" className="px-6 py-4"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((d, index) => (
                                    <tr className="border-b-2 border-solid border-b-black text-lg" key={index} style={{fontFamily: 'Roboto'}}>
                                        {/* Updated class to className and other styling issues */}
                                        <td className="whitespace-nowrap px-6 py-4 font-medium">{d.id}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{d.name}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{d.customer_phone}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{d.check_in_time}</td>
                                        <td className="whitespace-nowrap px-6 py-4">{d.check_in_point}</td>
                                        <td className="whitespace-nowrap px-6 py-4 cursor-pointer">
                                            <button onClick={() => DeleteBtn('Checkin', d.id)} className="border-2 group rounded-full shadow-lg hover:bg-rose-400 border-rose-400 px-4 py-2">
                                                <FontAwesomeIcon className="text-rose-400 group-hover:text-white" icon={faTrash} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* <div className="flex justify-center">
                        <button onClick={(e) => { e.preventDefault(); window.location.href = '/Booking'; }} className="shadow-lg bg-white rounded-full font-bold text-lg text-rose-400 w-[250px] py-3">Add Appointment</button>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={Logout} className="shadow-lg bg-rose-400 rounded-full font-bold text-lg text-white w-[250px] py-3">Log Out</button>
                    </div> */}
        </div>
    );
}
