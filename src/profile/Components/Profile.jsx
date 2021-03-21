import React from "react";

function Profile({ fullName, Bio, Profession, children, handleAlert }) {
    return (
        <div>
            <h1 className="Full">{fullName}</h1>
            <h1 className="Addr">{Bio}</h1>
            <h1 className="Addr">{Profession}</h1>
            {children}
            
            <button onClick={()=>handleAlert(fullName)}> click here </button>
        </div>
    );
}

export default Profile;
