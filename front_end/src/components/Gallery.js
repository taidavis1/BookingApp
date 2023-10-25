import {React} from "react";
import {Gallery as Glery , Item , } from "react-photoswipe-gallery";
import 'photoswipe/dist/photoswipe.css';
function importImg(r){
    return r.keys().map(r);
}
function Gallery(){
    const options = {
        zoom: false,
        tapAction:'close',
        doubleTapAction: false,
    }
    const fnames = importImg(require.context('../img/nail-img/' , false , /\.(png|jpg|jpeg)$/));
    return(
        <section className = "space-y-6">
            <div className="gpage pt-56 md:pb-40 relative">
                <div className="test1 border-b-2 tracking-wide border-b-yellow-400 cursor-pointer text-black md:text-4xl italic uppercase font-Roboto font-bold">
                    <h2>Gallery</h2>
                </div>
            </div>
                <div class="cursor-pointer md:px-24 px-6 overflow-x-hidden">
                    <div class="grid md:grid-cols-3 grid-cols-2 justify-items-center gap-2 cursor-pointer">
                        <Glery options={options}>
                            {fnames.map((fname , index) => (
                                    <>
                                        <div key={index} class="p-1 shadow-lg md:p-2">
                                            <Item width="900" height="900"key={index} original={fname}  alt= "#">
                                                {({ref , open}) => (
                                                    <img className=" rounded-lg hover:opacity-70 transition-opacity ease-in" alt="#" ref={ref} src={fname}  onClick={open} />
                                                )}
                                            </Item>
                                        </div>
                                    </>
                            ))}
                        </Glery>
                    </div>
                </div>
        </section>
    );
};

export default Gallery;