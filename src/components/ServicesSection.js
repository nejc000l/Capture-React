import React from 'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import money from '../img/money.svg';
import home2 from '../img/home2.png';
import styled from 'styled-components'
import {About, Hide, Description,Image} from '../styled'
import {useScroll} from './useScroll';
import {motion} from 'framer-motion';
import {reveal} from '../animation'


const ServicesSection =()=>{
    const [element,controls] =useScroll()
    return(
       <Services 
        variants={reveal}
        transition={{ duration: 0.75 }}
        ref={element}
        animate={controls}
        initial="hidden">
           <Description>
               <h2>High <span>Quality </span>services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficent</h3>
                        </div>
                        <p>Lorem ipsum dolor sit
                         amet consectetur adipisicing elit. 
                         Enim illo autem accusamus obcaecati 
                         pora unde animi tempore labore, 
                         minima eveniet odit, vel ratione repudiandae 
                         culpa! Repellendus odio labore ipsum debitis?</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit
                         amet consectetur adipisicing elit. 
                         Enim illo autem accusamus obcaecati 
                         pora unde animi tempore labore, 
                         minima eveniet odit, vel ratione repudiandae 
                         culpa! Repellendus odio labore ipsum debitis?</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit
                         amet consectetur adipisicing elit. 
                         Enim illo autem accusamus obcaecati 
                         pora unde animi tempore labore, 
                         minima eveniet odit, vel ratione repudiandae 
                         culpa! Repellendus odio labore ipsum debitis?</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit
                         amet consectetur adipisicing elit. 
                         Enim illo autem accusamus obcaecati 
                         pora unde animi tempore labore, 
                         minima eveniet odit, vel ratione repudiandae 
                         culpa! Repellendus odio labore ipsum debitis?</p>
                    </Card>
                </Cards>
           </Description>
           <Image>
               <img src={home2} alt=""/>
           </Image>
       </Services> 
    )
}

const Services = styled(About)`
    h2{
        padding-bottom:5rem;
    }
    p{
        width:70%;
        padding:2rem 0rem 4rem 0rem;
    }

`
const Cards = styled.div`
    display:flex;
    flex-wrap:wrap;
    @media(max-width:1300px){
       justify-content:center;
    }

`
const Card = styled.div`
    flex-basis:20rem;
    .icon{
        display:flex;
        align-items:center;
    }
    h3{
        margin-left:1rem;
        background:white;
        color:black;
        padding:1rem;
    }
`
export default ServicesSection;


