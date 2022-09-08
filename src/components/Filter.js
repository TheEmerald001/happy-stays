import React from "react";

function Filter(){
    return (
        <>
            <div>
                <form>
                    <label>
                        Search Listings 
                        <input type="text" name="search"></input>
                        <input type="submit" value="submit"></input>
                    </label>
                </form>
            </div>
        </>
    )
}
export default Filter;