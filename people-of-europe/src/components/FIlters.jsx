import React, { useState, useEffect } from 'react';

export default function Filters(props){
    const [firstName, setFirstName] = useState([]);
    const [lastName, setLastName] = useState([]);
    const [gender, setGender] = useState([]);
    const [nationality, setNationality] = useState([]);
    function handleFirst(e){
        setFirstName(e.target.value)
    }
    function handleLast(e){
        setLastName(e.target.value)
    }
    function handleGender(e){
        setGender(e.target.value)
    }
    function handleNationality(e){
        setNationality(e.target.value)
    }
    
    return(
        <form>
            <select name="gender" id="gender" onChange={handleGender}>
                <option value="No gender filter">No gender filter</option>
                <option value="female">female</option>
                <option value="male">male</option>
            </select>
            <select name="nationality" id="nationality" onChange={handleNationality}>
                <option value="No nationality filter">No nationality filter</option>
                <option value="British">British</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Spanish">Spanish</option>
            </select>
            <input value={firstName} placeholder="First name filter" onChange={handleFirst}></input>
            <input value={lastName} placeholder="Last name filter" onChange={handleLast}></input>
        </form>
    )
}