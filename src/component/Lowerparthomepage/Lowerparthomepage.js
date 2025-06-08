import './Lowerparthomepage.css'
import Add from '../../images/Add.svg'
import { useEffect, useState } from 'react'
import Modal from '../Modal/Modal'
import ModalListItem from '../ModalListItem/ModalListItem'




const Lowerparthomepage = ({ showData }) => {

    const [openModal, setOpenModal] = useState(false)
    const [modalList, setModalList] = useState([])
    const color = ['red', 'green', 'purple', 'blue']
    const [editItemDetails, setEditItemDetails] = useState({
        id: '',
        name: '',
        url: ''
    })

    const handleModalSubmit = (name, url) => {
        setOpenModal(false)
        setModalList([...modalList,
        { id: Math.floor(Math.random() * 999), name, url, color: color[Math.floor(Math.random() * color.length)] }])
    }

    const handleRemoveModal = (id) => {
        const updatedModalList = modalList.filter((listItem) => {
            return listItem.id !== id
        })
        setModalList(updatedModalList)
    }

    const handleEditModalItem = (data) => {
        setEditItemDetails({ ...editItemDetails, ...data })
        setOpenModal(true)
    }

    const renderedDataFromModal = modalList.map((data, index) => {
        return <ModalListItem data={data} index={index} key={index} onRemoveModalItem={handleRemoveModal} onEdit={handleEditModalItem} />
    })

    const handleEditedDetailsOfModal = (name, url) => {
        const updatedModalList = modalList.map((modalitem) => {
            if (modalitem.id === editItemDetails.id) {
                return { ...modalitem, name, url }
            }
            return modalitem
        })
        setModalList(updatedModalList)
    }

    useEffect(() => {
        const modalListData = localStorage.getItem('modalListData')
        setModalList(JSON.parse(modalListData))
    }, [])


    useEffect(() => {
        localStorage.setItem('modalListData', JSON.stringify(modalList))
    }, [modalList])


    return (
        <div className={showData ? 'fixedlowerpart' : 'lowerpart'} >
            {renderedDataFromModal}
            <div className={modalList.length >= 10 ? 'hideshortcutdiv' : 'shortcutdiv'}
                onClick={() => {
                    setOpenModal(true)
                }}>
                <div className='plusimagediv' >
                    <img src={Add} alt='Add Pic' className='plusimage' />
                </div>
                <div className='shortcutdivname'>Add Shortcut</div>
            </div>
            {openModal && <Modal
                onClose={() => {
                    setOpenModal(false)
                    setEditItemDetails({
                        name: '',
                        url: ''
                    })
                }}
                onSubmit={handleModalSubmit}
                editName={editItemDetails.name}
                editUrl={editItemDetails.url}
                onEditSubmit={(name, url) => {
                    handleEditedDetailsOfModal(name, url)
                    setEditItemDetails({
                        name: '',
                        url: ''
                    })
                    setOpenModal(false)
                }}
            />}
        </div>
    )
}

export default Lowerparthomepage;