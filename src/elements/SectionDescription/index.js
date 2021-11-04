import React, { useEffect, useContext } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import { modalContext } from '../../utils/context'

import infoIcon from '../../img/icons/info.svg'
import './index.scss'



const SectionDescription = ({ column1, column2, column3, column4 = false, section }) => {
    const modalWindowContext = useContext(modalContext);

    const columnLinkHandler = () => {
        setTimeout(() => {
            modalWindowContext.setTimetableModalActive(false)
        }, 300)
        
        gsap.to('.page-transition', {duration: 0.3, scaleX: 1, transformOrigin: 'top left'})
        gsap.to('.page-transition', {duration: 0.4, scaleX: 0, delay: 0.8, transformOrigin: 'top right'})
    }

    useEffect(() => {

        ScrollTrigger.matchMedia({

            "(min-width: 993px)": function() {
        
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: `${section} .section-description`,
                        start: '-=800',
                        end: '+=500',
                        scrub: true
                    }
                })

                timeline.to(`${section} .column-1`, {
                    opacity: 1
                }, 1)
                timeline.to(`${section} .column-2`, {
                    opacity: 1
                }, 2)
                timeline.to(`${section} .column-3`, {
                    opacity: 1
                }, 3)
                timeline.to(`${section} .column-4`, {
                    opacity: 1
                }, 4)

                gsap.to(`${section} .underline`, {
                    scaleX: 1,
                    scrollTrigger: {
                        trigger: `${section} .section-description`,
                        start: '-=700',
                        end: '+=700',
                        scrub: true
                    }
                })
            
            }
        })

    }, [section])

    return (
        <div className="section-description">
            <div className="column-1">{column1}</div>
            <div className="column-2">{column2}</div>
            <div className="column-3">{column3}</div>

            {column4 &&
            <div className="column-4">
                <button onClick={() => columnLinkHandler()}><img src={infoIcon} alt="Swim System" />ДЕТАЛЬНИЙ РОЗКЛАД</button>
            </div>} 
            <div className="underline"></div>
        </div>
    )
}



export default SectionDescription