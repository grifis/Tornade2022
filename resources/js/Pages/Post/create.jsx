import { Head, useForm } from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";

const Create = () => {
    const { data, setData, post, errors, processing } = useForm({
        title: "",
        body: "",
    });

    function onSubmit(e) {
        e.preventDefault();
        post("/posts/store");
    }

    return (
        <>
            <Head title="投稿作成"></Head>
            <h1>投稿作成ページ</h1>
            <Link
                href={route("posts.index")}
                className="text-blue-600"
            >
                一覧ページへ戻る
            </Link>
            <div className="w-full max-w-xs mx-auto">
                <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">タイトル</label>
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
                        <label htmlFor="body" className="block text-gray-700 text-sm font-bold mb-2">ボディ</label>
                        <textarea
                            id="body"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onChange={(e) => {setData('body', e.target.value)}}
                        >
                            {data.body}
                        </textarea>
                        {errors.body && <div className='text-red-600'>{errors.body}</div>}
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
        </>
    );
};

export default Create;
