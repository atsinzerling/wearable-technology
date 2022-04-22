import React from "react";
import App from "./redirect";
import Slideshow from "./Slideshow";
import Collapsible from "./Collapsible";
import Example from "./Example";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate, Link,
} from "react-router-dom";
//listener

class HeadsetPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            // title: "sosi",
            // children: "losloslsolsos"
            // product: props,
        }
        this.togglePanel = this.togglePanel.bind(this);
    }
    togglePanel(e) {
        this.setState({open: !this.state.open})
    }
    getString(list, addstr){
        let str = "";
        let path = "";
        let prod = this.props.product;
        for (let i = 0; i < list.length; i++){
            path = "this.props.product."+list[i];
            str += list[i].replace(/_/gi, " ") + ": " + this.props.product[list[i]];
            if (this.props.product[list[i]] == ""){
                str += "-"
            }
            str += addstr;
            console.log();
            if (i != list.length-1){
                str+= "\n"
            }
        }
        return str;
    }

    render() {
        return (
            <div className={"general-column"} id={"hpage-background"} >
                <Link to="/"><div>Back</div></Link>

                <div className="pagename">{this.props.product["Device_Name"]}</div>
                <br/>
                <Slideshow/>
                <br/>
                <div className={"description"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla malesuada arcu, at egestas
                    enim sagittis quis. Aliquam cursus urna at posuere elementum. Proin a ultrices quam, et fermentum
                    augue. Vestibulum metus felis, vulputate vitae lectus
                </div>
                <br/>
                <Collapsible header='Weight' details={this.getString(["Overall_Weight","Nose_weight"], " g")}/>
                <Collapsible header='Field Of View' details={this.getString(["FOV_Manufacturer_s_aspect_ratio","FOV_Manufacturer_s_FOV"], "°")}/>
                <Collapsible header={"Time"} details={this.getString(["Don_time_from_case",
                    "Doff_time_to_case",
                    "Doff_time_to_table",
                    "Don_time_from_table",
                    "Doff_time_out_of_eyes",
                    "Don_time_on_eyes"], " s")} className={"collapsible"}/>
                <br/>

                <br/>
            </div>
        );
    }
}

export default HeadsetPage;