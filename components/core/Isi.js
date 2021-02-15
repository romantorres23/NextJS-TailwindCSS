import React from "react"
import IsiContent from "../IsiContent.js"
// import isiStyles from "../../styles/components/Isi.module.css"

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
                <div id="sticky-isi">
                    <div className="expand-icon">+</div>
                    <div className="container">
                        <h3 className="title">Important Safety Information</h3>
                        <IsiContent />
                    </div>
                </div>
                <div id="non-sticky-isi">
                    <div className="container">
                        <h3 className="title">Important Safety Information</h3>
                        <IsiContent />
                    </div>
                </div>
            </>
        )
    }
}

export default Isi
