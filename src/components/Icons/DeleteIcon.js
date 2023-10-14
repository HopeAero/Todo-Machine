import React from "react";
import { MdOutlineCancel } from 'react-icons/md';

function DeleteIcon(props) {
    return (
        <MdOutlineCancel
        className={"Icon Icon-delete"}
        onClick={props.onDelete}
        >

        </MdOutlineCancel>
    )
}

export { DeleteIcon };