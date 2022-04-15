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

import HeadsetPage from "./HeadsetPage";
import MainPage from "./MainPage";

import React from "react";

function App() {
    return (
        <div>
{/*<div className={"displ"}>*/}
{/*                <div className={"filter"}>Filter</div>*/}

{/*                <span className={"contain"}>*/}
{/*                    <form className={"search"}>Search</form>*/}
{/*                    <div className={"product"}></div>*/}
{/*                    <div className={"product"}></div>*/}
{/*                    <div className={"product"}></div>*/}
{/*                    <div className={"product"}></div>*/}
{/*                    <div className={"product"}></div>*/}
{/*                    <div className={"product"}></div>*/}
{/*                    <div className={"product"}></div>*/}
{/*                    <div className={"product"}></div>*/}
{/*                    /!*<div className = {"product"}></div>*!/*/}
{/*                </span>*/}
{/*        </div>*/}
            {/*<span className={"flex-cont"}>*/}
            {/*    sosi*/}
            {/*</span>*/}


            <Router>
                <div>
                    <br/>


                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <Routes>
                        <Route path={"/oculus"} element={<HeadsetPage/>}/>
                        <Route exact path={"/"} element={<MainPage/>}/>
                    </Routes>
                    {/*<Link to={"/oculus"}>Oculus</Link>*/}
                    {/*<Link to="/">Back</Link>*/}
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>
            </Router>

        </div>
    );
}

export default App;



