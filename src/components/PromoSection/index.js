import React, { useEffect } from 'react'
import { Container } from '../../globalStyle'
import BackgroundImg from '../../img/main-banner.png'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const PromoSection = () => {

    useEffect(() => {

        // LETTERS CHANGE COLOR
        // if(ready) {
        //     const heading = document.querySelector('.promo-heading span')
        //     const charsArray = heading.textContent.trim().split('')
        //     heading.textContent = ''
        
        //     let firstRow = 15
        //     let secondRow = 16
        //     let thirdRow = 12
        //     let paddingValue = 6
        
        //     let totalPaddingFirstRow = firstRow * paddingValue;
        //     let totalPaddingSecondRow = secondRow * paddingValue;
        //     let totalPaddingThirdRow = thirdRow * paddingValue;
        
        //     for(let i = 1; i <= charsArray.length; i++) {
        //         heading.innerHTML += `<span class="char char-${i}">${charsArray[i - 1]}</span>`
        //     }
        
        //     for(let i = 1; i <= firstRow; i++) {
        //     totalPaddingFirstRow -= paddingValue
        //     document.querySelector(`.char-${i}`).style.paddingTop = totalPaddingFirstRow +'px'
        //     }
        //     for(let i = secondRow; i <= 30; i++) {
        //     totalPaddingSecondRow -= paddingValue
        //     document.querySelector(`.char-${i}`).style.paddingTop = totalPaddingSecondRow +'px'
        //     }
        //     for(let i = 31; i <= 36; i++) {
        //     totalPaddingThirdRow -= paddingValue
        //     document.querySelector(`.char-${i}`).style.paddingTop = totalPaddingThirdRow +'px'
        //     }
        
        //     gsap.utils.toArray('.char').forEach(char => {
        
        //     ScrollTrigger.create({
        //         trigger: char,
        //         start: '-=80',
        //         end: '+=500',
        //         toggleClass: 'light'
        //     })
        
        //     })
        // }
        // ===
        
        ScrollTrigger.matchMedia({
            "(min-width: 993px)": function() {
                // STEP TO SECOND SECTION
                gsap.utils.toArray('.panel').forEach((panel, i) => {
                    ScrollTrigger.create({
                        trigger: panel,
                        start: 'bottom bottom',
                        pin: true,
                        pinSpacing: false
                    }) 
                })
                // ===
                // MOVE TO TOP IMAGE
                gsap.to('.promo-img', {
                    yPercent: -40,
                    scrollTrigger: {
                        trigger: '.beams-section',
                        start: '-=500',
                        scrub: true
                    }
                })
                // ===
                // SCALE IMAGE
                let t1 = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.navbar',
                        start: '+=1',
                        end: '+=3000',
                        scrub: true,
                    }
                })

                t1.to('.promo-img', {scale: 1.5})
                // ===
                // TITLE TEXT ANIMATION
                gsap.to('.promo-title .back', {
                    height: '100%',
                    scrollTrigger: {
                    trigger: '.promo-title .back',
                    start: '-=140',
                    end: '+=300',
                    scrub: true
                    }
                })
                // ===
            }
        })

    }, [])
    
    return (
        <section className="promo-section panel">
            <div className="promo-headcon__mobile">
                <Container>
                    <h1 className="promo-heading">
                        <div className="promo-title">
                            <p className="_text-on-load">Swim System це сила та енергія рухів</p>
                        </div>
                    </h1>
                </Container>
            </div>
            <img className="promo-img" src={BackgroundImg} alt="Swim System" />
            <div className="promo-section__wrapper">
                <Container className="container">
                    <div className="promo-section__content">
                        <div className="promo-headcon">
                            <h1 className="promo-heading">
                                <div className="promo-title">
                                    <p className="front _text-on-load">Swim System це сила та енергія рухів</p>
                                    <p className="back _text-on-load">Swim System це сила та енергія рухів</p>
                                </div>
                            </h1>
                        </div>
                        <div className="promo-description">
                            <p className="_text-on-load">
                                Swim System - це багатогранна складова, яка складається з цікавого і послідовного тренувального процесу, помножена на здорову атмосферу і захопленість людей. Це допомагає досягати цілей і робити себе краще.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
            <div className="promo-description__mobile">
                <Container>
                    <p className="_text-on-load">
                        Swim System - це багатогранна складова, яка складається з цікавого і послідовного тренувального процесу, помножена на здорову атмосферу і захопленість людей. Це допомагає досягати цілей і робити себе краще.
                    </p>
                </Container>
            </div>
        </section>
    )
}

export default PromoSection