import ReactDOM from 'react-dom'
import './Modal.css'
import { Fragment, useEffect, useState } from 'react'



const Modal = ({ onClose, onSubmit, editName, editUrl,onEditSubmit }) => {

    const [name, setName] = useState(editName === '' ? '' : editName)
    const [url, setUrl] = useState(editUrl === '' ? '' : editUrl)

    useEffect(() => {
        document.body.classList.add('overflow-hidden')
        return () => document.body.classList.remove('overflow-hidden')
    }, [])

    const handleFormSubmit = (event) => {
        event.preventDefault()
        setName('')
        setUrl('')
        if(editName && editUrl){
            onEditSubmit(name,url)
            return;
        }
        onSubmit(name, url)
        
    }

    return ReactDOM.createPortal(
        <Fragment>
            <div className='outergraydiv'></div>
            <div className='mainDivPortal'>
                <div className='innerDiv'>
                    <div className='shortcut'>Add ShortCut</div>
                    <form onSubmit={handleFormSubmit} className='modalForm'>
                        <div className='commonformdiv'>
                            <label>Name</label>
                            <div className='inputDivModal' >
                                <input className='modalInput' autoFocus value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                        </div>
                        <div className='commonformdiv'>
                            <label>URL</label>
                            <div className='inputDivModal' >
                                <input className='modalInput' onChange={(e) => setUrl(e.target.value)} value={url} />
                            </div>
                        </div>
                        <div className='buttonDiv'>
                            <button className='cancelButton'
                                type='button'
                                onClick={(event) => {
                                    console.log('Button Clicked')
                                    event.stopPropagation()
                                    onClose()
                                }}>Cancel</button>
                            <button disabled={!name || !url} type='submit'
                                className='buttonDone'
                            >Done</button>
                        </div>
                    </form>

                </div>
            </div>
        </Fragment>,
        document.querySelector('.modal-container')
    )
}

export default Modal;