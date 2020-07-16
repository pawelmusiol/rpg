import React from "react";
import LandingPage from "./LandingPage";
import Tables from "./Tables";

function Home() {
    document.body.style.overflowX='hidden'
    return(
        <div>
            <LandingPage/>
            <Tables/>
        </div>
    )
}
export default Home