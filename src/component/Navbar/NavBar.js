import './NavBar.css'
import AppIcon from '../AppIcon/AppIcon'
import GoogleIcon from '../GoogleIcon/GoogleIcon'


const NavBar = () => {
    return (
        <div className='navbarmaindiv'>
            <div className='gmaildiv'><a href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'>Gmail</a></div>
            <div className='imagesdiv'><a href='https://www.google.com/imghp?hl=en-GB&tab=ri&ogbl'>Images</a></div>
            <AppIcon />
            <GoogleIcon />
        </div>
    )
}

export default NavBar