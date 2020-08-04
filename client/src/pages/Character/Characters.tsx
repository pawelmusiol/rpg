import React, {useState, useEffect} from "react";
import api from "../../api";
import CharacterWidget from './CharacterWidget'
import { Link, useLocation } from "react-router-dom";

export default function CharacterList(data:any){
	const [Characters, setCharacters] = useState(Array)
	let location = useLocation()


	useEffect(() => {
		let id = data.id
		let result = api.get('/character/'+ id +'/characters')
		if (result !== null) {
			result.then(res =>	setCharacters(res))
		}
	}, [data])
	
	return(
		<div>
			{Characters.map((character, index) => (
				<CharacterWidget key={index} CharacterData={character} path={location.pathname} location={location} />
			))}
			<Link to={'/Character/NewChar/'+data.id}>New Character</Link>
		</div>
	)
}