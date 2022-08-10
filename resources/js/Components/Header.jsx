import { useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Head, useForm } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

const Header = () => {
    const { post } = useForm({
    });

    const { url, component } = usePage();
    const { auth } = usePage().props;
    const tabStyle = "text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100";
    const tabFocusStyle = `inline-flex items-center text-indigo-500 text-lg font-semibold gap-1`;

    function onSubmit(e) {
        e.preventDefault();
        post(route("logout"));
    }

    const logined = (
        <form
            onSubmit={onSubmit}
            className="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
            <button
                  className="inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">
                ログアウト
            </button>
        </form>
    );

    const notLogined = (
        <div
            className="hidden lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8">
            <Link href="/login"
                  className="inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3">
                ログイン
            </Link>

            <Link href="/register"
                  className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-6 py-3">
                登録
            </Link>
        </div>
    );

    const arrow = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800"
             viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"/>
        </svg>
    );

    console.log(auth);
    return (
        <header className="flex justify-between items-center py-4 md:py-8">
            {/* ロゴここから */}
            <a href="/posts"
               className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
               aria-label="logo">
                <svg width="95" height="94" viewBox="0 0 95 94" className="w-6 h-auto text-indigo-500"
                     fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M96 0V47L48 94H0V47L48 0H96Z"/>
                </svg>

                Revenge!!
            </a>
            {/* ロゴここまで */}

            {/* ナビゲーションここから */}
            <nav className="hidden lg:flex gap-12">
                <Link href="/posts"
                   className={url === "/posts" ? tabFocusStyle : tabStyle}>
                    タイムライン
                    {url === "/posts" ? arrow : null}
                </Link>
                <Link href="/posts/create"
                   className={url === "/posts/create" ? tabFocusStyle : tabStyle}>
                    投稿する
                    {url === "/posts/create" ? arrow : null}
                </Link>
                <Link href="#"
                   className={url === "#" ? tabFocusStyle : tabStyle}>
                    何か
                    {url === "#" ? arrow : null}
                </Link>
                <Link href="#"
                   className={url === "#" ? tabFocusStyle : tabStyle}>
                    何か
                    {url === "#" ? arrow : null}
                </Link>
            </nav>
            {/* ナビゲーションここまで */}

            {/* ボタンここから */}
            { auth.user ? logined : notLogined}

            <button type="button"
                    className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"
                     fill="currentColor">
                    <path fill-rule="evenodd"
                          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clip-rule="evenodd"/>
                </svg>
                Menu
            </button>
            {/* ボタンここまで */}
        </header>
    );

};

export default Header;
