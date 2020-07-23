import React, {CSSProperties} from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik'
import {GetUser} from '../redux/actions'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useCookies } from "react-cookie";
import api from './../api'


function LoginPage({ dispatch }:any){

    let history = useHistory()
    const redirect = (token:string) => {
        history.push("/user/"+token)
    }

    const [cookies, setCookie] = useCookies()

    return(
        <div style={styles.mainContainer}>
            <Formik
                initialValues={{login: '', password:''}}
                onSubmit={(values,{ setSubmitting }) => {
                        setSubmitting(false);
                        let x = api.post('/login',values)
                        if(x !== null) x.then((res) => {
                            dispatch(GetUser(res.token,res.login))
                            redirect(res.token)
                            setCookie('Token', res.token,{maxAge: (10)})
                            setCookie('Login', res.login,{maxAge: (10)})
                        })
                        
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

export default connect()(LoginPage)