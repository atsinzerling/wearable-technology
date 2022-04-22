import "./App.css";
// importing components from react-router-dom package
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate, Link,
} from "react-router-dom";
import {fetchShopProducts} from "./products.js";


// import Home component
import Collapsible from './Collapsible';
import Slideshow from "./Slideshow";

import HeadsetPage from "./HeadsetPage";
import MainPage from "./MainPage";

import React from "react";
import ph1 from "./img/Oculus-Quest-2.png";

function App() {
    return (
        <div>
            <Router>
                <div>
                    <br/>


                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <Routes>
                        <Route path={"/oculus"} element={<HeadsetPage product ={fetchShopProducts[0]} />}/>
                        <Route exact path={"/"} element={<MainPage/>}/>
                        {
                            fetchShopProducts.map((entry, index) =>
                                <Route key={entry.Nickname} path={"/"+entry.Nickname} element={<HeadsetPage product ={entry}/>}/>
                            )
                        }

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



