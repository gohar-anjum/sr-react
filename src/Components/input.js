import { useState } from 'react';
import './input.css';

export default function InputComponent() { 
  const [inputText, setText] = useState(''); 

  function Changed(e){
    setText(e.target.value);
  }
  const [inputText2, setText2] = useState(''); 

  function Changed2(e2){
    setText2(e2.target.value);
  }
  const [inputText3, setText3] = useState(''); 

  function Changed3(e3){
    setText3(e3.target.value);
  }
  return ( 
    <div className='main'>
        <div className='nameline'>
            <label>First Name</label>
            <input value={inputText} onChange={Changed} />
        </div>
        <div className='nameline'>
            <label>Last Name</label>
            <input value={inputText2} onChange={Changed2} />
        </div>
        <div className='nameline'>
            <label>Your Email</label>
            <input type='email' value={inputText3} onChange={Changed3} />
        </div>
        <h3>{inputText} {inputText2} ({inputText3})</h3>
    </div> 
  ); 
} 