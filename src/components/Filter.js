import React from "react";

function Filter(){
    return (
        <>
            <div className="filter">
                <div className="introtext">
                        <h2>Find Your Next Happy Stay place</h2>
                        <h5>See and Search top listings all over the globe</h5>  
                </div>
                <div className="search">
                    <form>
                        <input className="searchbar" type="text" name="city" placeholder= "Which city are you visiting?"/>
                        <input className="searchbutton" type="submit" value="Search"/>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Filter;