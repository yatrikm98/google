import './ModalListItem.css'
import { useState } from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import ThreeDots from '../ThreeDots/ThreeDots';

const ModalListItem = ({ data, index ,onRemoveModalItem,onEdit}) => {
    
    const [openThreeDotsIndex, setopenThreeDots] = useState(null)
    
    let actualName = data.name
    if (actualName.length > 10) {
        actualName = actualName.slice(0, 10) + "..."
    } else {
        actualName = data.name
    }

    const isExpanded = index === openThreeDotsIndex

    return (
        <a href={data.url} title={data.name} key={index}>
            <div className='addclickablediv'>
                <div className='threedotsicon' onClick={(e) => {
                    e.preventDefault()
                    setopenThreeDots(index)
                }}><BsThreeDotsVertical />
                </div>
                <div className={`imageplusdiv ${data.color}`}>
                    <div className='initialdiv'>{data.name.toLocaleUpperCase()[0]}</div>
                </div>
                <div className='shortcutdivname'>{actualName}</div>
                {isExpanded && <ThreeDots 
                    onClose={() => setopenThreeDots(null)} 
                    onRemoveModalItem={()=>onRemoveModalItem(data.id)}
                    onEdit={()=>onEdit(data)}
                    />}
            </div>
        </a>
    )
}

export default ModalListItem