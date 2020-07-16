import React, {useState} from 'react'
import styled from 'styled-components'

function TableWidget (props:any) {

	const [Table, setTable] = useState({name: 'x', system: 'default', expire_date: "00-00-0000"})
	const [Loaded, setLoaded] = useState(false)
	
	if(props.TableData && Loaded === false){
		setTable(props.TableData)
		setLoaded(true)
	}
	

	return(
		<Container>
			<Title>{Table.name}</Title>
			<System>System: {Table.system}</System>
			<ExData>Expire Date: {Table.expire_date}</ExData>
			<JoinButton href="/a">Join</JoinButton>
		</Container>
	)
}



const Container = styled.div`
	border: 1px solid black;
	margin: 1vw;

`
const Title = styled.h1`
	margin-top: 0;
`
const System = styled.p`

`
const ExData = styled.p`

`

const JoinButton = styled.a`
`

export default TableWidget