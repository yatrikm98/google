import './GoogleDrawer.css'
import { useEffect, useRef } from 'react'
import { IoCloseOutline } from "react-icons/io5";
import Initial from '../../images/Initial.png'
import { PiSignOut } from "react-icons/pi";
import { IoIosAddCircleOutline } from "react-icons/io";

const GoogleDrawer = ({ onClose, googleIconRef }) => {


    const divEl = useRef()

    useEffect(() => {
        const handler = (event) => {

            if (googleIconRef.current.contains(event.target)) {
                return;
            }

            if (!divEl.current.contains(event.target)) {
                console.log('Inside useEffect handler of google icon div')
                onClose()
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [onClose, googleIconRef])

    return (
        <div className='googledrawermaindiv' ref={divEl}>
            <div className='upperdiv'>
                <div className='emailDiv'>yatrikmehta82@gmail.com</div>
                <div onClick={(event) => {
                    event.stopPropagation()
                    onClose()
                }}><IoCloseOutline className='closeIcon' /></div>
            </div>
            <div className='googleicondiv'>
                <img
                    alt='No Pic'
                    src={Initial}
                    className='googleiconimage' />
            </div>
            <div className='title'>Hi,Yatrik!</div>
            <a href='https://myaccount.google.com/?hl=en_GB&utm_source=OGB&utm_medium=act&gar=WzJd'>
                <div className='managegoogleaccountdiv'>
                    Manage Your Google Account
                </div>
            </a>
            <div className='addaccountdiv'>
                <a className='accountDiv'
                    href='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fwww.google.com%3Fhl%3Den-GB&ec=GAlA8wE&hl=en-GB&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S1781797520%3A1744008336072901'>
                    <div >
                        <IoIosAddCircleOutline className='addAcoountIcon' />
                        Add Account
                    </div>
                </a>
                <div className='emptyDiv'></div>
                <div className='signoutDiv'>
                    <PiSignOut className='signOutIcon' />
                    Sign Out
                </div>
            </div>
            <div className='lowerpartflexdiv'>
                <div className='privacyPolicyDiv'>
                    <a className='privacyPolicyAnchor' href='https://policies.google.com/privacy?hl=en_GB'>
                        Privacy Policy
                    </a>
                </div>
                <div className='dotDiv'>.</div>
                <div className='termsOfServiceDiv'>
                    <a className='termsOfServiceAnchor' href='https://policies.google.com/terms?hl=en_GB'>
                        Terms Of Service
                    </a>
                </div>
            </div>
        </div>
    )
}

export default GoogleDrawer;