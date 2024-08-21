import { useState } from 'react';
import './input.css';

export default function InputComponent() { 
    const [form, setForm] = useState({
        FirstName : 'Gohar',
        LastName : 'Anjum',
        Email : 'gohar@devgohar.com'
      });
  return ( 
    <div className='main'>
        <div className='nameline'>
            <label>First Name</label>
            <input value={form.FirstName} onChange={e=>{
                setForm({
                    ...form, 
                    FirstName:e.target.value})
            }} />
        </div>
        <div className='nameline'>
            <label>Last Name</label>
            <input value={form.LastName} onChange={e=>{
                setForm({
                    ...form, 
                    LastName:e.target.value})
            }} />
        </div>
        <div className='nameline'>
            <label>Your Email</label>
            <input type='email' value={form.Email} onChange={e=>{
                setForm({
                    ...form, 
                    Email:e.target.value})
            }} />
        </div> 
        <h3>{form.FirstName} {form.LastName} {form.Email}</h3>
    </div> 
  ); 
} 