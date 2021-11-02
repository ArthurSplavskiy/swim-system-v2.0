import React, { useRef, useCallback, useEffect, useState } from 'react'
import { TextAnimationIn, TextAnimation } from './TextAnimation'
import logo from '../../img/icons/swim-1.svg'

const Preloader = ({ setLoading, loading}) => {
    const preloaderRef = useRef()
    //const percentRef = useRef()
    const [animationStart, setAnimationStart] = useState(false)
    const [animationEnd, setAnimationEnd] = useState(false)

    //const setPercent = () => percentRef.current.innerHTML = 0

    // const percentCount = useCallback(() => {
    //     let stat = percentRef.current
    //     let num = 0

    //     let start = setInterval(() => {
    //         stat.innerHTML = num += 1

    //         if(num === 100) {
    //             clearInterval(start)
    //             setAnimationEnd(true)
    //         }
    //     }, 30)
    // }, [setAnimationEnd])

    const textLoadAnimation = useCallback(() => {
        setTimeout(() => {
          TextAnimation()
        }, 4500)
        TextAnimationIn()
    }, [])

    const preloaderAnimation = useCallback(() => {
        setAnimationStart(true)
        setTimeout(() => {
            setAnimationEnd(true)
        }, 5000)
        
       // percentCount()
    }, [setAnimationStart])

    
    useEffect(() => {
        if(animationEnd) {
            preloaderRef.current.classList.add('done')
            textLoadAnimation()
            setLoading(false)
        }
    }, [animationEnd, textLoadAnimation, setLoading])
    
    const loadPage = useCallback(() => {
        preloaderAnimation()
    }, [preloaderAnimation]) 

    // EVENTS
    window.addEventListener('load', loadPage, false)
    //document.addEventListener('DOMContentLoaded', setPercent, false)

    useEffect(() => {
        return () => {
            window.removeEventListener('load', loadPage)
            //document.removeEventListener('DOMContentLoaded', setPercent, false)
        }
    }, [loadPage])

    useEffect(() => {
        if(!loading) preloaderRef.current.classList.add('done')
    }, [loading])

    return (
        <div ref={preloaderRef} className="preloader">
            <div className="preloader__body">
                <div className="blur-logo">
                    <div className="player">
                        <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_rgau7hdv.json" speed="1" autoplay={animationStart ? true : false} style={{opacity: animationStart ? 1 : 0}}></lottie-player>
                    </div>
                    <img src={logo} alt="Swim System" />
                </div>
                {/* <div ref={percentRef} className="percent" style={{opacity: animationStart ? 1 : 0}}></div> */}
            </div>
        </div>
    )
}

export default Preloader

// import React, { useRef, useCallback, useEffect } from 'react'
// import { TextAnimationIn, TextAnimation } from './TextAnimation'
// import logo from '../../img/icons/swim-1.svg'

// const Preloader = ({ setLoading, loading}) => {
//     const preloaderRef = useRef()
//     const percentRef = useRef()

//     const percentCount = useCallback(() => {
//         let stat = percentRef.current
//         let img = document.images
//         let c = 0
//         let tot = img.length
            
//         const doneLoading = () => {
//             setTimeout(() => stat.innerHTML = '100%', 3500)
//         }

//         const imgLoaded = () => {
//             c += 1
//             let perc = ((99 / tot * c) << 0) + '%'
//             stat.innerHTML = perc
//             if (c === tot) return doneLoading()
//         }

//         for (let i = 0; i < tot; i++) {
//             let tImg = new Image()
//             tImg.onload = imgLoaded
//             tImg.onerror = imgLoaded
//             tImg.src = img[i].src
//         }
//     }, [])
    
//     const textLoadAnimation = useCallback(() => {
//         setTimeout(() => {
//           TextAnimation()
//         }, 5500)
//         setTimeout(() => {
//             TextAnimationIn()
//         }, 3500)
//         setLoading(false)
//     }, [setLoading])
    
//     // EVENTS
//     window.addEventListener('load', textLoadAnimation, false)
//     document.addEventListener('DOMContentLoaded', percentCount, false)

//     useEffect(() => {
//         return () => {
//             window.removeEventListener('load', textLoadAnimation)
//             document.removeEventListener('DOMContentLoaded', percentCount, false)
//         }
//     }, [textLoadAnimation, percentCount])

//     useEffect(() => {
//         if(!loading) setTimeout(() => preloaderRef.current.classList.add('done'), 3000)
//     }, [loading])

//     return (
//         <div ref={preloaderRef} className="preloader">
//             <div className="preloader__body">
//                 <div className="blur-logo">
//                     <lottie-player src="https://assets5.lottiefiles.com/private_files/lf30_rgau7hdv.json" speed="1" autoplay></lottie-player>
//                     <img src={logo} alt="Swim System" />
//                 </div>
//                 <div ref={percentRef} className="percent"></div>
//             </div>
//         </div>
//     )
// }

// export default Preloader

