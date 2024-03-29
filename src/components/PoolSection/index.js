import React from 'react'

import { Container } from '../../globalStyle'
import PoolItem from '../../elements/PoolItem'
import SectionDescription from '../../elements/SectionDescription'
import SectionHead from '../../elements/SectionHeading'

import img5 from '../../img/5.png'
import img6 from '../../img/6.png'
import img7 from '../../img/7.png'
import img8 from '../../img/8.png'
import './index.scss'



const PoolSection = () => {

    return(
        <section id="traning_mobile" className="pool-section section">
            <Container>
                <SectionHead>
                Эфективо тренуватись цілком та повністю в умовах, створених для занурення 
в світ плавання.
                </SectionHead>
                <SectionDescription 
                    column1="виїзні Кемпи (спортивні кемпи)"
                    section=".pool-section"
                />

                <div className="article-block">
                    <div className="content">
                        <div className="image-side">
                            <img src={img5} alt="Swim System" />
                        </div>
                        <div className="content-side">
                            <div className="text _text-opacity">
                                <p className="_text-on-scroll">Традиційно, декілька разів на рік, ми маємо можливість робити інтенсивні тренування в найкращих басейнах та умовах для досягнення цілей. 
Прискіплива робота з технікою, підводна відеозйомка плавання, лекції за спортивними темами- дають поштовх в подальших досягненнях і дают зрозуміти на що ви здатні.</p>
                                <p className="_text-on-scroll">А саме головне, все це можна поєднувати з роботою, або відпочинком разом із сім'єю.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pool-items">
                    <PoolItem
                        image={img6}
                        description="ЕГИПЕТ"
                        parallaxTrigger=".pool-section .parallax-item-1" 
                        startAction="top bottom"
                        endAction="+=400"
                        elementTrigger="parallax-item-1"
                        toAnimation="-10"
                    />
                    <PoolItem
                        image={img7}
                        description="Грузія"
                        parallaxTrigger=".pool-section .parallax-item-2" 
                        startAction="top bottom"
                        endAction="+=400"
                        elementTrigger="parallax-item-2"
                        modifier="small"
                        toAnimation="-30"
                    />
                    <PoolItem
                        image={img8}
                        description="КІПР"
                        parallaxTrigger=".pool-section .parallax-item-3" 
                        startAction="top bottom"
                        endAction="+=400"
                        elementTrigger="parallax-item-3"
                        toAnimation="-40"
                    />
                </div>

            </Container>
        </section>
    )
}



export default PoolSection