import React, { CSSProperties } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkApi = (props:any) => {

    const parentAPI = () =>{
        props.callAPI(props.path)
    }
    
    return (
            <MenuButton to={props.path} /*onClick={() => parentAPI()}*/ style={styles.MenuButton}>
                {props.children}
            </MenuButton>
    )
}

const MenuButton = styled(Link)`
    font-size: large;
	background-color: red;
	text-decoration: none;
	margin: 1%;
`

const styles = {
	MenuButton: {
		
		
	} as CSSProperties
}

export default LinkApi