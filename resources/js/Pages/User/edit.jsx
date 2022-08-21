import {Head, useForm, usePage} from "@inertiajs/inertia-react";
import { Link } from "@inertiajs/inertia-react";
import Base from "@/Layouts/Base";

const Create = () => {
    const { auth } = usePage().props;

    const { data, setData, put, errors, processing } = useForm({
        name: auth.user.name,
    });

    function onSubmit(e) {
        e.preventDefault();
        put(`/user/edit`);
    }

    return (
        <div className="bg-white py-6 sm:py-8 lg:py-12">
            <div className="max-w-screen-md px-4 md:px-8 mx-auto">
                <Head title="投稿作成"></Head>
                <div className="w-full max-w-xs mx-auto">
                    <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">プロフィール編集</h2>
                    <form onSubmit={onSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                        <div className="mb-4">
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
