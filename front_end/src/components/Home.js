import {React , useState , useEffect} from "react";
import {Fade , Slide} from "react-awesome-reveal"
import Spa from "../img/Spa.jpg";
import manicure from "../img/363860602_126892143811857_1468051418096498141_n.jpg";
import pedicure from "../img/pedicure.jpg";
import waxing from "../img/waxing.png";
import facial from "../img/facial.jpg";
function importImg(r){
    return r.keys().map(r);
}
function Home(){
    const fnames = importImg(require.context('../img/img-home/' , false , /\.(png|jpg|jpeg)$/));
    return(
        <section className="space-y-6 md:space-y-12 relative">
            <div className="hpage w-screen h-screen relative">
                <Fade cascade delay={150}>
                    <div className="test px-12 py-3 space-y-4 md:p-6 md:space-y-12 text-center border-2 border-yellow-400 bg-white/50 font-sans block shadow-md shadow-black">
                        <div className="text-lg md:text-4xl">
                            <h1 className="text-black tracking-wider font-Roboto whitespace-nowrap uppercase font-semibold">Luxury nails and spa</h1>
                        </div>
                        <div className="flex justify-center">
                            <h2 className="text-lg font-lato md:text-4xl md:w-3/4 font-extrabold tracking-wide">Where Your Imagination Meets Your Nails' Canvas!</h2>
                        </div>
                        <button onClick={(e) => {
                            e.preventDefault();
                            window.location.href = '/Booking/services';
                        }} className="hover:bg-black md:text-lg text-sm py-2 px-1 group cursor-pointer md:px-12 border-black border-2 uppercase font-serif md:tracking-wide">
                            <a className = "group-hover:text-white ">Book Appointment</a>
                        </button>
                    </div>
                </Fade>
            </div>
            <div className="p-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="cursor-pointer overflow-hidden">
                        <img className="w-full opacity-100 lg:opacity-70 lg:hover:opacity-100 h-full object-cover ease-in-out transition-all duration-1000 hover:scale-125" src={Spa} alt="#"/>
                    </div>
                    <Slide direction="right" delay={200}>
                        <div className="items-center md:mt-10 flex flex-col md:space-y-8 space-y-3 tracking-wider">
                            <div>
                                <h1 className = "border-b-2 border-yellow-500/80 text-lg font-Freehand md:text-4xl uppercase text-black font-bold">Who we are ?</h1>
                            </div>
                            <div className="md:w-3/4 font-new-2-font text-center  text-sm md:text-lg ">
                                <h2 className="">Luxury Nails Spa is a premier nail salon in Sacramento that offers a wide variety of nail services for men and women. We use only the highest quality products and our staff are highly trained and experienced. We are committed to providing our clients with a luxurious and relaxing experience, from the moment they walk in the door to the moment they leave.</h2>
                            </div>
                            <div className="md:w-3/4 font-new-2-font text-center  text-sm md:text-lg ">
                                <h2>
                                    Our mission is to provide our clients with a luxurious and relaxing experience, while also providing them with the highest quality nail services. We want our clients to feel beautiful and confident, and we want them to leave our salon feeling happy and satisfied.
                                </h2>
                            </div>
                            <div className="flex flex-col text-center md:space-y-4">
                                <div>
                                    <h1 className="font-Poppins  text-lg md:text-2xl">Location :</h1>
                                </div>
                                <div className="text-md md:text-lg font-Roboto t-underline t-underline-black ">
                                    <a className="text-gray-700" target="_blank"  rel="noreferrer" href="https://www.google.com/maps/dir/37.3293056,-120.4944896/Luxury+Nails/@37.9435164,-121.6752707,9z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x809ad3df825d39f3:0xa375706c4f332009!2m2!1d-121.5359457!2d38.5514955?entry=ttu">
                                        Luxury Nails, 2050 Town Center Plaza # B140, West Sacramento, CA 95691
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>
            </div>
            <hr></hr>
            <Fade triggerOnce delay={500} direction="left">
                <div className="bpage p-4 lg:px-28 relative space-y-4 lg:space-y-12">
                    <div className="flex justify-center text-lg lg:text-4xl">
                        <h1 className="font-Freehand uppercase font-bold  text-black tracking-widest border-b-2 border-yellow-500/80">What We Do</h1>
                    </div>
                    <div className="grid lg:grid-cols-4 md:grid-cols-2 justify-items-center gap-2 cursor-pointer">
                        <div className="max-w-sm shadow-lg rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">
                            <div className="overflow-hidden">
                                <img src={manicure} alt="#" className="w-full" />
                            </div>
                            <div className="text-center px-6 py-4 mb-4">
                                <h1 className=" md:text-xl uppercase font-serif">Manicure</h1>
                                <ul className=" text-md list-disc list-inside">
                                    <li>Our manicure services will leave your nails looking and feeling their best</li>
                                    <li>We offer a variety of manicure options to choose from, so you can find the perfect one for your needs</li>
                                    <li>Our experienced nail technicians will take the time to pamper your hands and nails, leaving you feeling relaxed and confident.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="max-w-sm shadow-lg rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">
                            <div className="overflow-hidden">
                                <img src={pedicure} alt="#" className="w-full" />
                            </div>
                            <div className="text-center px-6 py-4 mb-4">
                                <h1 className="font-serif md:text-xl uppercase">Pedicure</h1>
                                <ul className=" text-md list-disc list-inside">
                                    <li>Our pedicure services will leave your feet and toes feeling refreshed and rejuvenated</li>
                                    <li>We offer a variety of pedicure options to choose from, so you can find the perfect one for your needs.</li>
                                    <li>Our experienced nail technicians will take the time to pamper your feet, leaving you feeling relaxed and confident.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="max-w-sm shadow-lg rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">
                            <div className="overflow-hidden">
                                <img src={facial} alt="#" className="w-full" />
                            </div>
                            <div className="text-center px-6 py-4 mb-4">
                                <h1 className="font-serif md:text-xl uppercase">Facial</h1>
                                <ul className=" text-md list-disc list-inside">
                                    <li>Our facial services will leave your skin looking and feeling its best.</li>
                                    <li>We offer a variety of facial options to choose from, so you can find the perfect one for your needs.</li>
                                    <li>Our experienced estheticians will take the time to pamper your skin and make you look your best.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="max-w-sm shadow-lg rounded-lg mb-2 ease-in-out transition-all duration-1000 md:hover:scale-105">
                            <div className="overflow-hidden">
                                <img src={waxing} alt="#" className="w-full" />
                            </div>
                            <div className="text-center px-6 py-4 mb-4">
                                <h1 className="font-serif md:text-xl uppercase">Waxing</h1>
                                <ul className=" text-md list-disc list-inside">
                                    <li>Our waxing services will leave you with smooth, hair-free skin that you'll love.</li>
                                    <li>We offer a variety of waxing options to choose from, so you can find the perfect one for your needs.</li>
                                    <li>Our experienced technicians will take the time to make you feel comfortable and relaxed, and our results will last for weeks.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="shadow-md text-sm hover:bg-black ease-in-out transition  duration-100 hover:scale-105 md:text-2xl group cursor-pointer px-4 md:px-16 py-2 border-black border-2 uppercase font-serif tracking-wide">
                            <a href="/Services" className="group-hover:text-white font-Poppins">Check Our Prices! </a>
                        </button>
                    </div>
                </div>
            </Fade>
            <hr></hr>
            <Slide delay={500} duration={500} triggerOnce direction="left">
                <div className="bg-white relative space-y-4 ">
                    <div className="flex justify-center text-lg lg:text-4xl ">
                        <h1 className="font-Freehand font-bold uppercase  text-black tracking-widest border-b-2 border-yellow-500/80">Gallery</h1>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-2 md:grid-2 justify-items-center p-4 lg:px-52 cursor-pointer">
                        {fnames.slice(0,6).map((fname , index) =>(
                            <div key={index} className="shadow-lg overflow-hidden max-w-sm">
                                <img className="w-full opacity-80 hover:opacity-100 ease-in-out transition-all duration-1000 hover:scale-125" src={fname} alt={fname}/>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center pb-4">
                        <button className="shadow-md  hover:bg-black ease-in-out transition  duration-100 hover:scale-105 text-sm md:text-2xl group cursor-pointer px-4 md:px-16 py-2 border-black border-2 uppercase font-serif tracking-wide">
                            <a href="/Gallery" className="group-hover:text-white font-Poppins">More Photos </a>
                        </button>
                    </div>
                </div>
            </Slide>
            
        </section>
    );
};

export default Home;