import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { usePage } from "@inertiajs/inertia-react";
import { Head, useForm } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    const { post } = useForm({});

    const { url, component } = usePage();
    const { auth } = usePage().props;

    // ここから検索のモーダル
    const [isShow, setIsShow] = useState({
        open: "",
        close: "hidden",
    });

    function handleClickShow() {
        setIsShow({
            open: "hidden",
            close: "",
        });
    }

    function handleClickClose() {
        setIsShow({
            open: "",
            close: "hidden",
        });
    }
    // ここまで検索のモーダル

    function onSubmit(e) {
        e.preventDefault();
        if(auth.user){
            post(route("logout"));
        } else {
            post(route("owner.logout"))
        }
    }

    const logined = (
        <form
            onSubmit={onSubmit}
            className="lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8"
        >
            <button className={`inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-indigo-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3 ${isShow.open}`}>
                ログアウト
            </button>
        </form>
    );

    const notLogined = (
        <div className={`lg:flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-2.5 -ml-8 ${isShow}`}>
            <Link
                href="/login"
                className={`inline-block focus-visible:ring ring-indigo-300 text-gray-500 hover:text-red-500 active:text-indigo-600 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-4 py-3 ${isShow.open}`}
            >
                ログイン
            </Link>

            <Link
                href="/register"
                className={`inline-block bg-red-500 hover:bg-red-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-6 py-3 ${isShow.open}`}
            >
                登録
            </Link>
        </div>
    );

    return (
        <header className="flex justify-between items-center py-4 md:py-8">


            {/* ロゴここから */}
            <a
                href="/posts"
                className={`inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5 ${isShow.open}`}
                aria-label="logo"
            >
                <svg
                    width="95"
                    height="94"
                    viewBox="0 0 95 94"
                    className="w-6 h-auto text-red-500"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M96 0V47L48 94H0V47L48 0H96Z" />
                </svg>
                Revengers!
            </a>
            {/* ロゴここまで */}

            {/* スマホ版検索のロゴここから */}
            <div
                className={`sm:hidden ml-auto mr-6 ${isShow.open}`}
                onClick={handleClickShow}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
            </div>

            {/* スマホ版検索のロゴここまで */}

            {/* pc版検索ここから */}
            <form className="hidden sm:flex items-center ml-auto mr-8">
                <label htmlFor="simple-search" className="sr-only">
                    Search
                </label>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor"
                             viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd"
                                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                  clipRule="evenodd"></path>

                        </svg>
                    </div>
                    <input
                        type="text"
                        id="simple-search"
                        className="text-sm rounded-lg block w-full pl-10 p-2.5 outline outline-red-500"
                        placeholder="キーワードで検索"
                        required
                    />
                </div>
                <button type="submit"
                        className="p-2.5 text-sm font-medium text-white bg-red-400 rounded-lg border border-red-700 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>

                    </svg>
                    <span className="sr-only">Search</span>
                </button>
            </form>
            {/* pc版検索ここまで */}

            {/* ボタンここから */}
            { (auth.user || auth.owner) ? logined : notLogined}


            {/*<button type="button"*/}
            {/*        className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2">*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20"*/}
            {/*         fill="currentColor">*/}
            {/*        <path fill-rule="evenodd"*/}
            {/*              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"*/}
            {/*              clip-rule="evenodd"/>*/}
            {/*    </svg>*/}
            {/*    Menu*/}
            {/*</button>*/}
            {/* ボタンここまで */}

            {/* スマホ版検索入力欄ここから */}
            <div
                className={`sm:hidden flex gap-4 items-center w-full ${isShow.close}`}
            >
                <input
                    type="text"
                    id="simple-search"
                    className="text-sm rounded-lg block w-full p-2.5 outline outline-red-500"
                    placeholder="キーワードで検索"
                    required
                />
                <FontAwesomeIcon
                    icon={faCircleXmark}
                    onClick={handleClickClose}
                />
            </div>
            {/* スマホ版検索入力欄ここまで */}
        </header>
    );
};

export default Header;
