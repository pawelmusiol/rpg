import React, {CSSProperties} from "react";
import styled, {keyframes} from 'styled-components'
import mainBackground from '../../img/mainBackground.jpg'

function LandingPage() {


    return (
        <div>
            <div style={{position:'relative', height: '100vh'}}>
                <LandingImage id="LandingImage1"/>
            </div>
            <LandingTextOuter>
                <LandingTextInner>
                    <LandingTextMain>
                        <h1 style={{marginTop:0}}>Poznaj MojeRpg</h1>
                        <p>Przejdź do sekcji stołów</p>
                        <div style={styles.DownArrows} onClick={() => GoTo("tables")}>
                            <img style={styles.Arrow} src={process.env.PUBLIC_URL+'/arrow.svg'} id="Arrow" onMouseOverCapture={ArrowAnimation} alt="bg"></img>
                        </div>
                    </LandingTextMain>
                </LandingTextInner>
            </LandingTextOuter>
            <div id="tables"></div>
        </div>
    )
    
}


    
    
const LandingImageAnimation = keyframes`
from {
    left: -400px;
    top: -100px;
    opacity:0;
}
to {
    left:0px;
    top: 0px;
    opacity:1;
}
`

const LandingImage = styled.div`
background-image:  url(${mainBackground});
background-repeat: no-repeat;
background-position: center;
background-size: cover;
width: 100vw;
height:100vh;
position:absolute;
z-index:-1;
animation: ${LandingImageAnimation} 1s cubic-bezier(0,0,0.4,1);
`
const LandingTextOuter = styled.div`
text-align:center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%,-50%);
opacity: 1;   
`
const LandingTextInner = styled.div`
position: relative;
background-color: rgba(255,255,255,0.2);
border-radius: 25%;
width: 20em;
padding-top:20em;
padding-left: 2%;
`
const LandingTextMain = styled.div`
position: absolute;
top: 50%;
left: 50%;
right: -50%;
transform: translate(-50%,-50%);
`


const styles = {	
	LandingTextDivText:{
        position:'absolute',
        top:'50%',
        left:'50%',
        right:'-50%',
        transform: 'translate(-50%,-50%)',
    } as CSSProperties,
	
	DownArrows:{
        width:'5vw',
        height:'5vw',
        border:'solid black 2px',
        borderRadius:'50%',
        marginLeft:'50%',
        transform: 'translateX(-50%)'
    } as CSSProperties,
	
	Arrow:{
        marginTop:'50%',
        transform: 'translateY(-50%)',
		width:'2.5vw',
		transition: '0.5s'
    } as CSSProperties,
}

function ArrowAnimation(event:any){
	let element:CSSStyleDeclaration = event.target.style
	element.marginTop="5vw"
	element.opacity="0"
	setTimeout(() => {
		element.marginTop="0%"
		element.opacity="0"
		setTimeout(() => {
			element.marginTop="50%"
			element.opacity="1"
		}, 350);
	}, 300);
}

function GoTo(elemId:any) {
    var elem = document.getElementById(elemId)
    if (elem === null) return;
    elem.scrollIntoView({behavior:"smooth"})

}




export default LandingPage