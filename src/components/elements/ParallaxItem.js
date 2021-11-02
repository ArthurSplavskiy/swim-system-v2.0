import React, { useEffect } from 'react'
import gsap from 'gsap'

const ParallaxItem = ({ image, parallaxTrigger, startAction, elementTrigger, endAction }) => {

    const classes = ['parallax-item']

    if(elementTrigger) {
        classes.push(elementTrigger) 
    }

    useEffect(() => {

        gsap.from(`.${elementTrigger}`, {
            yPercent: 100,
            scrollTrigger: {
                start: `${startAction}`,
                end: `${endAction}`,
                trigger: `${parallaxTrigger}`,
                scrub: 1,
            }
        });

    }, [parallaxTrigger, startAction, elementTrigger, endAction])


    return (
        <div className="parallax-container">
            <div className={classes.join(' ')}>
                <img src={image} alt="Swim System" />
            </div>
        </div>
    )
}

export default ParallaxItem