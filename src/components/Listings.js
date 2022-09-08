import React from "react";

function Listings(){
    return (
        <>
            <div className="oneSpecies">
                <img className="imgs" src = {image} alt='something'/>
                <h5 className="speciesName">{name}</h5>
                <p className="specieDescription">{desc}</p>
                <div className="withBtn">
                    <div id="donateBtnCarrier" className="withBtn"><button className="buttons" id="donateBtn"> Donate $10 </button></div>
                </div>
            </div>
        </>
    )

}
export default Listings;