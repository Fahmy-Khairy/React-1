

export default function Footer() {
    return (
        <>
            <footer className="my-bg p-5 d-block">
                <div className="container row text-white gap2 py-3">
                    <div className="col-md-4">
                        <div className="text-center">
                            <h3>LOCATION</h3>
                            <p>2215 John Daniel Drive</p>
                            <p>Clark, MO 65243</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <h3>AROUND THE WEB</h3>
                            <ul className="list-unstyled d-flex flex-row gap-1 justify-content-center">
                                <li className="Mycircle rounded-circle">
                                    <i class="fa-brands fa-facebook"></i>
                                </li>
                                <li className="Mycircle rounded-circle">
                                    <i class="fa-brands fa-twitter"></i>
                                </li>
                                <li className="Mycircle rounded-circle">
                                    <i class="fa-brands fa-linkedin"></i>
                                </li>
                                <li className="Mycircle rounded-circle">
                                    <i class="fa-solid fa-globe"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="text-center">
                            <h3>ABOUT FREELANCER</h3>
                            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                        </div>
                    </div>
                </div>
            </footer>
                <div className="bgDark p-3 text-center">
                    <p className="text-white">Copyright © Your Website 2021</p>
                </div>
        </>
    )
}
