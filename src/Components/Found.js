import React from "react";

const Found = ({results}) => {
    if (results === 0) return null;
    return (
        <>
        <h3>Found {results} results</h3>
        </>
        
    );
}
export default Found;