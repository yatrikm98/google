import './ThreeDots.css'


const ThreeDots = ({onClose,onRemoveModalItem,onEdit}) => {

    return (
        <div>
            <div className='outerdivthreedots' onClick={(e) => {
                // e.stopPropagation()
                e.preventDefault()
                onClose()
            }}></div>
            <div className='optionsdiv' onClick={(e) => {
                e.preventDefault()
            }}>
                <div onClick={(event)=>{
                    // event.preventDefault()
                    // event.stopPropagation()
                    onClose()
                    onEdit()
                }}>Edit ShortCut</div>
                <div onClick={(event)=>{
                    // event.preventDefault()
                    // event.stopPropagation()
                    onClose()
                    onRemoveModalItem()
                }}>Remove</div>
            </div>
        </div>
    )
}

export default ThreeDots;