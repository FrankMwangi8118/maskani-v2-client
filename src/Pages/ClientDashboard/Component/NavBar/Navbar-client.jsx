import "./navbar.css"

const NavbarClient = () => {

    return (
        <>
            <nav className="navbar">
                <div className="containers">
                    <div className="right-header">

                        <div className="prof">
                            <div className="prof__">
                                <div className="prof-logo">
                                    <img src={"https://picsum.photos/60/60"} alt={"prof"}/>
                                </div>
                                <div className="prof__name">
                                    <p className={"prof__p"}>{"Frank mwangi"}</p>
                                </div>
                            </div>

                        </div>


                    </div>
                    <div className="left-content">
                        <div className={"details"}>
                        </div>
                    </div>
                </div>

            </nav>
        </>
    )
}
export default NavbarClient