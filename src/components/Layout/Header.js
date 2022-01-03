import {Fragment} from 'react'; 

import mealsImage from '../../assets/meals.jpeg';
import classes from './Header.module.css'
import HeaderCartButton from './HeaderCartButton.js'
const Header=props=>{ 
return <Fragment>
<header className={classes.header}> 
    <h1>ReactMeals </h1>
    <HeaderCartButton/>
</header>
<div className={classes['main-image']}>
    <img src={mealsImage} alt='A table of full of delicious food'/> 
    {/* add source of local image  */}
</div>

</Fragment>

} ; 
export default Header; 