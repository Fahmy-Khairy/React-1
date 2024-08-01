import React from 'react'

export default function Contact() {
    return (
        <>

            <div className='flex flex-column justify-content-center align-items-center container py-4 mt-5'>
                <div className="d-flex flex-column mt-3">
                    <div className="text-center MyTextColor">
                        <h1>CONTACT COMPONENT</h1>
                    </div>
                    <div className="d-flex align-items-center gap-1 justify-content-center">
                        <div className="line my-bg"></div>
                        <i className="fa-solid fa-star "></i>
                        <div className="line my-bg"></div>
                    </div>
                </div>

                
                    <div className="form-floating mx-auto w-50 mb-3 mt-lg-5">
                        <input type="text" className="form-control  " />
                        <label htmlFor="floatingInput">User Name</label>
                    </div>
                    <div className="form-floating mx-auto w-50 mb-3">
                        <input type="number" className="form-control  " />
                        <label htmlFor="floatingInput">User Age</label>
                    </div>
                    <div className="form-floating mx-auto w-50 mb-3">
                        <input type="email" className="form-control " />
                        <label htmlFor="floatingInput">User Email</label>
                    </div>
                    <div className="form-floating mx-auto w-50 mb-3">
                        <input type="password" className="form-control " />
                        <label htmlFor="floatingInput">User Password</label>
                    </div>
                    <button className='mySecondbg text-white border-0 py-2 px-3 rounded-3 '>Send Massage</button>
                

            </div>
        </>
    )
}
