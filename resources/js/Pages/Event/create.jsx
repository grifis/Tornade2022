import { Head, useForm } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";
import Arrow from "../../Components/img/Arrow.png";
import "./Create.css";

const Create = () => {
    const { data, setData, post, errors, processing } = useForm({
        title: "",
        description: "",
    });

    function onSubmit(e) {
        e.preventDefault();
        post("/events/store");
    }

    return (
            <div className="max-w-screen-md px-4 md:px-8 mx-auto border border-black">
                <Head title="イベント企画作成"></Head>
                <div className="w-full max-w-xs mx-auto">
                    <div className="relative mb-2">
                        <button className="absolute">
                            <img
                                src={Arrow}
                                className="bg-white p-1 border border-2 border-gray-900 rounded-full"
                            />
                        </button>
                        <h2 className="bg-white mx-auto text-center w-1/2 text-xs border border-2 border-yellow-200 rounded-xl">
                            運営メンバーを募集する
                        </h2>
                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="pt-6 pb-8 mb-4 flex flex-col gap-4"
                    >
                        <div>
                            <label className="flex items-center justify-center h-40 bg-white border rounded border-black">
                                <input
                                    type="file"
                                    name="file"
                                    className="hidden"
                                />
                                画像を選択する
                            </label>
                        </div>
                        <div>
                            <label
                                htmlFor="title"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                タイトル ※15文字以内
                            </label>
                            <input
                                id="title"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={data.title}
                                placeholder="例：イナズマロックフェス"
                                maxLength="15"
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                            />
                            {errors.title && (
                                <div className="text-red-600">
                                    {errors.title}
                                </div>
                            )}
                        </div>
                        <div>
                            <label
                                htmlFor="description"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                イベントについて
                            </label>
                            <textarea
                                id="description"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                onChange={(e) => {
                                    setData("description", e.target.value);
                                }}
                            >
                                {data.description}
                            </textarea>
                            {errors.description && (
                                <div className="text-red-600">
                                    {errors.description}
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                募集したい人
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                応募条件
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                タグ付け
                            </label>
                            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <label className="my-checkbox">
                        <input type="checkbox" className="check-mark"/>
                        <span className="checkMark"></span>
                        この作品を公開する
                        </label>

                        <div className="flex justify-end pr-2">
                            <button
                                type="submit"
                                disabled={processing}
                                className="postButton w-1/4 h-10 text-xs text-black font-bold rounded border border-black focus:outline-none focus:shadow-outline"
                            >
                                投稿
                            </button>
                        </div>
                    </form>
                </div>
            </div>
    );
};

Create.layout = (page) => <Base children={page} />;

export default Create;
