import './App.css'
import { useState } from 'react'
import Input from './component/Input/Input'
import GoogleName from './component/GoogleName/GoogleName'
import NavBar from './component/Navbar/NavBar'
import Lowerparthomepage from './component/Lowerparthomepage/Lowerparthomepage'
import PageShow from './component/PageShow/PageShow'



const App = () => {
  
  const [showData, setShowData] = useState(false)
  const [textInput, setTextInput] = useState('')


  const handleTextReceived = (name) => {
    console.log(name, 'Name')
    setTextInput(name)
    setShowData(false)
  }


 
  return (textInput === '' ? <div className='mainDivGoogle'>
    <NavBar />
    <div className='googleDiv'>
      <GoogleName />
      <Input
        showData={showData}
        onFocus={() => setShowData(true)} onBlur={() => {
          setShowData(false)
        }}
        sendNameToApp={handleTextReceived}
      />
      <Lowerparthomepage showData={showData} />
    </div>
  </div> : <PageShow textInput={textInput}/>
  )
}

export default App;