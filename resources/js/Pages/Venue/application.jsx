import { Head, useForm } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";
import './application.css';
import Arrow from "@/Components/img/Arrow.png";
import React from "react";

const Create = (props) => {
    const {venue, userEvents} = props;
    const { data, setData, post, errors, processing } = useForm({
        event_id: "",
        message: "",
    });

    function onSubmit(e) {
        e.preventDefault();
        post(`/venues/apply/store/${venue.id}`);
    }

    return (
        <div className="color py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                <Head title="投稿作成"></Head>
                <div className="w-full max-w-xs mx-auto">
                    <Link
                        href={`/venues/show/${venue.id}`}
                        className="text-blue-600"
                    >
                        <img
                            src={Arrow}
                            className="bg-white p-1 border border-2 border-gray-900 rounded-full"
                        />
                    </Link>
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">{venue.name}</h2>
                    <form onSubmit={onSubmit} className="color rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">イベント</label>
                                    <select
                                        onChange={(e) => setData("event_id", e.target.value)}
                                        className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0a focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                        aria-label="Default select example">
                                        <option selected>申請するイベント</option>
                                        {userEvents.map((event) => (
                                            <option value={event.id} key={event.id}>{event.title}</option>
                                        ))}
                                    </select>
                            {errors.event_id && <div className='text-red-600'>{errors.event_id}</div>}
                        </div>
                        <div>
                            <label htmlFor="body" className="block text-gray-700 text-sm font-bold mb-2">メッセージ</label>
                            <textarea
                                id="body"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                onChange={(e) => {setData('message', e.target.value)}}
                            >
                                {data.message}
                            </textarea>
                            {errors.message && <div className='text-red-600'>{errors.message}</div>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            申請する
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

Create.layout = (page) => <Base children={page} />;

export default Create;
