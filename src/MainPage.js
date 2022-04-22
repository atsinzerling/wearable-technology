import "./App.css";
// importing components from react-router-dom package
import {fetchShopProducts} from "./products.js";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate, Link,
} from "react-router-dom";

// import Home component
import Collapsible from './Collapsible';
import Slideshow from "./Slideshow";
import Checkbox from "./Checkbox";

import ph1 from './img/Oculus-Quest-2.png';

import HeadsetPage from "./HeadsetPage";
import React from "react";

class MainPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {products:fetchShopProducts};
        this.ref100 = React.createRef();
        this.ref101200 = React.createRef();
        this.ref201300 = React.createRef();
        this.ref301400 = React.createRef();
        this.ref401500 = React.createRef();
        this.ref501 = React.createRef();
        this.handleCheckbox = this.handleCheckbox.bind(this);
    }
    handleCheckbox(e){
        console.log('clicked '+ this.ref100.current.state.checked+','+this.ref101200.current.state.checked+','+this.ref201300.current.state.checked
            +','+this.ref301400.current.state.checked+','+this.ref401500.current.state.checked+','+this.ref501.current.state.checked);
        this.setState({ products:
                fetchShopProducts.filter((product) =>
                        (this.ref100.current.state.checked?((parseInt(product.Overall_Weight) <= 100) == this.ref100.current.state.checked):false) ||
                        (this.ref101200.current.state.checked?((parseInt(product.Overall_Weight) > 100) && (parseInt(product.Overall_Weight) <= 200) == this.ref101200.current.state.checked):false) ||
                        (this.ref201300.current.state.checked?((parseInt(product.Overall_Weight) > 200) && (parseInt(product.Overall_Weight) <= 300) == this.ref201300.current.state.checked):false) ||
                        (this.ref301400.current.state.checked?((parseInt(product.Overall_Weight) > 300) && (parseInt(product.Overall_Weight) <= 400) == this.ref301400.current.state.checked):false) ||
                        (this.ref401500.current.state.checked?((parseInt(product.Overall_Weight) > 400) && (parseInt(product.Overall_Weight) <= 500) == this.ref401500.current.state.checked):false) ||
                        (this.ref501.current.state.checked?((parseInt(product.Overall_Weight) > 500) == this.ref501.current.state.checked):false)
                    )
            });


        // Under 100g; 101g - 200g; 201g - 300g; 301g - 400g; 401g - 500g; Above 501g

        console.log(this.state);
    }




    // const fetchShopProducts = [
    //         {
    //             id: 0,
    //             title: 'vr1',
    //             description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
    //             price: 1.99,
    //             belongsTo: [0, 1],
    //             imageUrl: 'http://via.placeholder.com/80x80'
    //         },
    //         {
    //             id: 1,
    //             title: 'vr2',
    //             description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
    //             price: 1.99,
    //             belongsTo: [0, 6],
    //             imageUrl: 'http://via.placeholder.com/80x80'
    //         },
    //         {
    //             id: 2,
    //             title: 'Full Sta',
    //             description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
    //             price: 1.99,
    //             belongsTo: [0, 1, 4],
    //             imageUrl: 'http://via.placeholder.com/80x80'
    //         },
    //         {
    //             id: 3,
    //             title: 'User In',
    //             description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
    //             price: 1.99,
    //             belongsTo: [0, 2],
    //             imageUrl: 'http://via.placeholder.com/80x80'
    //         },
    //         {
    //             id: 4,
    //             title: 'JavaS',
    //             description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
    //             price: 1.99,
    //             belongsTo: [0, 1],
    //             imageUrl: 'http://via.placeholder.com/80x80'
    //         },
    //         {
    //             id: 5,
    //             title: 'Us',
    //             description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
    //             price: 1.99,
    //             belongsTo: [0, 2],
    //             imageUrl: 'http://via.placeholder.com/80x80'
    //         },
    //         {
    //             id: 6,
    //             title: 'Adv',
    //             description: 'The FitnessGram™ Pacer Test is a multistage aerobic capacity test that progressively gets more difficult as it continues. The 20 meter pacer test will begin in 30 seconds. ... The running speed starts slowly, but gets faster each minute after you hear this signal.',
    //             price: 1.99,
    //             belongsTo: [0, 6],
    //             imageUrl: 'http://via.placeholder.com/80x80'
    //         },
    //     ]
    // ;/
    render(){
        return (
            <div className="general-column">
                <div className={"displ"}>
                    <div className={"filter"}>
                        <div className={"filter-header+apply"}>
                            <span className={"filter-header"}>Filters</span>
                            <span className={"apply-button"} onClick={this.handleCheckbox}>Apply</span>
                        </div>
                        <br/>
                        <br/>
                        <div className={"filter-items"}>
                            <div><Checkbox ref={this.ref100} label={"Under 100g"}/></div>
                            <div><Checkbox ref={this.ref101200} label={"101g - 200g"}/></div>
                            <div><Checkbox ref={this.ref201300} label={"201g - 300g"}/></div>
                            <div><Checkbox ref={this.ref301400} label={"301g - 400g"}/></div>
                            <div><Checkbox ref={this.ref401500} label={"401g - 500g"}/></div>
                            <div><Checkbox ref={this.ref501} label={"Above 501g"}/></div>
                        </div>

                    </div>

                    <span className={"contain"}>
                        <div className={"search"}>
                            <span className={"search-button"}>Search</span>

                        </div>
                    {/*<Link to={"/oculus"}><div className={"product"}>*/}
                    {/*    <img src={ph1} className={"img-pr"}/>*/}
                    {/*    <div className={"product-name"}>Oculus Quest 2</div>*/}
                    {/*</div></Link>*/}


                        {
                            this.state.products.map((entry, index) =>
                                <Link to={"/" + entry.Nickname} key={entry.Nickname}>
                                    <div className={"product"}>
                                        <img src={ph1} className={"img-pr"}/>
                                        <div className={"product-name"}>{entry.Device_Name}</div>
                                        <div className={"product-name-2"}>{entry.Link_to_manufacturer_specs}</div>
                                    </div>
                                </Link>
                            )
                        }


                        {/*<div className = {"product"}></div>*/}
                </span>
                </div>

            </div>
        );
    }
}

export default MainPage;