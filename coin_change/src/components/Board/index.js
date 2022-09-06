import React, { useEffect, useState } from "react";
import coinChange from "../../service/coinChange";
import expense from "../../assets/expense.png"
import "./styles.css"

export default function Board() {
  const [result, setResult] = useState(null);

  const handleSubmit = () => {
    try {    
      var input = document.querySelector("#coins");
      var coins = input.value;
      var input2 = document.querySelector("#amount");
      var amount = parseInt(input2.value);
      const tempCoins = coins.split("\n");
      var resCoins = tempCoins.map(Number);
      console.log(resCoins);
      console.log(amount);
      const res = coinChange(resCoins, amount) 
      console.log(res)
      setResult(res)
    } catch (error) {
      alert("Não foi possível gerar o troco, verifique se preencheu corretamente!")
    }
  }

  const onReset = () => {
    setResult(null)
  }

  return (
    <div className='board'>
          {result ? 
          <>
            <h1 className="header-h1 blue">O troco ideal é:</h1>
            <div className="inline-flex">
              <img className="logo" src={expense} alt="/"></img>
              <span className='board-span'>{result.join(", ")}</span>
            </div>
            <button onClick={onReset} className='board-button-2'>Tentar novamente</button>
          </>
          :
            <div>
              <div className='board-span-input'>
                <span className='board-span'>Quantia em dinheiro:</span>
                <input id="amount" className='board-input-1' placeholder='200'
                />
              </div>
              <div className='board-span-input'>
                <span className='board-span'>Valores das moedas:</span>
                <textarea id="coins" className='board-text-area' cols="2" placeholder="1&#10;10&#10;25&#10;50"></textarea>
              </div>
            <button onClick={handleSubmit} type='submit' className='board-button'>Receber troco</button>
            </div>
          }
    </div>
  );
}