import {useRef,useState} from 'react';
import classes from './MealItemForm.module.css'; 
import Input from '../../UI/Input';



const MealItemForm= props => { 
    const[amountIsValid,setAmountIsValid]= useState(true); 
    
    const amountInputRef=useRef();// creates a reference that will be used in Input component 
    const submitHandler=event=>{ 
        event.preventDefault(); //prevents from reload

        const enteredAmount=amountInputRef.current.value; 
        const enteredAmountNumber=+enteredAmount; // converts string to number 
        if( enteredAmount.trim().length ===0 || enteredAmountNumber<1 ||enteredAmountNumber>5) { 
            setAmountIsValid(false);// set to false
            return; 
        }; 
        props.onAddToCart(enteredAmountNumber);
    };

    return <form className={classes.form} onSubmit={submitHandler}> 
        <Input 
        ref={amountInputRef}
        label="Amount" 
        input={{ id:'amount'+props.id, 
        type:'number' , 
        min: '1',
        max:'5',
        step:'1', 
        defaultValue:1}}/> 
        <button>+Add</button>  
        {!amountIsValid && <p>Please enter a validate number (1-5)</p>}
    </form>
}
export default MealItemForm ; 