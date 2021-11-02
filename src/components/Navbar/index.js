import React, { useContext } from 'react'
import styled from 'styled-components'
import { menuData } from '../../data/MenuData'
import { Container } from '../../globalStyle'
import Logo from '../../img/logo.svg'
import { languageContext } from '../../utils/context'
import gsap from 'gsap'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
gsap.registerPlugin(ScrollToPlugin)

const MenuBars = styled.div`
    position: relative;
    display: none;
    flex-direction: column;
    align-items: center;
    transform: ${({ isOpen }) => isOpen ? 'translate3d(-7px, 0, 0);' : ''};
    cursor: pointer;
    @media(max-width: 992px) {
        display: flex;
        flex: 0 0 18px;
    }

    span {
        display: block;
        height: 2px;
        width: 100%;
        background: #fff;
        transition: transform 1s cubic-bezier(.23,1,.32,1);
        
        &:not(:last-child) {
            margin-bottom: 5px;
        }
        &:first-child {
            transform: ${({ isOpen }) => isOpen ? 'rotate(-45deg) translate3d(0, 10px, 0);' : ''};
        }
        &:nth-child(2) {
            opacity: ${({ isOpen }) => isOpen ? '0' : '1'};
        }
        &:last-child {
            transform: ${({ isOpen }) => isOpen ? 'rotate(45deg) translate3d(0, -10px, 0);' : ''};
        }
    }
`

const LanguageItems = styled.div`
    position: absolute;
    top: -50%;
    left: 50%;
    transform: ${({ isLanguage }) => isLanguage.state ?  'translateY(42%) translateX(-50%)' : 'translateY(-180%) translateX(-50%)'};
    background: #fff;
    padding: 12px 13px 12px 11px;
    width: 48px;
    display: flex;
    flex-direction: column;
    transition: transform .2s ease-in-out;
    z-index: 3;
    button {
        cursor: pointer;
    }
`

const Navbar = (props) => {
    const langContext = useContext(languageContext);

    const handler = () => {
        
        window.location.location = '/'
        props.menuHandler(!props.menuStatus)
        
    }

    const menuLinkHandler = (anchor) => {
        gsap.to('.page-transition', {duration: 0.6, scaleX: 100+'%', transformOrigin: 'top left'})
        gsap.to(window, {duration: 0.6, scrollTo: anchor, delay: 0.6});
        gsap.to('.page-transition', {duration: 0.4, scaleX: 0, delay: 1.2, transformOrigin: 'top right'})
    }

    return (
        <div id="top" className="navbar">
            <Container>
                <div className="navbar__wrapper">
                    <div className="logo">
                        <img src={Logo} alt="swim system"/>
                    </div>
                    <MenuBars onClick={() => handler()} isOpen={props.menuStatus}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </MenuBars>
                    <div className="desktop-controls">
                        <div className="navbar__menu">
                        {
                            menuData.map(item => (
                                <span
                                    key={item.id}
                                    onClick={() => menuLinkHandler(item.anchor)}
                                    className="_text-on-load navbar__menu-link">
                                    {item.title}
                                </span>
                            ))
                        }
                        </div>
                        <div 
                            className="lang-toggle lang-toggle_desktop"
                            onMouseEnter={() => langContext.setIsLanguage({...langContext.isLanguage, state: true})}
                            onMouseLeave={() => langContext.setIsLanguage({...langContext.isLanguage, state: false})}
                        >
                            <div className="lang-toggle__current _text-on-load">{langContext.isLanguage.currentLanguage}</div>
                            <LanguageItems isLanguage={langContext.isLanguage}>
                                {langContext.isLanguage.languages.map((lang, i) => <button className="lang-toggle__item" onClick={() => langContext.changeLanguage(lang)} key={i}>{lang}</button>)}
                            </LanguageItems>
                        </div>
                    </div>            
                </div>
            </Container>
        </div>
    )
}

export default Navbar