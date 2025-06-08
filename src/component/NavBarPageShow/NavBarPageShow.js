import './NavBarPageShow.css'
import { useState } from "react"
import AppIcon from "../AppIcon/AppIcon"
import GoogleIcon from "../GoogleIcon/GoogleIcon"
import { GrTest } from "react-icons/gr";
import Search from '../../images/Search.svg'
import Voice from '../../images/Voice.svg'
import Googlelens from '../../images/Googlelens.svg'
import { IoCloseOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";

const NavBarPageShow = ({ textInput }) => {

    const [pageShowText, setPageShowText] = useState(textInput)
    const [lowerPartNavbar, setLowerPartNavbar] = useState(false)

    const handleFormSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <div>
            <div className="navigationpageshow">
                <div className="upperpartnavbarpageshow">
                    <div className='googlename'>
                        <a href="https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwjpvuGCyMWMAxWGglYBHXNaLlgQPAgI">
                            <span className='commonspanletter gInitial'>G</span>
                            <span className='commonspanletter oInitial'>o</span>
                            <span className='commonspanletter o1Initial'>o</span>
                            <span className='commonspanletter g1Initial'>g</span>
                            <span className='commonspanletter lInitial'>l</span>
                            <span className='commonspanletter eInitial'>e</span>
                        </a>
                    </div>
                    <div className="pageshowformdiv">
                        <form onSubmit={handleFormSubmit} className="formpageshow">
                            <input value={pageShowText}
                                onChange={(e) => setPageShowText(e.target.value)}
                            />
                            <div className="diviconpageshownavbar">
                                <div className="closeiconnavbarpageshowdiv">
                                    <IoCloseOutline className="closeiconnavbarpageshow" />
                                </div>
                                <div className="voiceiconnavbarpageshowdiv">
                                    <img src={Voice} alt="No Pic" className="voiceiconpageshow" />
                                </div>
                                <div className="imageiconnavbarpageshowdiv">
                                    <img src={Googlelens} alt="No Pic" className="imageiconpageshow" />
                                </div>
                                <div className="searchiconnavbarpageshowdiv">
                                    <img src={Search} alt="No Pic" className="searchiconpageshow" />
                                </div>
                            </div>
                        </form>

                    </div>
                    <div className="iconspageshowdiv">
                        <div className="timericondiv">
                            <GrTest className="timericon" />
                        </div>
                        <AppIcon />
                        <GoogleIcon />
                    </div>
                </div>
                <div className="middlepartnavbarpageshow">
                    <div className="firstdivlowerpart">
                        <div className="all">All</div>
                        <div>Images</div>
                        <div>Videos</div>
                        <div>News</div>
                        <div>Shopping</div>
                        <div>Short Videos</div>
                        <div>Maps</div>
                        <div className="morediv">
                            More
                            <IoMdArrowDropdown />
                        </div>
                    </div>
                    <div className="seconddivlowerpart" onClick={() => setLowerPartNavbar(!lowerPartNavbar)}>
                        Tools
                        <IoMdArrowDropdown />
                    </div>
                </div>

            </div>
            {lowerPartNavbar && <div className="lowerpartnavbar">
                <div className="leftpartlowernavbar">
                    <div className="anytimediv">
                        <div>Any Time</div>
                        <IoMdArrowDropdown />
                    </div>
                    <div className="allresultsdiv">
                        <div>All Results</div>
                        <IoMdArrowDropdown />
                    </div>
                    <div className="advancedsearchdiv">Advanced Search</div>
                </div>
                <div className="rightpartlowernavbar">About 5 Results (0.23 seconds)</div>
            </div>}
        </div>
    )
}

export default NavBarPageShow