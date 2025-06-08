import './GoogleIcon.css'
import { useState, useRef } from 'react'
import GoogleDrawer from '../GoogleDrawer/GoogleDrawer'
import Initial from '../../images/Initial.png'

const GoogleIcon = () => {
    const [openGoogleDrawer, setOpenGoogleDrawer] = useState(false)
    const googleIconRef = useRef()
    return (
        <div className='iconDiv' >
            <img
                className='iconImage'
                src={Initial} alt='No Pic'
                onClick={() => {
                    setOpenGoogleDrawer(!openGoogleDrawer)
                }}
                ref={googleIconRef}
            />
            {openGoogleDrawer && <GoogleDrawer
                onClose={() => {
                    setOpenGoogleDrawer(false)
                }}
                googleIconRef={googleIconRef}
            />
            }
        </div>
    )
}

export default GoogleIcon