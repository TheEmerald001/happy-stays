import React from "react";

function Filter(){
    return (
        <>
            <div className="filter">
                <div className="introtext">
                    <p>
                        <h2>Find Your Next Happy Stay place</h2>
                        <h5>See and Search top listings all over the globe</h5>
                    </p>
                </div>
                <div className="search">
                    <form>
                        <input class="searchbar" type="text" name="city" placeholder= "Which city are you visiting?"/>
                        <input class="searchbutton" type="submit" value="Search"/>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Filter;