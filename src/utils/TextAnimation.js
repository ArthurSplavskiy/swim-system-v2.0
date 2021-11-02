import { TextLinesReveal } from './textLinesReveal'
import { TextLinesRevealFast } from './textLinesRevealFast'
import gsap from 'gsap'

const TextAnimation = () => {

  let DOM = {}

  gsap.set('._element-on-scroll', {
    yPercent: 320,
    rotate: 20
  })
  gsap.to('._element-on-scroll', {
    yPercent: 0,
    rotate: 0,
    scrollTrigger: {
      trigger: '.form-section',
      top: 'top top',
      scrub: true
    }
  })
  gsap.utils.toArray('._text-fill .back').forEach(text => {

    gsap.to(text, {
        height: '0',
        scrollTrigger: {
          trigger: text,
          start: '-=600',
          end: '+=800',
          scrub: true
        }
    })
  })
  gsap.utils.toArray('._line-bar').forEach(line => {

    gsap.to(line, {
        width: '100%',
        scrollTrigger: {
          trigger: line,
          start: '-=600',
          end: '+=800',
          scrub: true
        }
    })
  })

  gsap.utils.toArray('._line-bar-middle').forEach(line => {

    gsap.to(line, {
        width: '100%',
        scrollTrigger: {
          trigger: line,
          start: '-=800',
          end: '+=300',
          scrub: true
        }
    })
  })

  gsap.utils.toArray('._line-bar-bottom').forEach(line => {

    gsap.to(line, {
        width: '100%',
        scrollTrigger: {
          trigger: line,
          start: '-=1000',
          end: '+=400',
          scrub: true
        }
    })
  })

  DOM.textContent = {
    textOnLoad: document.querySelectorAll('._text-on-load'),
    textOnScroll: document.querySelectorAll('._text-on-scroll'),
    textOnScrollFast: document.querySelectorAll('._text-on-scroll_fast')
  };

  const textLinesRevealOnScroll = new TextLinesReveal(
    [...DOM.textContent.textOnScroll]
  );
  const textLinesRevealOnScrollFast = new TextLinesRevealFast(
    [...DOM.textContent.textOnScrollFast]
  );

  const showContentOnScrollFast = () => {
    textLinesRevealOnScrollFast.inScroll();
  };
  const showContentOnScroll = () => {
    textLinesRevealOnScroll.inScroll();
  };
  showContentOnScroll()
  showContentOnScrollFast()
}

const TextAnimationOut = () => {
  const textLinesRevealOnLoad = new TextLinesReveal(
    [...document.querySelectorAll('._text-on-load')]
  );
  textLinesRevealOnLoad.out();
}

const TextAnimationIn = () => {
  const textLinesRevealOnLoad = new TextLinesReveal(
    [...document.querySelectorAll('._text-on-load')]
  );
  textLinesRevealOnLoad.in();
}

export { TextAnimation, TextAnimationOut, TextAnimationIn }
