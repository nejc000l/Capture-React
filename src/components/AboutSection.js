import React from 'react';
import home1 from '../img/home1.png'
import styled from 'styled-components'
import {About, Hide,Description,Image} from '../styled'
import {motion} from 'framer-motion';
import {titleAnim,fade,photoAnim} from '../animation'
import Wave from './Wave';

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams </span>come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                    <motion.p variants={fade}>Contact us for any photography or videography
                    that you have.
                    We have professionals with amazing skills
                </motion.p>
                    <motion.button variants={fade}>Contact Us</motion.button>
                </motion.div>
            </Description>
                <Image>
                    <motion.img variants={photoAnim} src={home1} alt="Guy with the camera" />
                </Image>
                <Wave/>
        </About>
    )
}

//styled components





export default AboutSection;