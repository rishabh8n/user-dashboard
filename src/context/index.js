import React, { useState } from "react";

const userProfile = React.createContext();

function Provider(props) {
    const [state, setState] = useState({
        first: '',
        last: '',
        country: '',
        email: '',
        phone: '',
        exp: '',
        availability: 'Full Time',
    });

    const handleChange = (e) => {
        setState(prevState => ({ ...prevState, [e.target.name]: e.target.value }))
    };

    return (
        <userProfile.Provider value={{ user: state, handleChange }}>
            {props.children}
        </userProfile.Provider>
    );
}

export { userProfile, Provider };