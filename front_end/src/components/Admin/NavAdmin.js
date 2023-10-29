import {React} from "react";

function NavAdmin(){
    return (
        <div className="">
            <nav className="bg-white py-8  flex p-4 justify-center shadow-md w-full fixed top-0 left-0 right-0 z-10 ">
                <div className="lg:flex flex text-md items-center space-x-8 font-new-font text-lg uppercase">
                    <a className="flex text-black t-underline t-underline-black border-b-yellow-500 transition ease-in-out delay-150 duration-200" href = "/Admin/Client">
                        Customer
                    </a>
                    <a className="flex text-black t-underline t-underline-black border-b-yellow-500 " href = "/Admin/View">
                        Appointment
                    </a>
                    <a className="flex text-black t-underline t-underline-black border-b-yellow-500  transition ease-in-out delay-150 duration-200" href = "/Gallery">
                        Check-In
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default NavAdmin;
