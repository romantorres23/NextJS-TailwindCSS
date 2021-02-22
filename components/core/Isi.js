import React from "react"
import IsiContent from "../IsiContent.js"
// import isiStyles from "../../styles/components/Isi.module.css"

class Isi extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const isi = document.getElementById("non-sticky-isi");
        const stickyIsi = document.getElementById("sticky-isi");
        const triggerPosition = window.innerHeight - 178;
        const expand = stickyIsi.querySelector('.expand-icon');
        const collapse = stickyIsi.querySelector('.collapse-icon');
        const page = document.querySelector("body");
        
        // Hides and shows sticky ISI based on stationary ISI position
        function checkISI() {
            if (window.scrollY + triggerPosition > isi.offsetTop) {
                stickyIsi.style.opacity = 0;
                stickyIsi.style.height = 0;
            } else {
                stickyIsi.style.opacity = 1;
                stickyIsi.style.height = "178px";
            }
        }

        window.onscroll = () => {
            checkISI();
        }

        checkISI();

        expand.addEventListener("click", function() {
            stickyIsi.style.height = "810px";
            stickyIsi.querySelector(".container").style.height = "100%";
            page.style.overflowY = "hidden";
            stickyIsi.classList.add('expanded');
        });

        collapse.addEventListener("click", function() {
            stickyIsi.style.height = "";
            stickyIsi.querySelector(".container").style.height = "";
            page.style.overflowY = "scroll";
            stickyIsi.classList.remove('expanded');
        });
    }

    render(){
        return (
            <>
                <div id="sticky-isi">
                    <div className="expand-icon">+</div>
                    <div className="collapse-icon">-</div>
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
