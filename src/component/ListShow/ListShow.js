import './ListShow.css'
import searchSuggestions from '../../data/searchSuggestions'

const ListShow = ({ text, sendName }) => {
    const displayData = searchSuggestions.filter((data) => {
        return data.name.toLowerCase().includes(text.toLowerCase())
    })

    const renderedData = displayData.map((data) => {
        return <div key={data.id} className='searchsuggestionlistitem' onClick={() => sendName(data.name)}>{data.name}</div>
    })

    return (
        <div className='renderedsearchsuggestionsdiv'>{renderedData}</div>
    )
}

export default ListShow;