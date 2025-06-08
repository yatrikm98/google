import './AppDrawer.css'
import { useEffect, useRef } from 'react'


const AppDrawer = ({ onClose, appIconRef }) => {
    const divEl = useRef()

    useEffect(() => {
        const handler = (event) => {
            if (appIconRef.current.contains(event.target)) {
                return;
            }
            if (!divEl.current.contains(event.target)) {
                console.log('Insdide useeffect of app icon div')
                onClose()
            } else {
                console.log('Inisde else useEffect')
            }
        }
        window.addEventListener('click', handler)
        return () => window.removeEventListener('click', handler)
    }, [onClose, appIconRef])


    const firstDivData = [
        [
            {  title: "Search", url: 'https://www.google.com/?authuser=0',className:'bg-Search' },
            {   title: "Maps", url: 'https://www.google.com/maps/@23.026207,72.5559631,14z?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNjQwSAFQAw%3D%3D',className:'bg-Maps' },
            {   title: "Play", url: 'https://play.google.com/store/games?pli=1',className:'bg-Play' }

        ],
        [
            {   title: "Gmail", url: 'https://mail.google.com/mail/u/0/#inbox' ,className:'bg-Gmail'},
            {   title: "YouTube", url: 'https://www.youtube.com/',className:'bg-Youtube' },
            {   title: "Drive", url: 'https://drive.google.com/drive/home',className:'bg-Drive' }
        ],
        [
            {   title: "Calendar", url: 'https://calendar.google.com/calendar/u/0/r?pli=1',className:'bg-Calendar' },
            {   title: "News", url: 'https://news.google.com/home?hl=en-IN&gl=IN&ceid=IN:en',className:'bg-News' },
            {   title: "Meet", url: 'https://meet.google.com/landing?hs=197&authuser=0&pli=1',className:'bg-Meet' }
        ],
        [
            {   title: "Shopping", url: "https://www.google.com/shopping?source=og&authuser=0" ,className:'bg-Shopping'},
            {},
            {}
        ],
    ];

    const secondDivData = [
        [
            {  title: "Translate", url: 'https://translate.google.com/?sl=en&tl=fr&op=translate',className:'bg-Translate' },
            {  title: "Books", url: 'https://books.google.com/?authuser=0',className:'bg-Books' },
            {  title: "Blogger", url: 'https://www.blogger.com/about/?bpli=1',className:'bg-Blogger' }
        ],
        [
            {  title: "Photos", url: 'https://photos.google.com/?pli=1',className:'bg-Photos' },
            {  title: "Docs", url: 'https://docs.google.com/document/u/0/',className:'bg-Docs' },
            {  title: "Contacts", url: 'https://contacts.google.com/',className:'bg-Contacts' }
        ],
        [
            { title: "Finance", url: 'https://www.google.com/finance/?authuser=0',className:'bg-Finance' },
            {  title: "Sheets", url: 'https://docs.google.com/spreadsheets/u/0/',className:'bg-Sheets' },
            {  title: "Password...", url: 'https://passwords.google.com/?utm_source=OGB&utm_medium=AL&pli=1',className:'bg-Password' }
        ]

    ];




    return (
        <div className='appiconmaindiv' ref={divEl}>
            <div className='firstDiv'>
                {firstDivData.map((row, rowIndex) => (
                    <div className='cssforentirerow' key={rowIndex}>
                        {row.map((app, index) => (
                            Object.keys(app).length > 0 ? (
                                <a href={app.url} className='appiconsinglediv' key={index}>
                                <div className={`imagediv ${app.className}`} />
                                    <div className='divtitle'>{app.title}</div>
                                </a>
                            ) : (
                                <div className='appiconsinglediv noHover' key={index}></div>
                            )
                        ))}
                    </div>
                ))}
            </div>

            <div className='secondDiv'>
                {secondDivData.map((row, rowIndex) => (
                    <div className='cssforentirerow' key={rowIndex}>
                        {row.map((app, index) => (
                            app.title === 'Password...' ? (
                                <a className="passwordDiv appiconsinglediv" href={app.url}>
                                <div className={`imagediv ${app.className}`} />
                                    <div className="divtitle specialDiv">{app.title}</div>
                                    <div className='passwordTitle'>Password Manager</div>
                                </a>
    
                            ) : (
                            <a className='appiconsinglediv' key={index} href={app.url}>
                            <div className={`imagediv ${app.className}`} />
                                <div className='divtitle'>{app.title}</div>
                            </a>
                        )
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AppDrawer