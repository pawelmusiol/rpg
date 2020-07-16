import React, {CSSProperties} from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import api from './../api'

function LoginPage(){


    return(
        <div style={styles.mainContainer}>
            <Formik
                initialValues={{login: '', password:''}}
                onSubmit={(values,{ setSubmitting }) => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                        let x = api.post('/login',values)
                        if (x !== null) x.then(res => console.log(res))
                }}
            >
                {({
                    isSubmitting,
                }) =>(
                <Form>
                    <label>Login</label>
                    <Field
                    type="text" 
                    name="login" 
                    id="login"
                    />

                    <label>Hasło</label>
                    <Field 
                    type="password" 
                    name="password" 
                    id="password"
                    />
                
                    <button type="submit" disabled={isSubmitting}>Login</button>
                </Form>
                )}
            </Formik>


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