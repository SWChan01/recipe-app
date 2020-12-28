import React from 'react';


const CheckBox = (props) =>{
    return (
        <li>
            <input onClick = {props.handleClick} type = "checkbox" checked = {props.checked} value={props.value}/> {props.value}
        </li>
    )
}




export default CheckBox;