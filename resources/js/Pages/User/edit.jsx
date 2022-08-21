import {Head, useForm, usePage} from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";

const Create = () => {
    const { auth } = usePage().props;

    const { data, setData, put, errors, processing } = useForm({
        name: auth.user.name,
        age: auth.user.age,
        university: auth.user.university,
        one_word: auth.user.one_word,
    });

    function onSubmit(e) {
        e.preventDefault();
        put(`/users/edit`);
    }

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                <Head title="投稿作成"></Head>
                <div className="w-full max-w-xs mx-auto">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">プロフィール編集</h2>
                    <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">  {/*名前*/}
                            <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">名前</label>
                            <input
                                id="title"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={data.name}
                                onChange={(e) => setData("name", e.target.value)}
                            />
                            {errors.name && <div className='text-red-600'>{errors.name}</div>}
                        </div>
                        <div className="mb-4">  {/*年齢*/}
                            <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">年齢</label>
                            <input
                                id="age"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={data.age}
                                onChange={(e) => setData("age", e.target.value)}
                            />
                            {errors.age && <div className='text-red-600'>{errors.age}</div>}
                        </div>
                        <div className="mb-4">  {/*大学*/}
                            <label htmlFor="university" className="block text-gray-700 text-sm font-bold mb-2">大学名</label>
                            <input
                                id="university"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={data.university}
                                onChange={(e) => setData("university", e.target.value)}
                            />
                            {errors.university && <div className='text-red-600'>{errors.university}</div>}
                        </div>
                        <div className="mb-4">  {/*一言*/}
                            <label htmlFor="university" className="block text-gray-700 text-sm font-bold mb-2">一言</label>
                            <input
                                id="one_word"
                                type="text"
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                value={data.one_word}
                                onChange={(e) => setData("one_word", e.target.value)}
                            />
                            {errors.one_word && <div className='text-red-600'>{errors.one_word}</div>}
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            保存する
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

Create.layout = (page) => <Base children={page} />;

export default Create;
