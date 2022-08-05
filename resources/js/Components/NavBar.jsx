import { Link } from "@inertiajs/inertia-react";
import { usePage } from "@inertiajs/inertia-react";
import "./NavBar.css";

const NavBar = () => {
    const { url, component } = usePage();
    const tabStyle = "inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-blue-600 hover:border-blue-600 dark:hover:text-blue-600";
    const tabFocusStyle = `${tabStyle} text-blue-600 border-blue-600 active dark:text-blue-500 dark:border-blue-500`;

    return (
        <>
            <div>URL: {url}</div>
            <div >Component: {component}</div>
            <nav className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px">
                    <li className="mr-2">
                        <Link
                            href={route("test")}
                            className= {url === "/" ? tabFocusStyle : tabStyle}
                        >
                            Test
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link
                            href={route("about")}
                            className= {url === "/about" ? tabFocusStyle : tabStyle}
                        >
                            About
                        </Link>
                    </li>
                    <li className="mr-2">
                        <Link
                            href={route("user.index")}
                            className= {url === "/user" ? tabFocusStyle : tabStyle}
                        >
                            User
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
