import React, { useEffect, useState } from 'react'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Preloader from '../components/elements/Preloader'
import Modal from '../components/elements/Modal'
import Timetable from '../components/elements/Timetable'
import Success from '../components/elements/Success'
import Form from '../components/elements/Form'
import { modalContext } from '../utils/context'

import {
  MobileMenu,
  Navbar,
  PromoSection,
  BeamsBlock,
  InfoSection,
  ArticleSection,
  GalleryBlock,
  PoolSection,
  Slider,
  BubblesBlock,
  LocationSection,
  FaqsSection,
  Competition,
  FormSection
} from '../components'

gsap.registerPlugin(ScrollTrigger)

function Home({ loading, setLoading }) {

  const [isOpen, setIsOpen] = useState(false)
  const [isLock, setIsLock] = useState(true)
  const [timetableModalActive, setTimetableModalActive] = useState(true);
  const [successModalActive, setSuccessModalActive] = useState(true);
  const [formModalActive, setFormModalActive] = useState(true);

  const rootElement = document.documentElement;

  useEffect(() => {
    timetableModalActive ? setIsLock(false) : setIsLock(true)

  }, [timetableModalActive])

  useEffect(() => {
    
    successModalActive ? setIsLock(false) : setIsLock(true)

  }, [successModalActive])

  useEffect(() => {
    
    formModalActive ? setIsLock(false) : setIsLock(true)
    
  }, [formModalActive])

  useEffect(() => {
    
    isLock ? rootElement.classList.add('lock') : rootElement.classList.remove('lock')
    
  }, [isLock, rootElement])

  useEffect(() => {

    if(!loading) {
      isOpen ? setIsLock(true) : setIsLock(false)
    }
    
  }, [isOpen, loading])

  return (
    <modalContext.Provider value={{
      timetableModalActive,
      setTimetableModalActive,
      successModalActive,
      setSuccessModalActive,
      formModalActive,
      setFormModalActive
    }}>
      <div className="page-transition"></div>
      <Modal modalActive={timetableModalActive} setModalActive={setTimetableModalActive} modalId="timetable">
        <Timetable />
      </Modal>
      <Modal modalActive={successModalActive} setModalActive={setSuccessModalActive}>
        <Success />
      </Modal>
      <Modal modalActive={formModalActive} setModalActive={setFormModalActive}>
        <Form animation={false} />
      </Modal>
      <Preloader setLoading={setLoading} loading={loading} />
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Navbar
        menuStatus={isOpen}
        menuHandler={setIsOpen}
      />
      <div className="page-wrapper">
        <PromoSection />
        <BeamsBlock />
        <InfoSection />
        <ArticleSection />
        <GalleryBlock />
        <PoolSection />
        <Slider />
        <BubblesBlock />
        <LocationSection />
        <FaqsSection />
        <Competition />
        <FormSection />
      </div>
    </modalContext.Provider>
  );
}

export default Home;
