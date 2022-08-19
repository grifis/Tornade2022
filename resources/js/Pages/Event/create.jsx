import { Head, useForm } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";

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
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                <Head title="イベント企画作成"></Head>
                <div className="w-full max-w-xs mx-auto">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">イベント企画投稿ページ</h2>
                    <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
                            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">イベント名</label>
                            <input
                                id="title"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={data.title}
                                onChange={(e) => setData("title", e.target.value)}
                            />
                            {errors.title && <div className='text-red-600'>{errors.title}</div>}
                        </div>
                        <div>
                            <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">イベント詳細</label>
                            <textarea
                                id="description"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                onChange={(e) => {setData('description', e.target.value)}}
                            >
                                {data.description}
                            </textarea>
                            {errors.description && <div className='text-red-600'>{errors.description}</div>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            投稿する
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

Create.layout = (page) => <Base children={page} />;

export default Create;
