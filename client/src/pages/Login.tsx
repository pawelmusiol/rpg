import React, {CSSProperties} from "react";

function LoginPage(){

    return(
        <div style={styles.mainContainer}>
            
                <label>Login</label>
                <input type="text" name="login" id="login"/>

                <label>Hasło</label>
                <input type="password" name="password" id="password"/>
            
                <input type="submit" value="Zaloguj się"/>
        </div>
    )
}

const styles = {
    mainContainer: {
        flexDirection: 'column',
        display : 'flex',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    } as CSSProperties,
    formDiv:{
        display: 'block'
    } as CSSProperties
} 

export default LoginPage