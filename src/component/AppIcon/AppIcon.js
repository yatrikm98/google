import AppDrawer from '../AppDrawer/AppDrawer'
import './AppIcon.css'
import { useState, useRef } from 'react'
import Apps from '../../images/Apps.svg'

const AppIcon=()=>{

    const [openAppDrawer, setOpenAppDrawer] = useState(false)
    const appIconRef = useRef()

return (
    <div className='mainappdiv' >
                <img className= 'appImage' src={Apps} alt='No Pic' onClick={() => {
                    setOpenAppDrawer(!openAppDrawer)
                }} ref={appIconRef} />
                {openAppDrawer && <AppDrawer
                    onClose={() => setOpenAppDrawer(false)}
                    appIconRef={appIconRef}
                />}
            </div>
)
}

export default AppIcon