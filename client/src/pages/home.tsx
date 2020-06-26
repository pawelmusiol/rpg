import React, {CSSProperties} from "react";


function Home() {
    if (document.getElementById("landingImage") !==null) {
        AnimationOfLandingImage(document.getElementById("landingImage"))
    }
    
    return (
        <div>
            <div style={{position:'relative'}}>
                <div style={styles.LandingImage} id="landingImage"></div>
            </div>
            <div style={styles.landingText} id="LandingText">
                <div style={styles.LandingTextDiv}>
                    <div style={styles.LandingTextDivText}>
                        <h1 style={{marginTop:0}}>Poznaj MojeRpg</h1>
                        <p>Przejdź do sekcji stołów</p>
                        <div style={styles.DownArrows}>
                            <img style={styles.Arrow} src={process.env.PUBLIC_URL+'/arrow.svg'}></img>
                        </div>
                    </div>
                </div>
            </div>
            <p style={{margin:'0'}}>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a></p>
        </div>
    )
    
}

const styles = {
    LandingImage:{
        backgroundImage:  "url("+process.env.PUBLIC_URL+"/mainBackground.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: 'cover',
        width: '100vw',
        height:'100vh',
        position:'absolute',
        opacity:'0',
        zIndex:-1
    } as CSSProperties,
    landingText:{
        textAlign:'center',
        position: 'absolute',
        top:'50%',
        left:'50%',
        transform: 'translate(-50%,-50%)',
        opacity:'0',
        
    } as CSSProperties,
    LandingTextDiv:{
        position:'relative',
        backgroundColor:'rgba(255,255,255,0.2)',
        padding:'2%',
        borderRadius:'25%',
        width:'20em',
        paddingTop:'20em',
        paddindLefy:'2%,'
    } as CSSProperties,
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
        width:'2.5vw'
    },
}


const AnimationOfLandingImage = (elem:any) => {
    
    let posX = elem.offsetTop
    let posY = elem.offsetLeft
    let elemOpacity = elem.style.opacity*1
    let positionY = posY-400
    let positionX = posX-400;
    let interval = setInterval(frame,1)

    function frame (){
        if(posX >= positionX) {
            if (Math.abs(positionX-posX)<1) {
                positionX+=1
                positionY+=1
            }
            else{
                positionX = positionX+Math.abs(positionX/50)
                positionY = positionY+Math.abs(positionY/50)
            }
            elem.style.left = positionY + 'px'
            elem.style.top = positionX + 'px'
            if (elemOpacity<1) {
                elemOpacity+=0.005
                elem.style.opacity=elemOpacity
            }
            console.log(positionX)
        }
        else {
            clearInterval(interval)
            
            let text = document.getElementById("LandingText")
            let TextOpacity:any
            if (text != null) TextOpacity = text.style.opacity
            console.log(TextOpacity)

            const textAnimation = function textAnimation (){
        
                if (TextOpacity < 1) {
                    console.log(TextOpacity)
                    TextOpacity = parseFloat(TextOpacity)
                    TextOpacity+=0.0075
                    if (text !== null) {
                        text.style.opacity = TextOpacity.toString()
                    }
                }
                else clearInterval(textInterval)
            }
            let textInterval = setInterval(textAnimation,10)  
        }
    }
    
}


export default Home