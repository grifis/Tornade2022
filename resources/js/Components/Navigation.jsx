import { usePage } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

const Navigation = () => {

    const { url } = usePage();
    const tabStyle = "text-gray-600 hover:text-red-500 active:text-indigo-700 text-lg font-semibold transition duration-100 ";
    const tabFocusStyle = `inline-flex items-center text-red-500 text-lg font-semibold gap-1 border-b-2 border-red-500`;

    return (
            <nav className="flex sm:gap-12 gap-6 border-b-2 border-grey-200">
                <Link href="/posts"
                      className={url === "/posts" ? tabFocusStyle : tabStyle}>
                    ホーム
                </Link>
                <Link href="/posts/create"
                      className={url === "/posts/create" ? tabFocusStyle : tabStyle}>
                    投稿する
                </Link>
                <Link href="#"
                      className={url === "#" ? tabFocusStyle : tabStyle}>
                    何か
                </Link>
                <Link href="#"
                      className={url === "#" ? tabFocusStyle : tabStyle}>
                    何か
                </Link>
            </nav>
    );

};

export default Navigation;
