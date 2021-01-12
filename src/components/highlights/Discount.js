import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../utils/MyButton';
class Discount extends Component {

    state ={
        discountStart:0,
        discountEnd:30
    }

    porventage = ()=>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart+1
            })
        }
    }

    componentDidUpdate(){
        setTimeout(()=>{
            this.porventage()
        }, 30);
    }

    render() {
        return (
            <div className="center_wrapper">
                 <div className="discount_wrapper">
                    <Fade onReveal={()=>this.porventage()}>
                        <div className="discount_porcentage">
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>
                        </div>
                    </Fade>

                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase tickets before 20th June</h3>
                            <p>Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc.</p>

                            <div><MyButton
                                text="Purchase Tickets"
                                bck="#ffa800"
                                color="#ffffff"
                                link="https://www.ticketmaster.com/"
                            /></div>

                        </div>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default Discount;