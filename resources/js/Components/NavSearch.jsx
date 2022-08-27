import React from "react";
import "./Navigation.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function NavSearch() {
    return (
        <>
            <div className="inputSpace">
                <input type="text" className="w-full my-4 rounded-3xl"></input>
                <AiOutlineSearch size={20} className="searchIcon" />
            </div>
        </>
    );
}
