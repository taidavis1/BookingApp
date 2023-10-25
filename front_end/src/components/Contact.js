import {React , useState} from "react";
import axios from "axios";
function Contact(){
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
    const [name , setName] = useState('');
    const [msg , setMsg] = useState('');

    const userContact = (e) => {
        e.preventDefault();
        axios.post('api/contact' ,{
            email: email,
            name: name,
            msg:msg,
            phone:phone,
        })
        .then(function (resp) {
            setEmail('');
            setName('');
            setMsg('');
            setPhone('');
            alert(resp.data.messages);
        })
        .catch(function (error) {
            console.log(error , 'error');

        });
    };

    return(
        <section className="space-y-6 lg:space-y-12">
            <div className="cpage pt-56 md:pb-40 relative">
                <div className="test1  border-b-2 tracking-wide border-b-yellow-400 cursor-pointer text-black md:text-4xl italic uppercase font-Roboto font-semibold">
                    <h2>Contact Us</h2>
                </div>
            </div>
            <div className="p-4 mx-auto max-w-screen-xl cursor-pointer">
                <div className="grid p-4 grid-cols-1 text-justify gap-8 lg:grid-cols-3 ">
                    <div className="col-span-2 p-4 space-y-4 lg:space-y-8">
                        <div className="text-3xl tracking-wider font-serif">
                            <span className="">Need Help?</span>
                        </div>
                        <form onSubmit={(e) => userContact(e)} className="space-y-8">
                            <div className="relative z-0 w-full mb-6 group">
                                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="" className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-ser-color peer" placeholder=" " required />
                                <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-black-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input onChange={(e) => setName(e.target.value)} value = {name} name="name" id="name" className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-ser-color peer" placeholder=" " required />
                                <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-black-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Your Name</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group">
                                <input onChange={(e) => setPhone(e.target.value)} value = {phone} name="phone" id="phone" className="block py-2.5 px-0 w-full text-sm text-black-900 bg-transparent border-0 border-b-2 border-black appearance-none focus:outline-none focus:ring-0 focus:border-ser-color peer" placeholder=" " />
                                <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-black-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone</label>
                            </div>
                            <div className="relative z-0 w-full mb-6 group text-lg text-black">
                                <textarea required onChange={(e) => setMsg(e.target.value)} value={msg} style = {{resize: "none"}} id="message" rows="10" className="block indent-2 p-2.5 w-full text-sm text-black-900 bg-black-50 rounded-lg border border-black focus:ring-blue-500 focus:border-blue-500 " placeholder="Your Messages...."></textarea>
                            </div>
                            <div className="flex justify-center">
                                <button className="hover:bg-black md:text-lg text-sm py-2 group cursor-pointer w-full border-black border-2  md:tracking-wide">
                                    <p className = "group-hover:text-white ">Send</p>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="p-4 space-y-4 lg:space-y-8 lg:text-justify lg:grid justify-center text-center">
                        <div className="font-serif">
                            <div className="grid grid-cols-1 p-4 space-y-5">
                                <div>
                                    <span className="text-3xl tracking-wider">See us in person</span>
                                </div>
                                <div className="space-y-3">
                                   <p>We love our customers and welcome them to visit during our normal business hours of 9am to 5pm, Monday through Friday.</p>
                                   <ul className="space-y-2 font-semibold">
                                        <li>
                                            <a className="transition text-black t-underline t-underline-black border-b-yellow-500" target="_blank"  rel="noreferrer" href = "https://www.google.com/maps/dir/37.3293056,-120.4944896/Luxury+Nails/@37.9435164,-121.6752707,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x809ad3df825d39f3:0xa375706c4f332009!2m2!1d-121.5359457!2d38.5514955?entry=ttu">
                                                Address: 2050 Town Center Plz, Ste B140, West Sacramento, CA 95691
                                            </a>
                                        </li>
                                        <li>
                                            <a className="transition text-black t-underline t-underline-black border-b-yellow-500" href="tel:9163718999">
                                                Phone#: 9163718999
                                            </a>
                                        </li>
                                   </ul>
                                </div>
                                <hr></hr>
                                <div>
                                    <div className="font-semibold text-lg">Business Hours:</div>
                                    <ul className="space-y-4 text-sm mt-4">
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Mon: 9:00 am - 7:00 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Tues: 9:00 am - 7:00 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Wed: 9:00 am - 7:00 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Thrus: 9:00 am - 7:00 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Fri: 9:00 am - 7:00 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Sat: 9:00 am - 7:00 pm
                                            </span>
                                        </li>
                                        <li>
                                            <span href="" className=" transition text-black t-underline t-underline-black border-b-yellow-500">
                                                Sun: 10:00 am - 6:00 pm
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid justify-items-center">
                <iframe title="Map" className="w-full md:px-12" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.230818828592!2d-121.53852062403332!3d38.551495471800095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad3df825d39f3%3A0xa375706c4f332009!2sLuxury%20Nails!5e0!3m2!1sen!2sus!4v1691921708219!5m2!1sen!2sus"  height="600" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </section>
    )
}

export default Contact;