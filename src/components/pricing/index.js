import React, { Component } from 'react';
import MyButton from '../utils/MyButton';
import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {
    
    state={
        prices:[100, 150, 250],
        position:['Silver', 'Gold', 'Platinum'],
        desc:[
            'Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.',
            'Donec vitae sapien utae libero venenatis faucibus. Nullam quis ante. Etiam amet orci eget faucibus tincidunt',
            'Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc augue velit.'
        ],
        linkto:[
            'https://www.ticketmaster.com/a',
            'https://www.ticketmaster.com/b',
            'https://www.ticketmaster.com/c'
        ],
        delay:[500, 0, 500]
    }
    

    showBoxes=()=>(
        this.state.prices.map((box, i)=>( 
           <Zoom delay={this.state.delay[i]} key={i}>
            <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.position[i]}</span>
                        </div>
                        <div className="pricing_description">
                            <span>{this.state.desc[i]}</span>
                        </div>
                        <div className="pricing_buttons">
                            <span><MyButton
                                    text="Purchase Tickets"
                                    bck="#ffa800"
                                    color="#ffffff"
                                    link={this.state.linkto[i]}
                            /></span>
                        </div>
                    </div>
                </div>
            </Zoom>
        ))
    )

    render() {
        return (
            <div className="bck_black">
                 <div className="center_wrapper pricing_section">
                        <h2>Pricing</h2>
                        <div className="pricing_wrapper">
                            {this.showBoxes()}
                        </div>

                </div>
            </div>
        );
    }
}

export default Pricing;