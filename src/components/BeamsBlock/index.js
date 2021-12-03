import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import table1 from '../../img/table-1.svg'
import table2 from '../../img/table-2.svg'
import table3 from '../../img/table-3.svg'
import parallaxSwimmer from '../../img/swim-swimmer.png'
import drops from '../../img/drops.png'
import './index.scss'

const BeamsBlock = () => {

    useEffect(() => {

        ScrollTrigger.matchMedia({

            "(min-width: 993px)": function() {
                let beamsTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.beams-section',
                        start: 'top top',
                        end: '+=5000', // 1300
                        scrub: 2,
                        pin: true,
                        //pinSpacing: false
                    }
                })
        
                beamsTimeline.to('.beam-top', {scaleX: 1500, duration: 3}, 0)
                beamsTimeline.to('.beam', {height: 1000, duration: 3}, 0)
                beamsTimeline.to('.parallax-swimmer', {yPercent: 100, scale: 1.2, duration: 2}, 1)
                beamsTimeline.to('.drops', {yPercent: -200, duration: 2}, '<')
        
                beamsTimeline.to('.tables', {xPercent: -170, duration: 8})
        
                // parallax scale
                beamsTimeline.to('.table-1', {scale: 1.7, duration: 4})
                beamsTimeline.to('.table-2', {xPercent: -100, duration: 4}, '<')
                beamsTimeline.to('.parallax-swimmer', {yPercent: 110, scale: 1.19, duration: 4}, '<')
                beamsTimeline.to('.drops', {yPercent: -196, duration: 4}, '<')
                beamsTimeline.to('.drops', {opacity: 0.9, delay: 1.5})

                beamsTimeline.scrollTrigger.refresh();
            },
        
        });

    }, [])

    return (
        <section className="beams-section">

            <div className="beams">
                <div className="beam lateral-left"></div>
                <div className="beam center-left"></div>
                {/* <Beam className="beam-top center-top"/> */}
                <div className="beam center-right"></div>
                <div className="beam lateral-right"></div>
            </div>

            <div className="tables">
                <div className="tables-wrapper">
                    <div className="table-con first-con">
                        <img className="table table-3" src={table3} alt="Swim System" />
                    </div>
                    <div className="table-con second-con">
                        <img className="table table-2" src={table2} alt="Swim System" />
                    </div>
                    <div className="table-con third-con">
                        <img className="table table-1" src={table1} alt="Swim System" />
                    </div>
                </div>
            </div>

            <div className="parallax-swimmer">
                <img src={parallaxSwimmer} alt="Swim System" />
            </div>
            
            <div className="drops">
                <img src={drops} alt="Swim System" />
            </div>

        </section>
    )
}

export default BeamsBlock