import React from "react";
import { Redirect } from "react-router-dom";
import { Field, Formik, Form, ErrorMessage } from 'formik'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import api from '../../api'

interface IUser {
	user: any
}


export default function CreateCharacter(){
	let UserData = []

	UserData  = useSelector((state:IUser) => state.user)
	console.log(UserData)
	if (UserData.length === 0) {
		return(
			<Redirect push to='/'/>
		)
	}
	else{
		return(
			<Formik
			initialValues={{name: '', description: '', aspects: []}}
				onSubmit={(values,{ setSubmitting })=>{
					setSubmitting(false)
					alert(JSON.stringify(values,null,2))
					api.post('/character/AddChar',values)
				}}
			>
				{({
					isSubmitting
				}) =>(
				<Form>
					<LabelInput type='text' name='name'/>
					<LabelInput type='text' name='description'/>

					<MultiField title="aspects" type="string" length={3} theme={theme} />
					<ManyMultiFields title="extras" type="string" length={1} theme={theme} />
					<ManyMultiFields title="stunts" type="string" length={1} theme={theme} />


					<ManyMultiFields title="skills" type="string" length={4} ></ManyMultiFields>
					<button type='submit' disabled={isSubmitting} >Submit</button>
					
				</Form>
				)}
			</Formik>
		)
	}
}

interface IFieldProps {
	name:string,
	type:string,
	theme?:any
}

interface IMultipleFieldsProps{
	title:string,
	type: string,
	length:number,
	theme?:any
}

function MultiField(props:IMultipleFieldsProps){

	let theme = props.theme
	if (props.theme.theme) {
		theme = props.theme.theme
		console.log(props.theme.theme)
	}

	//TODO one line input if it's a must 

	/*if (props.length === 1) {
		return (
		<>
			<LabelInput name ={props.title} type={props.type} />
			<BorderDiv/>
		</>
		)
	}
	else{*/
		let fields = []
		for (let index = 0; index < props.length; index++) {
			fields.push(<StyledField type={props.type} name={props.title + '['+ index +']'} theme={theme}/>)
		}
		
		return (
		<FieldSet>
			<legend>{props.title}</legend>
		{fields}
		<BorderDiv/>
		</FieldSet>
		)
	//}
}

function ManyMultiFields(props:IMultipleFieldsProps){
	let fields = []
	let theme = StyledField.defaultProps

	if (props.theme) {
		theme = props.theme
	}

	for (let index = 0; index < props.length; index++) {
		let title:string = ''
		let RowLength:number = 0

		if (props.title === 'skills') {
			title = 'P' + (4-index)
			RowLength = index+1
		}
		
		else {
			title = props.title+(index+1)
			RowLength = 2
		}

		fields.push(MultiField({title:title, type:props.type, length:RowLength, theme:theme}))
	}
	return(
		<fieldset>
		<legend>{props.title}</legend>
		{fields}
		</fieldset>
	)
}

function LabelInput(props:IFieldProps){
	
	
	return(		
		<div>
			<label htmlFor={props.name}>{props.name}</label>
			<StyledField type={props.type} name={props.name} />
			<ErrorMessage name={props.name}/>
		</div>
	)
}

let theme = { 
	width: '50%',
	display: "block",
	margin: '1%',
}
let skills = {
	margin: '1%'
}


const FieldSet = styled.fieldset`
	border: none;

`


const BorderDiv = styled.div`
	border-bottom: 1px solid black;
	margin-top:1%;
	width:50%;
`

const StyledField = styled(Field)`
	margin: ${props => props.theme.margin};
	display: ${props => props.theme.display};
	width: ${props => props.theme.width};
	background-color: #ffecde;

`
StyledField.defaultProps = {
	theme: {
		display: 'inline',
		margin: '0 2%',
		
	}
}