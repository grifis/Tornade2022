import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
import NavSearch from "../Components/NavSearch";
import Selection from "../Components/Selection";
import TestIndex from "../Pages/Event/TestIndex";
import Fes from "../Components/img/fes.jpg";
import Camp from "../Components/img/camp.jpg";
import Fireworks from "../Components/img/fireworks.jpg";
import "./Base.css";
import { useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";

const Base = ({ children }) => {
    useEffect(() => {
        console.log("Mount Layout");
        return () => {
            console.log("UnMount Layout");
        };
    }, []);

    const { url } = usePage();

    const eventBodyArea = "eventBodyArea";
    const venueBodyArea = "venueBodyArea";

    return (
        <>
            <div className="px-4">
                <Header />
            </div>
            <div>
                <Navigation />
            </div>
            <div
                className={`${
                    url === "/events" ? eventBodyArea : venueBodyArea
                } px-2 pb-8`}
            >
                <main>{children}</main>
            </div>
        </>
    );
};

export default Base;
