import ImcCalc from "./components/ImcCalc"
import ImcTable from "./components/ImcTable"
import {data} from "./data/data"
import { useState } from "react"

function App() {

  const calcImc = (e, height, weight) => {
    e.preventDefault()

    if(!height || !weight) return 
    
    // Convertendo de string para number 
    const weightFloat = +weight.replace(",", ".")
    const heightFloat = +height.replace(",", ".")


    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1)
    const imcNumber = +imcResult
    
    setImc(imcNumber)

    // Lógica que demonstra em qual grupo o usuário pertence
    data.forEach((item) => {
      if(imcResult >= item.min && imcResult <= item.max) {
        setinfo(item.info)
        setInfoClass(item.infoClass)
      }
    })

    if(!info) return 
  }


  const resetCalc = (e) => {
    e.preventDefault()
    setImc("")
    setinfo("")
    setInfoClass("")
  }

  const [imc, setImc] = useState("")
  const [info, setinfo] = useState("")
  const [infoClass, setInfoClass] = useState("")
  return (
    <>
      {!imc ? (<ImcCalc calcImc={calcImc}/>): (<ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc}/>)}
    </>
  )
}

export default App
