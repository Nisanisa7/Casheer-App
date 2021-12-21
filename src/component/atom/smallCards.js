import React from 'react'
import styled from "styled-components";
import { BlueBubble, PinkBubble, VioletBubble } from '../../assets/illustrations';
const SmallCards = ({children, className, color, pinkbubble, bluebubble, violetbubble}) => {
    return (
        <Styles className={`${className} ${color}`}>
            {pinkbubble &&
            <div className="buble">
             <img src={PinkBubble} alt="" />
            </div>
            }
            {bluebubble &&
            <div className="buble">
             <img src={BlueBubble} alt="" />
            </div>
            }
            {violetbubble &&
            <div className="buble">
             <img src={VioletBubble} alt="" />
            </div>
            }
           <div className="card-title f-15">
               Today's Income
           </div>
           <div className="Total f-30">
           Rp. 1.000.000
           </div>
           <div className="daily-sum f-15">
           +2% Yesterday
           </div>
        </Styles>
    )
}

export default SmallCards
const Styles = styled.div`
    width: 100%;
    height: 213px;
    position: relative;
    /* background: #FFFFFF; */
    padding-left: 30px;
    padding-top: 53px;
    /* box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.25); */
    border-radius: 10px;
    &.pink{
        background: linear-gradient(278.29deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
        filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
    }
    &.blue{
        background: linear-gradient(278.29deg, #29DFFF 30.05%, rgba(41, 223, 255, 0) 133.19%);
        filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.25));
    }
    &.violet{
        background: linear-gradient(278.29deg, #AB84C8 30.05%, rgba(241, 201, 236, 0) 133.19%);
        filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.25));
    }
    .buble{   
        img{
            position: absolute;
            left: 170px;
            top: 12px;
            @media screen and (min-width: 992px) {
                left: 80px;
                top: 35px;
            }
            @media screen and (min-width: 1280px) {
                left: 170px;
                top: 12px;
            }
        }
    }
    .Total{
        padding-bottom: 11px;
    }
`