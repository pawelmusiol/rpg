import React, {useEffect, useState} from 'react'
import { useLocation } from "react-router";
import TableWidget from './TableWidget'
import styled from 'styled-components'
import api from '../../api';

function Tables() {

	const [Data, setData] = useState(Array)

    console.log(Data)

    useEffect(()=>{
        let x = api.get('/Tables')
        if(x !== null){
            x.then(res => setData(res))
            
        }
    },[])

	return(
		<TableList>
            {Data.map((table, index) => (
                <TableWidget key={index} TableData={table}/>
            ))}
		</TableList>
	)	
}

const TableList = styled.div`
    display:grid;
    grid-template-columns:auto auto auto;
`
export default Tables