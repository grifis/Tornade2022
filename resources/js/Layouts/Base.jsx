import Header from "../Components/Header";
import Navigation from "../Components/Navigation";
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

    console.log(url.substr(0,12));
    let BodyArea;
    if (url === "/events/create") {
        BodyArea = "eventCreateBodyArea"
    } else if (url.substr(0,12) === "/events/show"){
        BodyArea = "eventShowBodyArea"
    } else if (url === "/events") {
        BodyArea = "eventBodyArea"
    } else if (url === "/chat/index") {
        BodyArea = "chatBodyArea"
    } else {
        BodyArea = "venueBodyArea"
    }

    let isNav = '';
    if (!(url === "/events") && !(url === "/venues")) {
        isNav = 'hidden';
    }


    return (
        <>
            <div className="px-4">
                <Header />
            </div>
            <div className={isNav}>
                <Navigation />
            </div>
            <div
                className={`${BodyArea} px-4 pb-8`}
            >
                <main>{children}</main>
            </div>
        </>
    );
};

export default Base;
