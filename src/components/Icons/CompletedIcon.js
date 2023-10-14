import React from "react";
import { BiCheck } from 'react-icons/bi';

function CompletdIcon(props) {
    return (
        <BiCheck
            className={`Icon Icon-check ${props.completed && "Icon-check--active"}`}
            onClick={props.onComplete}
        >
        </BiCheck>
    );
}

export { CompletdIcon };