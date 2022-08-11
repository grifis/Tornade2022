import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import { useEffect } from "react";
import { Head } from "@inertiajs/inertia-react";

const Base = ({ children }) => {
    useEffect(() => {
        console.log("Mount Layout");
        return () => {
            console.log("UnMount Layout");
        };
    }, []);
    return (
        <div className="bg-white lg:pb-12">
            <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
                <Header/>
                <Navigation/>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Base;
