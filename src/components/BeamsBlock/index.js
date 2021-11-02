import React, { useEffect } from 'react'
import styled from 'styled-components'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import table1 from '../../img/table-1.svg'
import table2 from '../../img/table-2.svg'
import table3 from '../../img/table-3.svg'
import parallaxSwimmer from '../../img/swim-swimmer.png'
import drops from '../../img/drops.png'

const BeamsContainer = styled.div`
    width: 100vw;
    height: 15px;
    position: relative;
    @media(max-width: 992px) {
        position: absolute;
        top: 0;
    }
    @media(max-width: 1365px) {
        top: -100px;
    }
    @media(min-width: 1366px) {
        top: -80px;
    }

    // .beam-top {
    //     position: absolute;
    //     width: 1px;
    //     height: 15px;
    //     background: #2C2C2C;
    //     top: 78px;
    //     left: 50%;
    //     transform-origin: center center;
    //     @media(max-width: 992px) {
    //         display: none
    //     }
    //     @media(max-width: 1365px) {
    //         top: 74px;
    //     }
    // }
    .lateral-left {
        left: 25%;
        transform: rotate(60deg);
        @media(max-width: 992px) {
            left: 50%;
        }
        @media(max-width: 375px) {
            left: 65%;
        }
    }
    .center-left {
        left: 40%;
        transform: rotate(45deg);
        @media(max-width: 992px) {
            left: 55%;
        }
        @media(max-width: 375px) {
            left: 65%;
        }
    }
    .center-right {
        right: 40%;
        transform: rotate(-45deg);
        @media(max-width: 992px) {
            right: 55%;
        }
        @media(max-width: 375px) {
            right: 65%;
        }
    }
    .lateral-right {
        right: 25%;
        transform: rotate(-60deg);
        height: 78px;
        @media(max-width: 992px) {
            right: 50%;
        }
        @media(max-width: 375px) {
            right: 65%;
        }
    }
`

const Beam = styled.div`
    position: absolute;
    width: 15px;
    height: 50px;
    background: #2C2C2C;
    transform-origin: 0 0;
    @media(max-width: 992px) {
        width: 4px;
    }
`

const BeamsBlock = () => {

    useEffect(() => {

        if (window.matchMedia("(min-width: 992px)").matches) {
        ScrollTrigger.matchMedia({

            "(min-width: 993px) and (max-width: 1024px)": function() {
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
                beamsTimeline.to('.parallax-swimmer', {yPercent: -117, scale: 1.2, duration: 2}, 1)
                beamsTimeline.to('.drops', {yPercent: -200, duration: 2}, '<')
        
                beamsTimeline.to('.tables', {xPercent: -170, duration: 8})
        
                // parallax scale
                beamsTimeline.to('.table-1', {scale: 1.7, duration: 4})
                beamsTimeline.to('.table-2', {xPercent: -100, duration: 4}, '<')
                beamsTimeline.to('.parallax-swimmer', {yPercent: -115, scale: 1.19, duration: 4}, '<')
                beamsTimeline.to('.drops', {yPercent: -196, duration: 4}, '<')
                beamsTimeline.to('.drops', {opacity: 0.9, delay: 1.5})
            },

            "(min-width: 1025px) and (max-width: 1365px)": function() {
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
        
                beamsTimeline.to('.beam-top', {scaleX: 2000, duration: 3}, 0)
                beamsTimeline.to('.beam', {height: 1000, duration: 3}, 0)
                beamsTimeline.to('.parallax-swimmer', {yPercent: -96, scale: 1.2, duration: 2}, 1)
                beamsTimeline.to('.drops', {yPercent: -150, duration: 2}, '<')
        
                beamsTimeline.to('.tables', {xPercent: -170, duration: 8})
        
                // parallax scale
                beamsTimeline.to('.table-1', {scale: 1.7, duration: 4})
                beamsTimeline.to('.table-2', {xPercent: -100, duration: 4}, '<')
                beamsTimeline.to('.parallax-swimmer', {yPercent: -94, scale: 1.19, duration: 4}, '<')
                beamsTimeline.to('.drops', {yPercent: -146, duration: 4}, '<')
                beamsTimeline.to('.drops', {opacity: 0.9, delay: 1.5})
            },

            "(min-width: 1366px) and (max-width: 1917px)": function() {
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
        
                beamsTimeline.to('.beam-top', {scaleX: 2000, duration: 3}, 0)
                beamsTimeline.to('.beam', {height: 1000, duration: 3}, 0)
                beamsTimeline.to('.parallax-swimmer', {yPercent: -96, scale: 1.2, duration: 2}, 1)
                beamsTimeline.to('.drops', {yPercent: -160, duration: 2}, '<')
        
                beamsTimeline.to('.tables', {xPercent: -170, duration: 8})
        
                // parallax scale
                beamsTimeline.to('.table-1', {scale: 1.7, duration: 4})
                beamsTimeline.to('.table-2', {xPercent: -100, duration: 4}, '<')
                beamsTimeline.to('.parallax-swimmer', {yPercent: -94, scale: 1.19, duration: 4}, '<')
                beamsTimeline.to('.drops', {yPercent: -156, duration: 4}, '<')
                beamsTimeline.to('.drops', {opacity: 0.9, delay: 1.5})
            },

            "(min-width: 1918px) and (max-width: 2558px)": function() {
                let beamsTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.beams-section',
                        start: 'top top',
                        end: '+=5000',
                        scrub: 2,
                        pin: true
                    }
                })
        
                beamsTimeline.to('.beam-top', {scaleX: 3000, duration: 3}, 0)
                beamsTimeline.to('.beam', {height: 1500, duration: 3}, 0)
                beamsTimeline.to('.parallax-swimmer', {yPercent: -110, scale: 1.2, duration: 2}, 1)
                beamsTimeline.to('.drops', {yPercent: -190, duration: 2}, '<')
        
                beamsTimeline.to('.tables', {xPercent: -170, duration: 8})
        
                // parallax scale
                beamsTimeline.to('.table-1', {scale: 1.8, duration: 4})
                beamsTimeline.to('.table-2', {xPercent: -100, duration: 4}, '<')
                beamsTimeline.to('.parallax-swimmer', {yPercent: -108, scale: 1.19, duration: 4}, '<')
                beamsTimeline.to('.drops', {yPercent: -186, duration: 4}, '<')
            },
        
            "(min-width: 2559px)": function() {
                let beamsTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.beams-section',
                        start: 'top top',
                        end: '+=5000',
                        scrub: 2,
                        pin: true
                    }
                })
        
                beamsTimeline.to('.beam-top', {scaleX: 4000, duration: 3}, 0)
                beamsTimeline.to('.beam', {height: 2000, duration: 3}, 0)
                beamsTimeline.to('.parallax-swimmer', {yPercent: -130, scale: 1.2, duration: 2}, 1)
                beamsTimeline.to('.drops', {yPercent: -210, duration: 2}, '<')
        
                beamsTimeline.to('.tables', {xPercent: -170, duration: 8})
        
                // parallax scale
                beamsTimeline.to('.table-1', {scale: 1.3, duration: 4})
                beamsTimeline.to('.parallax-swimmer', {yPercent: -128, scale: 1.19, duration: 4}, '<')
                beamsTimeline.to('.drops', {yPercent: -208, duration: 4}, '<')
            },
        
        });
        }

    }, [])

    return (
        <section className="beams-section">
            <BeamsContainer className="beams">
                <Beam className="beam lateral-left"/>
                <Beam className="beam center-left"/>
                {/* <Beam className="beam-top center-top"/> */}
                <Beam className="beam center-right"/>
                <Beam className="beam lateral-right"/>
            </BeamsContainer>

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

            <img className="parallax-swimmer" src={parallaxSwimmer} alt="Swim System" />
            <img className="drops" src={drops} alt="Swim System" />
        </section>
    )
}

export default BeamsBlock