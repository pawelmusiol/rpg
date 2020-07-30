import React, {useState} from 'react'
import styled from 'styled-components';

export default function CharacterWidget (props:any){
	const [Character, setCharacter] = useState({name: 'o', desc: ' '})
	const [Loaded, setLoaded] = useState(false)

	if(props.CharacterData && Loaded === false){
		setCharacter(props.CharacterData)
		setLoaded(true)
	}

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
		</CharacterContainer>
	)
}


const Name = styled.div`
	
`
const Desc = styled.div`

`
const CharacterContainer = styled.div`
	display: grid;
	grid-template-columns: 25% 75%;
	grid-column-gap:10px;
`