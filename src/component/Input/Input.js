import './Input.css'
import Search from '../../images/Search.svg'
import Voice from '../../images/Voice.svg'
import Googlelens from '../../images/Googlelens.svg'
import { useEffect, useRef, useState } from 'react'
import searchSuggestions from '../../data/searchSuggestions'
import ListShow from '../ListShow/ListShow'

const Input = ({ showData, onFocus, onBlur, sendNameToApp }) => {
    
    const inputRef = useRef();
    const inputDivRef = useRef()
    const [placeholder, setPlaceholder] = useState('Search Google or type a URL')
    const [text, setText] = useState('')

    const displayData = searchSuggestions.filter((data) => {
        return data.name.toLowerCase().includes(text.toLowerCase())
    })

    const renderedData = displayData.map((data) => {
        return <div key={data.id} className='dataDisplayDiv' onClick={(e) => {
            console.log('clicked')
            e.stopPropagation()
        }}>{data.name}</div>
    })


    useEffect(() => {
        const truncatePlaceholder = () => {
            if (inputRef.current) {
                const inputWidth = inputRef.current.offsetWidth;
                if (inputWidth < 350) {
                    setPlaceholder("Search Google or...");
                } else {
                    setPlaceholder("Search Google or type a URL");
                }
            }
        };

        truncatePlaceholder();
        window.addEventListener("resize", truncatePlaceholder);
        return () => window.removeEventListener("resize", truncatePlaceholder);
    }, []);

    useEffect(() => {

        const handler = (event) => {
            if (!inputDivRef.current.contains(event.target)) {
                onBlur()
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [onBlur])


    const handleUserInputFormSubmit = (event) => {
        event.preventDefault()
        sendNameToApp(text)
    }

    const sendName = (name) => {
        sendNameToApp(name)
    }


    return (
        <div className='inputDiv' onFocus={onFocus} ref={inputDivRef}>
            <img src={Search} alt='No Search Pic' className='searchIcon' />
            <form className='inputformhomepage' onSubmit={handleUserInputFormSubmit}>
                <input className='inputhomepage'
                    placeholder={placeholder}
                    ref={inputRef}
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                />
                <img src={Voice} alt='Voice Pic' className='voiceImage' />
                <img src={Googlelens} alt='Search By Pic' className='googlelensimage' />
                {showData && renderedData.length > 0 && <ListShow text={text} sendName={sendName} />}
            </form>
        </div>
    )
}

export default Input;