import React from 'react';
import { useSelector } from 'react-redux';
import './style.css'

function Final () {
  const inputState = useSelector((state) => state.input);

  return <div style={{background: inputState.mainBgColor, borderRadius: inputState.titleBorderRadius}} 
  className='box'>
    <div className='title-box' style={{background: inputState.titleBgColor}}>
      <h1 style={{color: inputState.titleColor, fontSize: inputState.titleFontSize}}>{inputState.title}</h1>
      <p style={{color: inputState.descriptionColor, fontSize: inputState.descriptionFontSize}}>
        {inputState.description}</p>
    </div>
</div>
};

export default Final
