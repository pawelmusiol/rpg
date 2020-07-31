import React, {useState} from 'react'
import { Link, useLocation } from "react-router-dom";
import styled from 'styled-components';
import More from '../more';

export default function CharacterWidget (props:any){
	const [Character, setCharacter] = useState({name: 'o', desc: ' ', character_id: 0})
	const [Loaded, setLoaded] = useState(false)

	if(props.CharacterData && Loaded === false){
		setCharacter(props.CharacterData)
		setLoaded(true)
	}
	let CharacterPath =  '/Character/' +Character.character_id

	return(
		<CharacterContainer>
			<Name>
				<p>
					{Character.name}
				</p>
			</Name>
			<p>
				{Character.desc}
			</p>
			<MoreButton to={CharacterPath}> More </MoreButton>
		</CharacterContainer>
	)
}


const Name = styled.div`
	
`
const Desc = styled.div`

`

const MoreButton = styled(Link)`

`

const CharacterContainer = styled.div`
	display: grid;
	grid-template-columns: minmax(auto, 20%) 70% minmax(auto, 10%);
	grid-column-gap:10px;
`