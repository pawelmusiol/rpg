import React, { CSSProperties } from 'react'
import { Link } from "react-router-dom";

const LinkApi = (props:any) => {

    const parentAPI = () =>{
        props.callAPI(props.path)
    }
    
    return (
            <Link to={props.path} onClick={() => parentAPI()} style={styles.MenuButton}>
                {props.children}
            </Link>
    )
}

const styles = {
	MenuButton: {
		fontSize: 'large',
		backgroundColor: 'red',
		textDecoration: 'none',
		margin: '1%',
		
	} as CSSProperties
}

export default LinkApi