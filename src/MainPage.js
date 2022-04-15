import "./App.css";
// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate, Link,
} from "react-router-dom";

// import Home component
import Collapsible from './Collapsible';
import Slideshow from "./Slideshow";
import ph1 from './img/Oculus-Quest-2.png';

import HeadsetPage from "./HeadsetPage";
import React from "react";

function MainPage() {
    return (
        <div className="general-column">
            <div className={"displ"}>
                <div className={"filter"}>Filter</div>

                <span className={"contain"}>
                    <form className={"search"}>Search</form>
                    <Link to={"/oculus"}><div className={"product"}>
                        <img src={ph1} className={"img-pr"}/>
                        <div className={"product-name"}>Oculus Quest 2</div>
                    </div></Link>

                    <div className={"product"}></div>
                    <div className={"product"}></div>
                    <div className={"product"}></div>
                    <div className={"product"}></div>
                    <div className={"product"}></div>
                    <div className={"product"}></div>
                    <div className={"product"}></div>
                    {/*<div className = {"product"}></div>*/}
                </span>
            </div>

        </div>







        // <div>
        //     llllkjhgf
        //         <div>
        //             <br/>
        //             {/*<Router>*/}
        //             <Link to={"/oculus"}>Oculus2</Link>
        //             {/*<Link to={"/"}>Back2</Link>*/}
        //             {/*</Router>*/}
        //             <br/>
        //             <br/>kjhgfdhjgf
        //             <br/>
        //             <br/>
        //
        //             <br/>
        //             <br/>
        //             <br/>
        //             <br/>
        //         </div>
        // </div>
    );
}

export default MainPage;