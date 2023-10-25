import {React , useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebookF , faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-regular-svg-icons";
import {faXmark , faPlus} from "@fortawesome/free-solid-svg-icons";
import {Fade , Slide} from "react-awesome-reveal";
import Img1 from "../img/2021-05-13_06-08-39_UTC.jpg";
import Img2 from "../img/pedicure.jpg";
import Img3 from "../img/facial.jpg";
import Img4 from "../img/waxing.png";


function Services(){
    const Icon_Style = {fontSize: '22',};
    const [IsClick , setIsClick] = useState(false);
    const All_Services = [
        {
            index: 1,
            name: "Manicure",
            services: [
                {   index: 1 , 
                    name: "Mani Basic" , 
                    price: '$25',
                    services: ['Nail trimming, Re-shaping, Cuticle grooming, Buffing' , 'Warm/Cool lotion massage' , 'Hot towel wrap' , 'Your choice of polish colors.'],
                },
                {   index: 2 , 
                    name: "Mani Silver" ,
                    price: '$35', 
                    services: ['Nail trimming, Re-shaping, Cuticle grooming, Buffing' ,'Sugar scrub. Mask' , 'Parrafin Wax' , 'Warm/Cool lotion massage' , 'Hot towel wrap' , 'Your choice of polish colors.'],
                },
                {   index: 3 , 
                    name: "Mani Platinum" ,
                    price: '$45',
                    services: ['Includes:( rose or pear)' , 'Nail trimming, Re-shaping, Cuticle grooming, Buffing,' , 'Sugar scrub. Mask' , 'Warm/Cool lotion massage' , 'Paraffin wax' , 'Hot stone' , 'Hot towel wrap' , 'Your choice of polish colors.'],
                },
                {   index: 4 , 
                    name: "Mani Diamond" ,
                    price: '$55',
                    services: ['Includes: collagen mani' , 'Nail trimming, Re-shaping, Cuticle grooming, Buffing' , 'Sea salt. Sugar scrub' , 'Warm/Cool lotion massage' , 'Collagen treatment' , 'Hot stone' , 'Paraffin wax' , 'Hot towel wrap' , 'Your choice of polish colors.'],
                }
            ]
        },
        {
            index: 2,
            name: "Pedicure",
            services: [
                {   index: 1 , 
                    name: "Pedi Basic" , 
                    price: '$35',
                    services: ['Nail trimming, Re-shaping, Cuticle grooming, Buffing, pumice stone' , 'Sea salt , Sugar scrub' , 'Warm/Cool lotion massage' , 'Hot towel wrap' , 'Your choice of polish colors.'],
                },
                {   index: 2 , 
                    name: "Pedi Silver" ,
                    price: '$45', 
                    services: ['Nail trimming, Re-shaping, Cuticle grooming, Buffing' , 'Sea salt. Sugar scrub. Mask' , 'Warm/Cool lotion massage' , 'Paraffin wax' , 'Hot stone' , 'Hot towel wrap' , 'Your choice of polish colors.',],
                },
                {   index: 3 , 
                    name: "Pedi Gold" ,
                    price: '$50',
                    services: ['Includes: lemon, green tea , lavender , jasmine, orange, mango,.....', 'Nail trimming, Re-shaping, Cuticle grooming, Buffing' , 'Sea salt. Sugar scrub. Mask' , 'Warm/Cool lotion massage' , 'Paraffin wax' , 'Hot stone' , 'Hot towel wrap' ,  'Your choice of polish colors.'],
                },
                {   index: 4 , 
                    name: "Pedi Platinum" ,
                    price: '$60',
                    services: [ 'Includes: (Rose or Wine)', 'Nail trimming, Re-shaping, Cuticle grooming, Buffing' , 'Sea salt. Sugar scrub. Mask' , 'Warm/Cool lotion massage' , 'Paraffin wax' , 'Hot stone' , 'Hot towel wrap' , 'Your choice of polish colors.'],
                },
                {   index: 5 , 
                    name: "Pedi Diamond" ,
                    price: '$70',
                    services: ['Includes: Collagen' , 'Nail trimming, Re-shaping, Cuticle grooming, Buffing ,pumice stone' , 'Sea salt, Sugar scrub, mask' , 'Warm/Cool lotion massage' , 'Collagen treatment' , 'paraffin wax' , 'Hot stone' , 'Hot towel wrap' , 'Your choice of polish colors.'],
                },
                {   index: 6 , 
                    name: "Pedi Luxury" ,
                    price: '$80',
                    services: ['Choice of Five steps Detox Volcano Crystal Spa with Bubbling & Fizzing Kit: Tropical Citrus , Green Tea & Aloe Vera , Romance , Orange No.5 , Lavender eruption , Honey Pearl' , 'Nail trimming, Re-shaping, Cuticle grooming, Buffing ' ,'Fresh Orange/Mandarin Scrub','Callus removal' , 'Moisturizing mask to soften your feet' , 'Lotion and hot stone massage' , 'Paraffin wax treatment' , 'Hot towel wrap' , 'Your choice of polish colors'],
                },
            ]
        },
        {
            index: 3,
            name: "Kid Services",
            services: [
                {   index: 1 , 
                    name: "Princess Manicure", 
                    price: '$15',
                    services: [],
                },
                {   index: 2, 
                    name: "Princess Pedicure", 
                    price: '$25',
                    services: [],
                },
                {   index: 3, 
                    name: "Kid Hands Color", 
                    price: '$8',
                    services: [],
                },
                {   index: 4, 
                    name: "Kid Toes Color", 
                    price: '$10',
                    services: [],
                },
            ]
        },
        {
            index: 4,
            name: "Nail Enhancements",
            services: [
                {   index: 1 , 
                    name: "Acrylic Full set", 
                    price: '$50+',
                    services: [],
                },
                {   index: 2, 
                    name: "Fill", 
                    price: '$35+',
                    services: [],
                },
                {   index: 3, 
                    name: "Dip Powder on Real Nails", 
                    price: '$45+',
                    services: [],
                },
                {   index: 4, 
                    name: "Dip Powder w/Tip", 
                    price: '$50+',
                    services: [],
                },
                {   index: 5, 
                    name: "Full set Powder Color", 
                    price: '$55+',
                    services: [],
                },
                {   index: 6, 
                    name: "Full set Pink White", 
                    price: '$60+',
                    services: [],
                },
                {   index: 7, 
                    name: "Full set Ombre Pink White", 
                    price: '$60+',
                    services: [],
                },
                {   index: 8, 
                    name: "Pink & White Fill-in", 
                    price: '$50',
                    services: [],
                },
            ]
        },
        {
            index: 5,
            name: "Facial",
            services: [
                {
                    index: 1,
                    name: 'Mini Facial (30mins)',
                    price: '$40',
                    services: ['Transform Your Skin: Our Spring Treatment Delivers Nourished and Radiant Complexion' , 'Brighten Dullness: Experience a Vibrant Glow as Our Treatment Diminishes Signs of Dullness' , 'Intense Hydration: Replenish and Hydrate Your Skin, Leaving it Refreshed and Supple' , 'Proven Benefits: Backed by Results and Client Satisfaction, Our Treatment Delivers On Promises']
                },
                {
                    index: 2,
                    name: 'Facial- gold facial (45mins)',
                    price: '$60',
                    services: ['Flash Facial for Radiance: Get the Glowing Skin You Desire with Our Flash Facial' , 'Brightening Botanicals & Antioxidants: Harness the Power of Natural Brighteners and Antioxidants' , 'Tranexamic Acid & Vitamin C: Target Skin Clarity and Luminosity with Tranexamic Acid and Vitamin C' , 'Suitable for All Skin Types: Ideal for Every Skin Type to Achieve Radiance' , 'Luxurious Hydration & Softening: Experience Luxurious Hydration and Softening Effects' , 'Quick and Effective: See Rapid Results with This Flash Facial']
                },
                {
                    index: 3,
                    name: 'Facial  daimond ( 60mins)',
                    price: '$75',
                    services: ['Organic-Based Brightening and Tightening: Experience Excellent Skin Brightening and Tightening with our Organic Treatment' , 'Fruit Enzymes & Power Peptides: Harness the Benefits of Fruit Enzymes and Potent Power Peptides' , 'Glowing Appearance: Achieve a Beautifully Glowing Skin with This Treatment' , 'Effective and Safe: Get Results Safely with Our Organic Approach' , 'outhful Firmness: Enjoy the Youthful Firmness that Comes with Skin Tightening']
                }
            ]
        },
        {
            index: 6,
            name: "Waxing",
            services: [
                {
                    index: 1,
                    name: 'Eyebrows Wax',
                    price: '$15',
                    services: []
                },
                {
                    index: 2,
                    name: 'Lip Wax',
                    price: '$8',
                    services: []
                },
                {
                    index: 3,
                    name: 'Chin Wax',
                    price: '$10+',
                    services: []
                },
                {
                    index: 4,
                    name: 'Full Face Wax',
                    price: '$40+',
                    services: []
                },
                {
                    index: 5,
                    name: 'Under Arm Wax',
                    price: '$20+',
                    services: []
                },
                {
                    index: 6,
                    name: 'Half Arm Wax',
                    price: '$35+',
                    services: []
                },
                {
                    index: 7,
                    name: 'Full Arm Wax',
                    price: '$45+',
                    services: []
                },
                {
                    index: 8,
                    name: 'Half Leg Wax',
                    price: '$45+',
                    services: []
                },
                {
                    index: 9,
                    name: 'Full Leg Wax',
                    price: '$65+',
                    services: []
                },
                {
                    index: 10,
                    name: 'Back Wax',
                    price: '$50+',
                    services: []
                },
                {
                    index: 11,
                    name: 'Chest Wax',
                    price: '$35+',
                    services: []
                },
                {
                    index: 12,
                    name: 'Bikini Wax',
                    price: '$40+',
                    services: []
                },
            ]
        },
        {
            index:7,
            name: 'Addition Services',
            services: [
                {
                    index: 1,
                    name: "Hands Color Change",
                    price: "$15",
                    services: []
                },
                {
                    index: 2,
                    name: "Toes Color Change",
                    price: "$20",
                    services: []
                },
                {
                    index: 3,
                    name: "Hands Color Change w.Gel",
                    price: "$25",
                    services: []
                },
                {
                    index: 4,
                    name: "Toes Color Change w.Gel",
                    price: "$25",
                    services: []
                },
                {
                    index: 5,
                    name: "French Tip",
                    price: "$5+",
                    services: []
                },
                {
                    index: 6,
                    name: "Callus",
                    price: "$10",
                    services: []
                },
                {
                    index: 7,
                    name: "Design",
                    price: "$8+",
                    services: []
                },
                {
                    index: 8,
                    name: "Take Off Acrylic Powder-Dip Powder",
                    price: "$10+",
                    services: []
                },
                {
                    index: 9,
                    name: "Paraffin Wax",
                    price: "$5",
                    services: []
                },
            ]
        }
    ];

    const button = [
        {id: 1 , name: 'Manicure'},
        {id: 2 , name: 'Pedicure'},
        {id: 3 , name: 'Waxing'},
        {id: 4 , name: 'Facial'},
        {id:5 , name: 'Kid Services'},
        {id:6 , name: 'Nail Enhancements'},
        {id: 7 , name: 'Addition Services'}
    ]

    const handleBtn = (id) => {
        setIsClick((lastClick) => ({
            ...lastClick,
            [id]: !lastClick[id],
        }));
    };

    return(
        <section className="space-y-6 pb-5 lg:space-y-12 md:bg-white bg-black/70">
            <Fade  delay={200} direction="right">
                <div className="spage pt-56 md:pb-40 relative">
                    <div className="test1 border-b-2 tracking-wide border-b-yellow-400 cursor-pointer text-white md:text-4xl italic uppercase font-Roboto font-bold">
                        <h2>Our Services</h2>
                    </div>
                </div>
            </Fade>
                <div className="p-4 space-y-5 md:hidden overflow-hidden">
                    {button.map(({id , name}) => (
                        <div className="grid grid-cols-1">
                            <div className="space-y-4">
                                <button className="w-full py-3 shadow-lg font-semibold tracking-wide uppercase  text-center border-ser-color border-4" key={id} onClick={() => handleBtn(id)}>
                                    <div className="grid grid-cols-3">
                                        <div className="col-span-2 text-white tracking-wider">{name}</div>
                                        <div>
                                            {!IsClick[id]?
                                                <FontAwesomeIcon className="text-white" icon={faPlus} />: <FontAwesomeIcon className="text-white" icon={faXmark} />
                                            }
                                        </div>
                                    </div>
                                </button>
                                {IsClick[id] && (
                                    <div>
                                        <Fade delay={100}>
                                            {All_Services.map((se) => {
                                                if (se.name === name){
                                                    return (
                                                                <div className="p-4 shadow-lg space-y-3 rounded-lg">
                                                                    <div key={se.index} className="text-5xl font-Rouge  text-yellow-500 text-center">
                                                                        <h1>{se.name}</h1>
                                                                    </div>
                                                                        {(() =>{
                                                                            switch (se.name){
                                                                                case 'Manicure':
                                                                                    return (
                                                                                        <div className="grid p-3 grid-cols-1">
                                                                                            <img src={Img1} alt= "#" />
                                                                                        </div>
                                                                                    )
                                                                                case 'Pedicure':
                                                                                    return (
                                                                                        <div className="grid p-3 grid-cols-1">
                                                                                            <img src={Img2} alt= "#" />
                                                                                        </div>
                                                                                    )
                                                                                case 'Facial':
                                                                                    return (
                                                                                        <div className="grid p-3 grid-cols-1">
                                                                                            <img src={Img3} alt= "#" />
                                                                                        </div>
                                                                                    )
                                                                                case 'Waxing':
                                                                                    return (
                                                                                        <div className="grid p-3 grid-cols-1">
                                                                                            <img src={Img4} alt= "#" />
                                                                                        </div>
                                                                                    )
                                                                                default:
                                                                                    return null
                                                                            }
                                                                        })()}
                                                                    {se.services.map((sei) => (
                                                                        <div key={sei.index} className="px-2 text-yellow">
                                                                            <div className="space-y-4">
                                                                                <h3 className={(() => {
                                                                                    switch (se.name){
                                                                                        case 'Kid Services':
                                                                                            case 'Waxing':
                                                                                                case 'Nail Enhancements':
                                                                                                    case 'Addition Services':
                                                                                                        return "text-xl text-white"
                                                                                    
                                                                                        default:
                                                                                            return "text-2xl text-yellow-500"
                                                                                    }
                                                                                })()}> 
                                                                                {sei.index}. {sei.name} ( {sei.price} )</h3>
                                                                                    <ul className="mb-5 space-y-4 text-left">
                                                                                        {sei.services.map((seiv , index) =>(
                                                                                            <li className="flex px-3 text-white items-center space-x-3">
                                                                                                <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                                                                <span key={index}>{seiv}</span>
                                                                                            </li>
                                                                                        ))}
                                                                                        {name === "Manicure" && (
                                                                                            <div className="text-yellow-500">Addition $10 for Gel</div>
                                                                                        )}
                                                                                        {name === "Pedicure" && (
                                                                                            <div className="text-yellow-500">Addition $10 for Gel</div>
                                                                                        )} 
                                                                                        
                                                                                    </ul>
                                                                                    
                                                                            </div>
                                                                        </div>
                                                                    ))}              
                                                                </div>
                                                            )
                                                }
                                            })}
                                        </Fade>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            {All_Services.map((ser) => (
                <div className="md:space-y-12 p-3  hidden md:block">
                    <Slide direction="left" delay={200}>
                        <div key={ser.index} className="flex justify-center">
                            <h1 className="border-b-2 tracking-wide uppercase border-b-yellow-400 cursor-pointer italic text-black md:text-4xl font-bold">{ser.name}</h1>
                        </div>
                        <div className="p-4 mx-auto max-w-screen-xl cursor-pointer">
                            <div className={(() =>{
                                switch(ser.name){
                                    case 'Manicure': 
                                        case 'Nail Enhancements' :
                                            case 'Waxing':
                                                case 'Kid Services':
                                                    return "space-y-8 md:grid-cols-2 grid lg:grid-cols-4 gap-3 xl:gap-10 lg:space-y-0"
                                    case 'Pedicure' : 
                                        case 'Facial' :
                                            case 'Addition Services':
                                                return "space-y-8 grid md:grid-cols-2 lg:grid-cols-3 gap-3 xl:gap-10 lg:space-y-0"
                                    default: 
                                        return null
                                }
                            })()}>
                                {ser.services.map((seri) => (
                                    <div key={ser.index} className="ease-in-out  transition-all duration-1000 md:hover:scale-105 flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-yellow-400 shadow-md">
                                        <h3 className="text-lg md:text-2xl font-semibold">{seri.name}</h3>
                                        <div  key={ser.index} className="flex justify-center items-baseline my-5">
                                            <span className="mr-2 text-2xl font-extrabold">{seri.price}</span>
                                        </div>
                                        <hr className="mb-4"></hr>
                                        <ul className="mb-5 space-y-4 text-left">
                                            {seri.services.length > 0 ? (
                                                seri.services.map((servi , index) => {
                                                        switch (ser.name){
                                                            case 'Manicure':
                                                                return (
                                                                    <li className="flex items-center space-x-3">
                                                                        <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                                        <span key={index}>{servi}</span>
                                                                    </li>
                                                                )
                                                            default:
                                                                return (
                                                                        <li className="flex items-center space-x-3">
                                                                            <svg className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                                                            <span key={index}>{servi}</span>
                                                                        </li>
                                                                    );
                                                        }
                                                    })
                                            ):null}   
                                        </ul>
                                        <div>
                                            {(() => {
                                                switch (ser.name){
                                                    case 'Manicure':
                                                        case 'Pedicure':
                                                            return <div className="border-2 font-Poppins text-black font-bold border-red-500 py-3">Additional $10 for Gel</div>
                                                    default:
                                                        return (
                                                            <div className="flex space-x-7 justify-center">
                                                                <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "das">
                                                                    <FontAwesomeIcon className="hover:text-rose-300 transition ease-in-out delay-150 duration-200" style={Icon_Style}  icon={faInstagram}></FontAwesomeIcon>
                                                                </a>
                                                                <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "https://www.facebook.com/profile.php?id=61550651454544">
                                                                    <FontAwesomeIcon className="hover:text-sky-300 transition ease-in-out delay-150 duration-200" style={Icon_Style} icon={faFacebookF}></FontAwesomeIcon>
                                                                </a>
                                                                <a className="cursor-pointer flex" target="_blank" rel="noreferrer" href = "mailto:nguyenthuyan1706@gmail.com">
                                                                    <FontAwesomeIcon className="hover:text-green-300" style={Icon_Style} icon={faEnvelope}></FontAwesomeIcon>
                                                                </a>
                                                            </div>
                                                        )
                                                }
                                            })()}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Slide>
                </div>              
            ))}
            
        </section>
    );
};
export default Services;