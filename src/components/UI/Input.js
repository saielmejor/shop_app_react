import classes from './Input.module.css';

const Input=props=> { 
    return (<div className={classes.input}> 
        <label htmlFor={props.input.id}>{props.label}</label>
        <input {...props.input}/>
    </div>) ;
    // use ... spread operator to make input highly configurable so it can capture all sorts of inputs 
}; 
export default Input; 