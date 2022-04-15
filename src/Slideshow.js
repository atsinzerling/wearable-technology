import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./Slideshow.css";
import "react-slideshow-image/dist/styles.css";
import ph1 from './img/Oculus-Quest-2.png';
import ph2 from './img/oculus-quest-2 (1).png';
import ph3 from './img/Quest2Lower.png';



class Slideshow extends Component {
    constructor() {
        super();
        this.slideRef = React.createRef();
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            current: 0
        };
    }

    back() {
        this.slideRef.current.goBack();
    }

    next() {
        this.slideRef.current.goNext();
    }

    render() {
        const properties = {
            duration: 5000,
            autoplay: true,
            transitionDuration: 500,
            arrows: true,
            infinite: true,
            easing: "ease",
            indicators: (i) => <div className="indicator">{i + 1}</div>
        };
        const slideImages = [
            ph1,ph2,ph3
        ];
        return (
            <div className="slide-container">
                    <Slide ref={this.slideRef} {...properties}>
                        {slideImages.map((each, index) => (
                            <div key={index} className="each-slide">
                                <img className="slide" src={each} alt="sample" />
                            </div>
                        ))}
                    </Slide>
                </div>
        );
    }
}

export default Slideshow;