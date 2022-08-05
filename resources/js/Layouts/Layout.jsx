import NavBar from "../Components/NavBar";
import { useEffect } from "react";
import { Head } from "@inertiajs/inertia-react";

const Layout = ({ children }) => {
    useEffect(() => {
        console.log("Mount Layout");
        return () => {
            console.log("UnMount Layout");
        };
    }, []);
    return (
        <>
            <Head>
                <title className="text-xl">My App</title>
            </Head>
            <header>
                <h1 className="text-xl" style={{ textAlign: "center" }}>Logo</h1>
                <NavBar />
            </header>
            <main>{children}</main>
        </>
    );
};

export default Layout;
