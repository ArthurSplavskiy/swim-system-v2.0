import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styled from 'styled-components'

import GalleryString from '../../data/GalleryString'

import SwimIcon from '../../img/icons/swim-1.svg'
import img1 from '../../img/gellary/1.png'
import img2 from '../../img/gellary/2.png'
import img3 from '../../img/gellary/3.png'
import img4 from '../../img/gellary/4.png'
import img5 from '../../img/gellary/5.png'
import img6 from '../../img/gellary/6.png'
import img7 from '../../img/gellary/7.png'
import img8 from '../../img/gellary/8.png'
import img9 from '../../img/gellary/9.png'
import img10 from '../../img/gellary/10.png'
import img11 from '../../img/gellary/11.png'
import './index.scss'


const GalleryBlock = () => {
    const img1Ref = useRef()
    const img2Ref = useRef()
    const img3Ref = useRef()
    const img4Ref = useRef()
    const img5Ref = useRef()
    const img6Ref = useRef()
    const img7Ref = useRef()
    const img8Ref = useRef()
    const img9Ref = useRef()
    const img10Ref = useRef()
    const img11Ref = useRef()

    const LongString = styled.div`
        .string-line_left {
            @media(min-width: 993px) {
                transform: ${({ startPosition }) => `translateX(${-startPosition}px);` }
            }
            @media(min-width: 1920px) {
                transform: ${({ startPosition }) => `translateX(${-startPosition - 7500}px)` }
            }
        }   
    `

    const startPositionString = 20000; // 18700


    useEffect(() => {

        ScrollTrigger.matchMedia({
            "(min-width: 993px)": function() {

                // FOTO GaLLeRY
                gsap.to('.image-block__top', {
                    xPercent: -91,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.fixed-trigger',
                        start: '+=1700',
                        end: '+=12000', // 7000 // 5500
                        scrub: 1,
                        pin: true,
                    }
                })
                gsap.to('.image-block__bottom', {
                    xPercent: -91,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.fixed-trigger',
                        start: '+=1700',
                        end: '+=12000', // 7000 // 5500
                        scrub: 1,
                        pin: true,
                    }
                })

                const imageTimeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.fixed-trigger',
                        start: "+=1700",
                        end: "+=9500", // 9000
                        scrub: 1,
                        ease: 'none'
                    }
                })

                imageTimeline.to(img1Ref.current, {scale: 1.4, yPercent: 20, ease: 'none', force3D:"true" })
                imageTimeline.to(img6Ref.current, {scale: 1.4, yPercent: -20, ease: 'none', force3D:"true" })
                imageTimeline.to(img2Ref.current, {scale: 1.4, yPercent: 20, ease: 'none', force3D:"true"})
                imageTimeline.to(img7Ref.current, {scale: 1.4, yPercent: -20, ease: 'none', force3D:"true"})
                imageTimeline.to(img3Ref.current, {scale: 1.4, yPercent: 20, ease: 'none', force3D:"true"})
                imageTimeline.to(img8Ref.current, {scale: 1.4, yPercent: -20, ease: 'none', force3D:"true"})
                imageTimeline.to(img4Ref.current, {scale: 1.4, yPercent: 20, ease: 'none', force3D:"true"})
                imageTimeline.to(img9Ref.current, {scale: 1.4, yPercent: -20, ease: 'none', force3D:"true"})
                imageTimeline.to(img5Ref.current, {scale: 1.4, yPercent: 20, ease: 'none', force3D:"true"})
                imageTimeline.to(img10Ref.current, {scale: 1.4, yPercent: -20, ease: 'none', force3D:"true" })
                gsap.to(img11Ref.current, {
                    ease: 'none',
                    scale: 1.8,
                    scrollTrigger: {
                        trigger: img11Ref.current,
                        start: "+=12000",
                        end: "+=2000",
                        scrub: 1
                    }
                })

                const imageTimeline2 = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.fixed-trigger2',
                        start: "+=3000", // 2400
                        end: "+=9500", // 10000
                        scrub: 1,
                        ease: 'none'
                    }
                })

                imageTimeline2.to(img1Ref.current, {scale: 1.3, yPercent: -20, ease: 'none', force3D:"true"})
                imageTimeline2.to(img6Ref.current, {scale: 1.3, yPercent: 20, ease: 'none', force3D:"true"})
                imageTimeline2.to(img2Ref.current, {scale: 1.3, yPercent: -20, ease: 'none', force3D:"true"})
                imageTimeline2.to(img7Ref.current, {scale: 1.3, yPercent: 20, ease: 'none', force3D:"true"})
                imageTimeline2.to(img3Ref.current, {scale: 1.3, yPercent: -20, ease: 'none', force3D:"true"})
                imageTimeline2.to(img8Ref.current, {scale: 1.3, yPercent: 20, ease: 'none', force3D:"true"})
                imageTimeline2.to(img4Ref.current, {scale: 1.3, yPercent: -20, ease: 'none', force3D:"true"})
                imageTimeline2.to(img9Ref.current, {scale: 1.3, yPercent: 20, ease: 'none', force3D:"true"})
                imageTimeline2.to(img5Ref.current, {scale: 1.3, yPercent: -20, ease: 'none', force3D:"true"})
                imageTimeline2.to(img10Ref.current, {scale: 1.3, yPercent: 20, ease: 'none', force3D:"true"})
                // ====================================================================

                // LINE
                const lineTimeline = gsap.timeline({
                    defaults: { delay: 0.1 },
                    scrollTrigger: {
                        trigger: '.gallery-block',
                        start: 'top top',
                        end: '+=3000', // 4000
                        scrub: 1,
                        
                    }
                });
                lineTimeline.to('.gallery-block .line-box_first', { width: '140%' }, 0)
                lineTimeline.to('.gallery-block .line-box_second', { width: '120%' }, 0)
                lineTimeline.to('.gallery-block .line-box_third', { width: '100%' }, 0)
                // ====================================================================
                
                // OVERLAY
                gsap.to('.gallery-block__overlay', {
                    opacity: 1,
                    // ease: 'none',
                    scrollTrigger: {
                        trigger: '.gallery-block__overlay',
                        start: '+=7500',
                        end: '+=6500',
                        scrub: 1
                    }
                })
                // ====================================================================
           }
        })

    }, [])

    return (
        <div className="gallery-block">
            <div className="gallery-block__wrapper">

                <div className="gallery-block__letters-mobile">
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                    <div className="line">
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    swim <img src={SwimIcon} alt="Swim System" />system
                    </div>
                </div>

                <div className="gallery-block__letters">
                    <div className="letters-block">
                        <div className="letters-block__string letters-block__string_right">
                            <LongString>
                                <GalleryString direct="right" />
                            </LongString>
                        </div>
                        <div className="letters-block__string letters-block__string_left">
                            <LongString startPosition={startPositionString}>
                                <GalleryString direct="left" />
                            </LongString>
                        </div>
                        <div className="letters-block__string letters-block__string_right">
                            <LongString>
                                <GalleryString direct="right" />
                            </LongString>
                        </div>
                        <div className="letters-block__string letters-block__string_left">
                            <LongString startPosition={startPositionString}>
                                <GalleryString direct="left" />
                            </LongString>
                        </div>
                    </div>
                </div>

                <div className="gallery-block__image">
                    <div className="image-block">
                        <div className="image-block__top">
                            <div ref={img1Ref} className="image-block__item">
                                <img src={img1} alt="Swim System" />
                            </div>
                            <div ref={img2Ref} className="image-block__item">
                                <img src={img3} alt="Swim System" />
                            </div>
                            <div ref={img3Ref} className="image-block__item">
                                <img src={img5} alt="Swim System" />
                            </div>
                            <div ref={img4Ref} className="image-block__item">
                                <img src={img7} alt="Swim System" />
                            </div>
                            <div ref={img5Ref} className="image-block__item">
                                <img src={img9} alt="Swim System" />
                            </div>
                        </div>
                        <div className="image-block__bottom">
                            <div ref={img6Ref} className="image-block__item">
                                <img src={img2} alt="Swim System" />
                            </div>
                            <div ref={img7Ref} className="image-block__item">
                                <img src={img4} alt="Swim System" />
                            </div>
                            <div ref={img8Ref} className="image-block__item">
                                <img src={img6} alt="Swim System" />
                            </div>
                            <div ref={img9Ref} className="image-block__item">
                                <img src={img8} alt="Swim System" />
                            </div>
                            <div ref={img10Ref} className="image-block__item">
                                <img src={img10} alt="Swim System" />
                            </div>
                            <div ref={img11Ref} className="image-block__item last-image">
                                <img src={img11} alt="Swim System" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gallery-block__overlay"></div>
                <div className="fixed-trigger"></div>
                <div className="fixed-trigger2"></div>
                <div className="line-container">
                    <div className="line-box line-box_first"></div>
                    <div className="line-box line-box_second"></div>
                    <div className="line-box line-box_third"></div>
                </div>

            </div>
        </div>
    )
}



export default GalleryBlock