import React, { useState } from 'react';
import './index.css';

function App() {

  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState(0)
  const [message, setMessage] = useState('There is no message')

  

  let calcBmi = (event) => {
    event.preventDefault()

    if (weight === 0 || height ===0) {
      alert('Please enter a valid weight nad height')
    } else {
      let bmi = (weight / (height * height) * 703)
      setBmi(bmi.toFixed(1))


      if (bmi < 25) {
        setMessage('you are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are a healthy weight')
      } else {
        setMessage('You are over weight')
      }
    }
  }


  let imgSrc;
  if (bmi < 1) {
    imgSrc = null
  } else {
    if (bmi < 25) {
      imgSrc = require('./underweight.webp')
    } else if (bmi >= 25 && bmi < 30){
      imgSrc = require('./healthyweight.jpg')
    } else {
      imgSrc = require('./overweight.jpg')
    }
  }

 


  let reload = () => {
    window.location.reload()
  }


  return (
    <div className='app'>
      <div className='container'>
        <h2 className='center'>BMI CALCULAOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs) </label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>

          <div>
            <label>Height (inch) </label>
            <input value={height} onChange={(event) => setHeight(event.target.value)}/>
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
          
        </form>

        <div className='center'>
          <h3>Your BMI is : {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>
    </div>

  );
}

export default App;
