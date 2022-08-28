import { Head, useForm } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";
import Arrow from "../../Components/img/Arrow.png";
import "./Create.css";
import {useState} from "react";

const Create = () => {
    const { data, setData, post, errors, processing } = useForm({
        title: "",
        description: "",
        images:'',
        operator_requirement: "",
        conditions: "",
    });

    const [preImage, setPreImage] = useState('');

    function onSubmit(e) {
        e.preventDefault();
        post("/events/store");
    }

    return (
            <div className="max-w-screen-md px-4 md:px-8 mx-auto mt-8">
                <Head title="イベント企画作成"></Head>
                <div className="w-full max-w-xs mx-auto">
                    <div className="relative mb-2">
                        <Link href='/events' className="absolute">
                            <img
                                src={Arrow}
                                className="bg-white p-1 border border-2 border-gray-900 rounded-full"
                            />
                        </Link>
                        <h2 className="bg-white mx-auto text-center w-1/2 text-xs border border-2 border-yellow-200 rounded-xl">
                            運営メンバーを募集する
                        </h2>
                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="pt-6 pb-8 mb-4 flex flex-col gap-4"
                    >
                        <div>
                            {!preImage ? (<label className="flex items-center justify-center h-40 bg-white border rounded border-black">
                                <input
                                    type="file"
                                    name="file"
                                    className="hidden"
                                    onChange={e => {
                                        setData('images', e.target.files[0]);
                                        const reader = new FileReader();
                                        reader.onload = (e) => {
                                            setPreImage(e.target.result);
                                        }
                                        reader.readAsDataURL(e.target.files[0]);
                                    }}
                                />
                                画像を選択する
                            </label>):
                                (<div className="flex items-center justify-center h-40 bg-white border rounded border-black mb-4 relative">
                                    <svg onClick={() => {
                                        setPreImage(null);
                                    }}
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-full bottom-full w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <img className='h-40' src={preImage}/>
                                </div>)}
                            {errors.images && <div className='text-red-600'>{errors.images}</div>}
                        </div>
                        <div>
                            <label
                                htmlFor="title"
                                className="block text-gray-700 text-sm font-bold mb-2"
                            >
                                タイトル
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
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                onChange={(e) => {
                                    setData("operator_requirement", e.target.value);
                                }}
                            >
                                {data.operator_requirement}
                            </textarea>
                            {errors.operator_requirement && (
                                <div className="text-red-600">
                                    {errors.operator_requirement}
                                </div>
                            )}
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                応募条件
                            </label>
                            <textarea
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                onChange={(e) => {
                                    setData("conditions", e.target.value);
                                }}
                            >
                                {data.conditions}
                            </textarea>
                            {errors.conditions && (
                                <div className="text-red-600">
                                    {errors.conditions}
                                </div>
                            )}
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
