import React, { useState } from "react";

function Filter(){

    const [term, setTerm] =useState('');

    const handleInputChange = (e) => {
        const {id, value} = e.target;
        if (id === "searchTerm"){
            setTerm(value);
        }
    }
    //debugger
    const handleSearch = () => {
        console.log(term);
    }

    return (
        <>
            <div className="filter">
                <div className="introtext">
                    <h3>Find Your Next Happy Stay place</h3>
                    <h5>See and Search top listings all over the globe</h5>  
                </div>

                <div className="search">
                    <form>
                    <input
                        className="searchbar"
                        type="text"
                        value={term}
                        onChange = {(e) => handleInputChange(e)}
                        id="searchTerm"
                        placeholder="Which City Are you Visiting?"
                    />
                    <input className="searchbutton" type="submit" value="Search" onClick={handleSearch}/>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Filter;