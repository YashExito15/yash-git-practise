import React,{useState} from 'react'

const UseStateBasics =()=>{
  const [text, setText]=useState('some text')
  const handleClick =()=>{
    if(text === 'some text'){
      setText('hello guys')
    }else{
      setText('some text')
    }
  }
  return (
    <>
    <h1>{text}</h1>
    <button className='btn' onClick={handleClick}>change text</button>
    </>
  )
}

export default UseStateBasics
