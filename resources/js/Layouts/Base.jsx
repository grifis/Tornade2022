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
    if ((url === "/events/create") || (url.substr(0,14) === "/venues/apply/")) {
        BodyArea = "eventCreateBodyArea"
    } else if ((url.substr(0,12) === "/events/show") || (url.substr(0,12) === '/venues/show')){
        BodyArea = "eventShowBodyArea"
    } else if ((url === "/events") || (url.substr(0, 8) === "/events?") ) {
        BodyArea = "eventBodyArea"
    } else if ((url.substr(0,16) === "/events/messages") || (url.substr(0,15) === '/apply/messages') ) {
        BodyArea = "chatArea"
    } else if (url === "/chat/index") {
        BodyArea = "chatBodyArea"
    } else {
        BodyArea = "venueBodyArea"
    }

    let isNav = '';
    if (!((url === "/events") || (url.substr(0, 8) === "/events?")) && !((url === "/venues") || (url.substr(0,8) === "/venues?"))) {
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
