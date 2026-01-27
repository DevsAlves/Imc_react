import "../css/ImcCalc.css";
import Button from "./Button";
import { useState } from "react";

function ImcCalc({calcImc}) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  // Função de limpar os inputs
  const clearForm = (e) => {
    e.preventDefault()
    setName("")
    setAge("")
    setGender("")
    setHeight("")
    setWeight("")
  }


  // Função de REGEX para a altura
  const validDigits = (text) => {
    return text
    .replace(/[^\d,]/g, "")           // só números e vírgula
    .replace(/(,.*),/g, "$1")         // permite só UMA vírgula
    .replace(/(\d+,\d{0,2}).*/, "$1") // limita a 2 casas após a vírgula
  }

  // Função de REGEX para idade 
  const validAge = (text) => {
    return text.replace(/\D/g, "").slice(0, 2)
  }

  // Função de Regex para os inputs de text 
  const validText = (text) => {
    return text.replace(/[^a-zA-ZÀ-ÿ\s]/g, "")
  }


  //  Função que pega o nome e faz um REGEX 
   const handleNameChange = (e) => {
    const updateValue = validText(e.target.value)
    setName(updateValue)
  }

  //  Função que pega a idade e faz um REGEX 
   const handleAgeChange = (e) => {
    const updateValue = validAge(e.target.value)
    setAge(updateValue)
  }

  // Função que pega a altura e faz um REGEX 
  const handleHeightChange = (e) => {
    const updateValue = validDigits(e.target.value)
    setHeight(updateValue)
  }

  // Função que pega o valor da altura e faz um REGEX 
  const handleWeightChange = (e) => {
    const updateValue = validDigits(e.target.value)
    setWeight(updateValue)
  }

  return (
    <div className="imc-container">
      <h2>Calculadora de IMC</h2>

      <form className="imc-form">
        <div className="form-group">
          <label for="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            required
            value={name}
            onChange={handleNameChange}
          />
        </div>

        <div className="form-group">
          <label for="idade">Idade</label>
          <input
            type="text"  // Mudei para tipo TEXT 
            id="idade"
            name="idade"
            required
            value={age}
            onChange={handleAgeChange}
          />
        </div>

        <div className="form-group">
          <label for="sexo">Sexo</label>
          <select
            id="sexo"
            name="sexo"
            required
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Selecione</option>  {/*Ficar atento aqui*/} 
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
        </div>

        <div className="form-group">
          <label for="altura">Altura (cm)</label>
          <input
            type="text"  // Mudei para tipo TEXT 
            id="altura"
            name="altura"
            required
            value={height}
            onChange={handleHeightChange}
          />
        </div>

        <div className="form-group">
          <label for="peso">Peso (kg)</label>
          <input
            type="text" // Mudei para tipo TEXT 
            id="peso"
            name="peso"
            required
            value={weight}
            onChange={handleWeightChange}
          />
        </div>

        <Button id="calc-btn" text="Calcular" action={(e) => { calcImc(e, height, weight)}}/>
        <Button id="clear-btn" text="Limpar" action={clearForm}/>
      </form>

      <div className="resultado"></div>
    </div>
  );
}

export default ImcCalc;
