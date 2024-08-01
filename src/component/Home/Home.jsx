import img1 from '../../assets/images/avataaars.svg'

export default function Home() {
    return (
        <>
            <div className='mySecondbg vh-100 mt-5'>
                <div className="d-flex justify-content-center align-items-center flex-column container mb-5">



                    <div className='mt-5'> 
                        <img src={img1} width={"250px"} alt="component framework" />

                    </div>
                    <div className="d-flex flex-column text-white mt-5">
                        <div className="text-center ">
                            <h1>PORTFOLIO COMPONENT</h1>
                        </div>
                        <div className="d-flex align-items-center gap-1 justify-content-center">
                            <div className="line bg-white"></div>
                            <i class="fa-solid fa-star "></i>
                            <div className="line bg-white"></div>
                        </div>
                            <p className='text-center'>Graphic Artist - Web Designer - Illustrator</p>
                    </div>



                </div>
            </div>
        </>
    )
}
