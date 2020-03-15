import React from 'react';
import SignUp from '../../SignUp'

import styles from './MainPage.module.css';

const MainPage = (props) => {
    return props.showSignUpPage ? <SignUp showHomePage={props.showHomePage}/> :
        (<div className={styles.MainPage}>
            <button className={styles.Button}>Sign In</button>
            <button className={styles.Button} onClick={props.signUpHandler}>Sign Up</button>
        </div>)
}


export default MainPage;