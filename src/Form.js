import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { addValueOnDisplay, getDisplayValue } from './DataSlice';
import { useSelector } from 'react-redux';

const Form = () => {
    const[inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

   

    const [displayValue, setDisplayValue ] = useState('');

    const onFormSubmit= (e) =>{
        e.preventDefault();

      
        setDisplayValue(inputValue);
        dispatch(addValueOnDisplay(displayValue));
        console.log(displayValue);
        setInputValue('');
    }

    const textOnScreen = useSelector(getDisplayValue);

    const onChange = (e) =>{
        setInputValue(e.target.value);
    }
  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <input type='text' value={inputValue} onChange={onChange}/>
            <button type='submit'>Submit</button>
        </form>

        <div>
            {textOnScreen}
        </div>
    </div>
  )
}

export default Form