import React, { useContext } from 'react'
import { menuData } from '../../data/MenuData'
import styled from 'styled-components'
import { languageContext } from '../../utils/context'

const MenuWrapper = styled.div`
    overflow-x: hidden;
    position: fixed;
    top: 88px;
    left: 0;
    width: 100%;
    height: calc(100% - 88px);
    background: #010101;
    z-index: 102;
    transition: all 1s cubic-bezier(.23,1,.32,1);
    transform: ${({ isOpen }) => isOpen ? 'translateX(0)' :  'translateX(-100%)'};
    opacity: ${({ isOpen }) => isOpen ? 1 : 0 };
`

const MobileMenu = ({ isOpen, setIsOpen }) => {
    const langContext = useContext(languageContext)

    const linkHandler = () => {
        setIsOpen(!isOpen)
        window.location.hash = ''
    }

    return (
        <MenuWrapper className="mobile-menu" isOpen={isOpen} >
            <ul className="mobile-menu__list">
                {
                    menuData.map((item, index) => (
                        <li key={index}>
                            <a onClick={() => linkHandler()} href={item.anchor}>{item.title}</a>
                        </li>
                    ))
                }
            </ul>
            <div className="lang-toggle-mobile">
                {langContext.isLanguage.allLanguages.map((lang, i) => <button className="lang-toggle-mobile__item" onClick={() => langContext.changeLanguage(lang)} key={i} style={{color: langContext.isLanguage.currentLanguage === lang ? '#fff' : '#828282'}}>{lang}</button>)}
            </div>
        </MenuWrapper>
    )
}

export default MobileMenu