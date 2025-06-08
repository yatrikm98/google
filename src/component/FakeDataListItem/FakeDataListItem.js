import { useEffect, useState } from 'react'
import './FakeDataListItem.css'


const FakeDataListItem = ({ data }) => {

    const [src, setSrc] = useState(false)
    
    useEffect(() => {
        setSrc(`https://picsum.photos/seed/${data.id}/200/300`)
    }, [data.id])


    return (
        <div className="maindatadiv">
            <a className='divtohover' href={data.url}>
                <div className="divPerson">
                    <div className="imageitemdiv">
                        <img alt="No Pic" src={src ?
                            src :
                            `https://plus.unsplash.com/premium_photo-1701090939615-1794bbac5c06?w=30&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JheSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D`
                        } className="imageitem" />
                    </div>
                    <div className="details">
                        <div className="name">{data.name}</div>
                        <div className="folowersorurl">{data.folowersOrUrl}</div>
                    </div>
                </div>
                <h3 className="bigname">{data.bigName}</h3>
            </a>
            <div className="descriptionperson">{data.description}</div>
        </div>
    )
}

export default FakeDataListItem;