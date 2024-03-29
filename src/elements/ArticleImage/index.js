import React, { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const ArticleImage = ({ image }) => {

    useEffect(() => {

        ScrollTrigger.matchMedia({

            // "(max-width: 400px)": function() {
            //     gsap.to('.info-section .image-mask img', {
            //         x: -135,
            //         force3D: "true",
            //         scrollTrigger: {
            //             trigger: '.info-section .image-mask img',
            //             start: 'top bottom',
            //             end: 'bottom top',
            //             scrub: 1
            //         }
            //     });
        
            //     gsap.to('.article-section .image-mask img', {
            //         x: -135,
            //         force3D: "true",
            //         scrollTrigger: {
            //             trigger: '.article-section .image-mask img',
            //             start: 'top bottom',
            //             end: 'bottom top',
            //             scrub: 1
            //         }
            //     });
            // },
            "(min-width: 993px)": function() {
                gsap.to('.info-section .image-mask img', {
                    x: -135,
                    force3D: "true",
                    scrollTrigger: {
                        trigger: '.info-section .image-mask img',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1
                    }
                });
        
                gsap.to('.article-section .image-mask img', {
                    x: -135,
                    force3D: "true",
                    scrollTrigger: {
                        trigger: '.article-section .image-mask img',
                        start: 'top bottom',
                        end: 'bottom top',
                        scrub: 1
                    }
                });
            }
        })

    }, [])

    return (
        <div className="image-mask">
            <img src={image} alt="Swim System" />
        </div>
    )
}

export default ArticleImage