import React, { useEffect } from 'react'
import { Container } from '../../globalStyle'

import SectionHead from '../elements/SectionHeading'
import SectionDescription from '../elements/SectionDescription'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import pool1 from '../../img/pool-1.png'
import pool2 from '../../img/pool-2.png'

const LocationSection = () => {

    useEffect(() => {

        ScrollTrigger.matchMedia({
            "(min-width: 993px)": function() {
                gsap.from('.location-cart__anim-1 .image-wrapper', {
                    yPercent: -20, 
                    opacity: 0.5, 
                    scale: 0.5, 
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.location-cart__anim-1 .image-wrapper',
                        start: 'top bottom',
                        end: '+=800',
                        scrub: 1
                    }
                })
                gsap.from('.location-cart__anim-2 .image-wrapper', {
                    yPercent: -20, 
                    opacity: 0.5, 
                    scale: 0.6, 
                    ease: 'none',
                    scrollTrigger: {
                        trigger: '.location-cart__anim-2 .image-wrapper',
                        start: 'top bottom',
                        end: '+=800',
                        scrub: 1
                    }
                })
            }
        })

    }, [])

    return(
        <section id="locations_mobile" className="location-section section">
            <Container>
                <SectionHead>
                Ми обрали зручні локації для проведення тренувань у басейнах Києва
                </SectionHead>
                <SectionDescription 
                    column1='2 спортивні  басейна' 
                    column2='25м' 
                    column3='6/8 доріжок' 
                    column4={true} 
                    section=".location-section"
                />

                <div className="location-section__body">
                        <div className="side-1">
                            <div className="location-cart location-cart__anim-1">
                                <div className="image-wrapper">
                                    <img src={pool1} alt="Басейн спорткомплексу НТУУ КПІ" />
                                </div>
                                
                                <div className="text-content">
                                    <p className="_text-on-scroll_fast">Басейн спорткомплексу НТУУ КПІ</p>
                                    <p className="_text-on-scroll_fast">Площа - 25 х 50 м. Глибина - від 1,8 м. До 7,5 м. 24 доріжки. Очищення води басейну відбувається гіпохлоритом натрію через високоякісне обладнання американського виробника.</p>
                                </div>
                            </div>
                        </div>
                        <div className="side-2">
                            <div className="location-cart location-cart__anim-2">
                                <div className="image-wrapper">
                                    <img src={pool2} alt="Басейн спорткомплексу НТУУ КПІ" />
                                </div>
                                <div className="text-content">
                                    <p className="_text-on-scroll_fast">Басейн "Спорткомплекс НПУ ім. М. Драгоманова"</p>
                                    <p className="_text-on-scroll_fast">Великий басейн 25 м х 12 м (6 доріжок), глибина 2 м. Очищення води басейну відбувається гіпохлоритом натрію через високоякісне обладнання американського виробника.</p>
                                </div>
                            </div>
                        </div>
                </div>

            </Container>
        </section>
    )
}

export default LocationSection