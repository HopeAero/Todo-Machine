/* import React from "react";
//import { ReactComponent as CheckSVG} from "./check.svg";
//import { ReactComponent as DeleteSVG} from "./delete.svg";
import { BiCheck } from 'react-icons/bi';
import { MdOutlineCancel } from 'react-icons/md';

const iconTypes = {
    "check": BiCheck,
    "delete": MdOutlineCancel,
}


function TodoIcon({ type }) {
    return (
        <span className={`Icon Icon-svg Icon-${type}`}
        >   
            {iconTypes[type]()}
        </span>  
    
    );
}

export { TodoIcon }; */