import React from "react";
import "./Navigation.css";
import { AiOutlineSearch } from "react-icons/ai";
import {useForm, usePage} from "@inertiajs/inertia-react";

export default function NavSearch() {
    const { url } = usePage();
    const { data, setData, get, errors, processing } = useForm({
        word: "",
    });

    function onSubmit(e) {
        e.preventDefault();
        if(url.substr(0, 7) === "/events"){
            get("/events");
        } else {
            get('/venues');
        }
    }

    return (
        <>
            <form onSubmit={onSubmit}>
                <div className="inputSpace">
                    <input
                        type="text"
                        className="w-full my-4 rounded-3xl"
                        onChange={(e) =>
                            setData("word", e.target.value)
                        }
                        value={data.word}
                    />
                    <AiOutlineSearch size={20} className="searchIcon" />
                </div>
            </form>
        </>
    );
}
