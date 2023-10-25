import React , {useEffect, useState} from "react";
import axios from "axios";

export default function Login(props){
    const [username , setUserName] = useState('');
    const [pass , setPass] = useState('');
    useEffect(() => {
        // Load the token from local storage when the component mounts
        const token = localStorage.getItem("token");
        if (token) {
          props.setToken(token);
        }
    }, []);
    function AdminLogin(e){
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/login` ,{
            username: username,
            password: pass,
        })
        .then(function (resp) {
            const token = resp.data.access_token;
            props.setToken(token);
            if (token){
                alert ("Login Success!");
                setUserName('');
                setPass('');
                window.location.href = "/Admin/View";
            }
            else{
                alert("Wrong Credetials");
                setUserName('');
                setPass('');
            }
        })
    };
    return(
        <div className="min-h-screen overflow-hidden overscroll-none px-4 md:px-0 flex flex-col items-center justify-center">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h1 className="text-3xl font-semibold italic text-center text-sky-700 underline">
                   Sign in
                </h1>
                <form className="mt-6">
                    <div className="mb-2">
                        <label for="username" className="block text-sm font-semibold text-gray-800">username</label>
                        <input value={username} onChange={(e) => setUserName(e.target.value)} type="username" name="username" className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mb-2">
                        <label for="pass" className="block text-sm font-semibold text-gray-800">password</label>
                        <input value={pass} onChange={(e) => setPass(e.target.value)} name="pass" type="password" className="block w-full px-4 py-2 mt-2 text-sky-700 bg-white border rounded-md focus:border-sky-400 focus:ring-sky-300 focus:outline-none focus:ring focus:ring-opacity-40"/>
                    </div>
                    <div className="mt-6">
                        <button onClick={AdminLogin} className="w-full px-4 py-2 tracking-wide text-black border-2 border-sky-200 hover:bg-sky-200 hover:text-white rounded-full transition-colors duration-200 transform  focus:outline-none ">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};