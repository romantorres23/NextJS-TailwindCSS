import React from "react"
import isiStyles from "../../styles/components/Isi.module.css"
import IsiContent from "../IsiContent.js"

class Isi extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const isi = document.getElementById("non-sticky-isi");
        const stickIsi = document.getElementById("sticky-isi");
        const triggerPosition = window.innerHeight - 178;
        window.onscroll = () => {
            if (window.scrollY + triggerPosition > isi.offsetTop) {
                stickIsi.style.opacity = 0;
                stickIsi.style.height = 0;
            } else {
                stickIsi.style.opacity = 1;
                stickIsi.style.height = "178px";
            }
        }
    }

    render(){
        return (
            <>
                <div id="sticky-isi" className="bg-white border-t-2 fixed bottom-0 w-full transition-opacity duration-250 ease-out">
                    <div className="absolute top-1 font-bold text-3xl leading-3 right-px cursor-pointer">+</div>
                    <div className="container relative h-44 overflow-y-scroll overflow-x-hidden">
                        <h3 className="text-3xl mb-2 font-bold">Important Safety Information</h3>
                        <IsiContent />
                    </div>
                </div>
                <div id="non-sticky-isi" className="bg-white mt-10 border-t-2 w-full">
                    <div className="container">
                        <h3 className="text-3xl mb-2 font-bold">Important Safety Information</h3>
                        <IsiContent />
                    </div>
                </div>
            </>
        )
    }
}

export default Isi
