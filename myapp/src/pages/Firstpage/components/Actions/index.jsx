import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput } from '../../../../store/reducers/inputSlice';
import { useNavigate } from 'react-router-dom';

function Actions() {
  const inputState = useSelector((state) => state.input)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    dispatch(updateInput({ [name]: value }))
  };

  const handleClick = () => {
    navigate('/final')
  }

  return <div>
    <input type="text" name="title" value={inputState.title} onChange={handleChange} />
    <input type="text" name="description" value={inputState.description} onChange={handleChange} />
    <input type="color" name="titleColor" value={inputState.titleColor} onChange={handleChange} />
    <input type="color" name="descriptionColor" value={inputState.descriptionColor} onChange={handleChange} />
    <input type="color" name="mainBgColor" value={inputState.mainBgColor} onChange={handleChange} />
    <input type="color" name="titleBgColor" value={inputState.titleBgColor} onChange={handleChange} />
    <input type="range" name="titleBorderRadius" value={inputState.titleBorderRadius} onChange={handleChange} />
    <input type="range" name="titleFontSize" value={inputState.titleFontSize} onChange={handleChange} />
    <input type="range" name="descriptionFontSize" value={inputState.descriptionFontSize} onChange={handleChange} />
    <button onClick={handleClick}>Click</button>
</div>
}

export default Actions;