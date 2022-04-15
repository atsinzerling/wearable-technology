import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Collapsible.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Collapsible from './Collapsible';
import retText from './retText';
import Slideshow from "./Slideshow";

function SomePage() {
    return (
        <div className="general-column">
            <div className = "pagename">Oculus Quest 2</div>
            <Slideshow/>
            <br/>
            <div className={"description"}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc fringilla malesuada arcu, at egestas enim sagittis quis. Aliquam cursus urna at posuere elementum. Proin a ultrices quam, et fermentum augue. Vestibulum metus felis, vulputate vitae lectus in, ullamcorper vestibulum arcu. Aliquam erat volutpat. Vivamus congue arcu ligula, ac euismod lacus vulputate vitae. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In hac habitasse platea dictumst. In laoreet molestie ligula, quis hendrerit nisl pulvinar vehicu
            </div>
            <br/>
            <Collapsible header={"Some deatials"} details={'Gfd: jgjfjkd\nSosi: jjdsjfs\nposhyalnahui'} className={"collapsible"}/>
            <Collapsible header='Whatever' details='gfjdkdgh11'/>
            <br/>
            <br/>
        </div>
    );
}

export default SomePage;