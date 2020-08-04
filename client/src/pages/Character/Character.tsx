import React, { useState, useEffect} from "react";
import { useLocation } from 'react-router-dom'
import api from '../../api'
import styled from 'styled-components'

interface ICharacter {
	character_id: number,
	name: string,
	description: string
}

interface ISkills {
		skills_id: number,
		name: string,
		value: number
}

interface IExtras {
	[index:number]: {
		extra_id:number,
		name: string,
		desc: string
	}
}

interface IAspects {
	[index:number]: {
		aspects_id: number,
		name: string
	}
}

interface IRoles {
	[index:number]: {
		roles_id:number,
		type:number
	}
}

interface ICharacter {
	Character: ICharacter,
	Skills: ISkills[],
	Extras: IExtras,
	Aspects: IAspects,
	Roles: IRoles
}

export default function Character(){
	const [CharacterData, setCharacterData] = useState<ICharacter>()
	let location = useLocation()

	useEffect(() => {
		let ApiData = api.get(location.pathname)
		if (ApiData !== null) {
			ApiData.then((res) => setCharacterData(res))
		}	
	}, [])
	

	//console.log(CharacterData)
		return(
			<div>
				{CharacterData ? (
					<>
						<Name> { CharacterData.Character.name } </Name>
						<Desc> {CharacterData.Character.description} </Desc>

						<Stats>

							<Container>
								{
									CharacterData.Skills.map((skill,index) => (
										<Item>
											<p>{skill.name}</p>
											<p>{skill.value}</p>
										</Item>
									))
								}
							</Container>
						</Stats>
					</>
				):(
					<p>Wystąpił błąd</p>
				)}
				
			</div>
		)
}

const Name = styled.h1`

`

const Desc = styled.p`
	
`

const Container = styled.div`

`
const Item = styled.div`
	display: grid;
	grid-template-columns: 90% 10%;
`

const Stats = styled.div`
	grid-gap: 10px;
	display: grid;
	grid-template: 50% 50%
`