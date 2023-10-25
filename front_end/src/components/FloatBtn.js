import {React , useState , useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowUp} from "@fortawesome/free-solid-svg-icons"
function FloatBtn(){
    const [isThere , SetisThere] = useState(false)
    const changeisThere = () =>{
        if (window.pageYOffset > 300){
            SetisThere(true)
        }
        else{
            SetisThere(false)
        }
    }

    const scrollTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth",
        })
    }

    useEffect(() => {
        window.addEventListener('scroll' , changeisThere)
        return () => {
            window.removeEventListener('scroll' , changeisThere)
        }
    } , [])

    return (
        <div className= {`${isThere?"opacity-100": "opacity-0"}  fixed bottom-4 z-10 right-4 md:right-12 rounded-full p-2 animate-bounce  border-2 border-ser-color shadow-lg bg-ser-color`}>
            <button className="cursor-pointer" type="button" onClick={scrollTop}>
            <FontAwesomeIcon icon={faArrowUp} className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    );
};

export default FloatBtn;