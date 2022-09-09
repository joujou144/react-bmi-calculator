import './index.css';
import React, { useState } from 'react';

export default function App() {
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  const calcBmi = (e) => {
    e.preventDefault()

    if(weight === 0 || height === 0) {
      alert('Please enter a valid weight and height')
    } else {
      let bmi = weight / (height * height)
      setBmi(bmi.toFixed(1))

      //Logic for message
      if(bmi < 18.5) {
        setMessage('You are underweight')
      } else if(bmi >= 18.5 && bmi <= 24.9) {
        setMessage('You are at a healthy weight')
      } else {
        setMessage('You are overweight')
      }
    }
  }

  let imgSrc

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 18.5) {
      imgSrc = require("./images/underweight.jpeg");
    } else if (bmi > 18.5 && bmi <= 24.9) {
      imgSrc = require("./images/healthy.jpeg");
    } else {
      imgSrc = require("./images/overweight.jpeg");
    }
  }

  const reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
            <label>Height(m)</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)}/>
          </div>

          <div>
            <button className='submit-btn'>Submit</button>
            <button className='submit-btn btn-outline' onClick={reload}>Reset</button>
          </div>
          
        </form>

        <div className='message'>
          <h3>Your BMI is : {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt="weight-img"></img>
        </div>
      </div>
    </div>
  );
}


