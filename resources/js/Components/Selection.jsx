import React from "react";
import "./Selection.css";

export default function Selection(props) {
    return (
            <select className="w-3/10 h-8 py-1 pl-2 pr-6 rounded-lg text-xs">
                <option value={props.title}>{props.title}</option>
                <option>option1</option>
                <option>option2</option>
                <option>option3</option>
                <option>option4</option>
            </select>
    );
}
