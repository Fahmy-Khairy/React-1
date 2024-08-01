import React, { useEffect } from 'react'
import Img1 from '../../assets/images/poert1.png'
import Img2 from '../../assets/images/port2.png'
import Img3 from '../../assets/images/port3.png'

export default function Portfolio() {
    useEffect(() => {
        document.querySelectorAll('.col-md-6').forEach((col) => {
            const elm = col.firstChild
            const img = elm.firstChild
            const imgSrc = img.getAttribute('src')
            col.addEventListener("click", (e) => {
                document.querySelector('.position-fixed').classList.remove('d-none')
                document.querySelector('.innerDiv').style.backgroundImage = `url(${imgSrc})`
                document.querySelector('.position-fixed').addEventListener('click', (e) => {
                    if (e.target != document.querySelector('.innerDiv')) {
                        document.querySelector('.position-fixed').classList.add('d-none')
                    }
                })
            })
        })
    }, [])
    return (
        <>
            <div id='portfolio' className="">
                <div className="d-flex justify-content-center align-items-center flex-column container ">

                    <div className="d-flex flex-column ">
                        <div className="text-center MyTextColor">
                            <h1>PORTFOLIO COMPONENT</h1>
                        </div>
                        <div className="d-flex align-items-center gap-1 justify-content-center">
                            <div className="line my-bg"></div>
                            <i class="fa-solid fa-star "></i>
                            <div className="line my-bg"></div>
                        </div>
                    </div>


                    <div className="row g-3 mt-3">
                        <div className="col-md-6 col-lg-4 ">
                            <div className='rounded-3 overflow-hidden position-relative mycard'>
                                <img src={Img1} className='w-100' alt="Portofolio component" />
                                <div className="layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0 mySecondbg ">
                                    <i className='text-dark fa-solid fa-plus fa-6x'></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className='rounded-3 overflow-hidden position-relative mycard'>
                                <img src={Img2} className='w-100' alt="Portofolio component" />
                                <div className="layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0 mySecondbg ">
                                    <i className='text-dark fa-solid fa-plus fa-6x'></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className='rounded-3 overflow-hidden position-relative mycard'>
                                <img src={Img3} className='w-100' alt="Portofolio component" />
                                <div className="layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0 mySecondbg ">
                                    <i className='text-dark fa-solid fa-plus fa-6x'></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className='rounded-3 overflow-hidden position-relative mycard'>
                                <img src={Img1} className='w-100' alt="Portofolio component" />
                                <div className="layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0 mySecondbg ">
                                    <i className='text-dark fa-solid fa-plus fa-6x'></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className='rounded-3 overflow-hidden position-relative mycard'>
                                <img src={Img2} className='w-100' alt="Portofolio component" />
                                <div className="layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0 mySecondbg ">
                                    <i className='text-dark fa-solid fa-plus fa-6x'></i>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className='rounded-3 overflow-hidden position-relative mycard'>
                                <img src={Img3} className='w-100' alt="Portfolio component" />
                                <div className="layer d-flex justify-content-center align-items-center position-absolute top-0 start-0 end-0 bottom-0 mySecondbg ">
                                    <i className='text-dark fa-solid fa-plus fa-6x'></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='position-fixed top-0 start-0 end-0 bottom-0 bg-info bg-opacity-10 d-none d-flex justify-content-center align-items-center'>
                <div className='innerDiv '>

                </div>
            </div>
        </>

    )
}
