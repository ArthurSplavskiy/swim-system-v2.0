import SplitType from 'split-type';
import { wrapLines } from './utils';
import { gsap } from 'gsap';

export class TextLinesReveal {

    constructor(animationElems) {
        this.DOM = {
            animationElems: Array.isArray(animationElems) ? animationElems : [animationElems]
        };

        
        this.SplitTypeInstances = [];
        this.lines = [];

        for (const el of this.DOM.animationElems) {
            const SplitTypeInstance = new SplitType(el, { types: 'lines' });
            wrapLines(SplitTypeInstance.lines, 'div', 'oh');
            this.lines.push(SplitTypeInstance.lines);
            this.SplitTypeInstances.push(SplitTypeInstance);
        }

        this.initEvents();
    }

    in() {
        this.isVisible = true;

        gsap.killTweensOf(this.lines);

        return gsap.timeline({defaults: {duration: 1.2, ease: 'expo'}})
        .set(this.lines, {
            y: '150%',
            rotate: 15,
        })
        .to(this.lines, {
            y: '0%',
            rotate: 0,
            stagger: 0.04,
            opacity: 1
        });
    }

    inScroll() {
        this.isVisible = true;

        gsap.killTweensOf(this.lines);

        gsap.utils.toArray(this.DOM.animationElems).forEach(text => {
        let line = text.querySelectorAll('.line')
        
        return gsap.timeline({defaults: {duration: 1.2, ease: 'none'}})
            .from(line, { 
                yPercent: 150,
                rotate: 15,
                stagger: 0.04,
                scrollTrigger: {
                    trigger: text,
                    top: '-=150', // 150
                    end: '+=600', // 600
                    scrub: true
                }
            });
        })   
    }

    out() {
        this.isVisible = false;

        gsap.killTweensOf(this.lines);

        return gsap.timeline({ defaults: {duration: 0.7, ease: 'power2'}})
        .to(this.lines, {
            y: '-150%',
            rotate: -5,
            stagger: 0.02
        });
    }

    initEvents() {
        window.addEventListener('resize', () => {

            this.lines = [];
            for (const instance of this.SplitTypeInstances) {

                instance.split();
                wrapLines(instance.lines, 'div', 'oh');
                this.lines.push(instance.lines);
            }
            if ( !this.isVisible ) {
                gsap.set(this.lines, {y: '-150%'});
            }
        });
    }
}