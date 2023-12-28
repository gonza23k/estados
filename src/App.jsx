import './App.css'
import './Registro.css'
import { useState } from "react"
import Registro from './components/Registro'



function App() {
  const [error, setError] = useState("")
  const [succes, setSucces] = useState("")
  return (
    <>
    <div>
      <Registro error={error} succes={succes} setError={setError} setSucces={setSucces}/>
    </div>
      
    </>
  )
}

export default App
