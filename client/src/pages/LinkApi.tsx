import React, { CSSProperties } from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkApi = (props:any) => {
    
    return (
            <MenuButton to={props.path} style={styles.MenuButton}>
                {props.children}
            </MenuButton>
    )
}

const MenuButton = styled(Link)`
    font-size: large;
	background-color: lightgrey;
	text-decoration: none;
	margin: 1%;
`

const styles = {
	MenuButton: {
		
		
	} as CSSProperties
}

export default LinkApi